import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "./endpoints";
import { getCookie } from "cookies-next";
import { ApiError } from "../types";

/**
 * Create Axios instance with base configuration
 */
const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 15000, // 15 seconds
});

/**
 * Request Interceptor - Automatically attach auth token from cookies
 */
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = getCookie('token');

        if (token && config.headers) {
            config.headers.token = token as string;
        }

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);


/**
 * Response Interceptor - Centralized error handling
 */
apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError<ApiError>) => {
        // Handle different error scenarios
        if (error.response) {
            // Server responded with error status
            const apiError: ApiError = {
                message: error.response.data?.message || 'An error occurred',
                statusMsg: error.response.data?.statusMsg,
                errors: error.response.data?.errors,
            };

            // Handle specific status codes
            switch (error.response.status) {
                case 401:
                    // Unauthorized - could trigger logout or redirect
                    console.error('Unauthorized access - please login');
                    break;
                case 403:
                    console.error('Forbidden - insufficient permissions');
                    break;
                case 404:
                    console.error('Resource not found');
                    break;
                case 500:
                    console.error('Server error - please try again later');
                    break;
            }

            return Promise.reject(apiError);
        } else if (error.request) {
            // Request made but no response received
            const networkError: ApiError = {
                message: 'Network error - please check your connection',
            };
            return Promise.reject(networkError);
        } else {
            // Something else happened
            const unknownError: ApiError = {
                message: error.message || 'An unexpected error occurred',
            };
            return Promise.reject(unknownError);
        }
    }
);

/**
 * Extract error message from API error response
 */
export function getErrorMessage(error: any): string {
    if (typeof error === 'string') {
        return error;
    }

    if (error?.message) {
        return error.message;
    }

    if (error?.response?.data?.message) {
        return error.response.data.message;
    }

    return 'An error occurred';
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(token?: string | null): boolean {
    return !!token;
}

/**
 * Get authentication token from cookies
 */
export function getAuthToken(): string | undefined {
    const token = getCookie('token');
    return token as string | undefined;
}

export default apiClient;