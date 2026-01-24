import axios from "axios";
import { API_ENDPOINTS } from "./endpoints";

/**
 * Extract error message from API error response
 */
export function getErrorMessage(error: any): string {
    return error?.response?.data?.message || 'An error occurred';
}

/**
 * Create headers with authentication token
 */
export function getAuthHeaders(token: string): Record<string, string> {
    return {
        'Content-Type': 'application/json',
        token,
    };
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(token?: string | null): boolean {
    return !!token;
}

export const api = {
    // Auth
    login: (data: any) => axios.post(API_ENDPOINTS.AUTH.SIGNIN, data),
    signup: (data: any) => axios.post(API_ENDPOINTS.AUTH.SIGNUP, data),
    // Products
    getProducts: () => axios.get(API_ENDPOINTS.PRODUCTS),
    // Wishlist (requires auth token)
    getWishlist: (token: string) =>
        axios.get(API_ENDPOINTS.WISHLIST, { headers: getAuthHeaders(token) }),
    addToWishlist: (productId: string, token: string) =>
        axios.post(`${API_ENDPOINTS.WISHLIST}/${productId}`, {}, { headers: getAuthHeaders(token) }),
    removeFromWishlist: (productId: string, token: string) =>
        axios.delete(`${API_ENDPOINTS.WISHLIST}/${productId}`, { headers: getAuthHeaders(token) }),
};