import apiClient from './apiClient';
import { API_ENDPOINTS } from './endpoints';
import { Product, ApiResponse } from '../types';


/**
 * Get user's wishlist
 */
export const getWishlist =async (): Promise<ApiResponse<Product[]>> => {
    const response = await apiClient.get(API_ENDPOINTS.WISHLIST.BASE);
    return response.data;
}