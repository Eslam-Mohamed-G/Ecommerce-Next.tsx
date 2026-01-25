import apiClient from './apiClient';
import { API_ENDPOINTS } from './endpoints';
import { Product, ApiResponse } from '../types';

/**
 * Get all products with optional query parameters
 */
export const getAllProducts = async (params?: Record<string, any>): Promise<ApiResponse<Product[]>> => {
    const response = await apiClient.get(API_ENDPOINTS.PRODUCTS.BASE, { params });
    return response.data;
};