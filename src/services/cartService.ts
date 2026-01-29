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

/**
 * Remove item from cart
*/
export const removeFromCart = async (itemId: string) : Promise<ApiResponse<Cart>> => {
    const response = await apiClient.delete(API_ENDPOINTS.CART.ITEM(itemId));
    return response.data;
};

/**
 * Clear entire cart
*/
export const clearCart = async (): Promise<ApiResponse<any>> => {
    const response = await apiClient.delete(API_ENDPOINTS.CART.BASE);
    return response.data;
};

/**
 * Update cart item quantity
*/
export const updateCartItemQuantity = async (itemId: string, count: number): Promise<ApiResponse<Cart>> => {
    const response = await apiClient.put(API_ENDPOINTS.CART.ITEM(itemId), count);
    return response.data;
};