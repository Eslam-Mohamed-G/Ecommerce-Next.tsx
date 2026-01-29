import apiClient from './apiClient';
import { API_ENDPOINTS } from './endpoints';
import { Cart, ApiResponse } from '../types';
/**
 * Cart Service
*/

/**
 * Add product to cart
*/
export const addToCart = async (productId: string): Promise<ApiResponse<Cart>> => {
    const response = await apiClient.post(API_ENDPOINTS.CART.BASE, productId);
    return response.data;
};