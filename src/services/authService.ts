
import { ApiResponse, ForgotPasswordData, LoginCredentials, SignUpData, User } from '../types';
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

/**
 * Sign in user
 */
export const signin = async (credentials:LoginCredentials): Promise<ApiResponse<User>> => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.SIGNIN, credentials);
    return response.data;
}

/**
 * Request password reset
*/
export const forgotPassword = async (data: ForgotPasswordData): Promise<ApiResponse<any>> => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, data);
    return response.data;
};

/**
 * Verify reset code
*/
export const verifyResetCode = async (data: VerifyResetCodeData): Promise<ApiResponse<any>> => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.VERIFY_RESET_CODE, data);
    return response.data;
};

const authService = {
    signup,
    signin,
    verifyResetCode
};

export default authService;