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
        // Safely get token - only works in client-side
        try {
            const token = getCookie('token');
            if (token && config.headers) {
                config.headers.token = token as string;
            }
        } catch (error) {
            // getCookie might fail in SSR context, ignore silently
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

/**
 * Decode the JWT token and return the user's _id
*/
export function getUserIdFromToken(): string | null {
    try {
        const token = getCookie('token') as string | undefined;
        if (!token) return null;

        const payload = token.split('.')[1];
        const decoded = JSON.parse(atob(payload));
        return decoded?.id || decoded?._id || null;
    } catch {
        return null;
    }
}

export default apiClient;