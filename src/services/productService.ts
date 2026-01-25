import apiClient from './apiClient';
import { API_ENDPOINTS } from './endpoints';
import { Product, ApiResponse } from '../types';

/**
 * Product Service
 * Handles all product-related API calls
 */

/**
 * Get all products with optional query parameters
 */
export const getAllProducts = async (params?: Record<string, any>): Promise<ApiResponse<Product[]>> => {
    const response = await apiClient.get(API_ENDPOINTS.PRODUCTS.BASE, { params });
    return response.data;
};

/**
 * Get single product by ID
*/
export const getProductById = async (id: string): Promise<ApiResponse<Product>> => {
    const response = await apiClient.get(API_ENDPOINTS.PRODUCTS.BY_ID(id));
    return response.data;
};

const productService = {
    getAllProducts,
    getProductById,
}

export default productService;