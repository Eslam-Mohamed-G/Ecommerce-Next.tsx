
import { ApiResponse, SignUpData, User } from '../types';
import apiClient from './apiClient';
import { API_ENDPOINTS } from './endpoints';
/**
 * Authentication Service
 * Handles all authentication-related API calls
 */

/**
 * Sign up new user
 */
export const signup = async (userData: SignUpData): Promise<ApiResponse<User>> => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.SIGNUP, userData);
    return response.data;
};