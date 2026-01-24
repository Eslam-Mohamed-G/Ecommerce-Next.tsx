import apiClient from './apiClient';
import { API_ENDPOINTS } from './endpoints';
import { Product, ApiResponse } from '../types';

/**
 * Wishlist Service
 * Handles all wishlist-related API calls
 */

/**
 * Get user's wishlist
 */
export const getWishlist =async (): Promise<ApiResponse<Product[]>> => {
    const response = await apiClient.get(API_ENDPOINTS.WISHLIST.BASE);
    return response.data;
}

/**
 * Add product to wishlist
 */
export const addToWishlist = async (productId:string): Promise<ApiResponse<Product[]>> => {
    const response = await apiClient.post(API_ENDPOINTS.WISHLIST.BASE, {productId});
    return response.data;
};

/**
 * Remove product from wishlist
 */
export const removeFromWishlist = async (productId:string): Promise<ApiResponse<Product[]>> => {
    const response = await apiClient.delete(API_ENDPOINTS.WISHLIST.ITEM(productId));
    return response.data;
};

const wishlistService = {
    getWishlist,
    addToWishlist,
    removeFromWishlist,
};

export default wishlistService;