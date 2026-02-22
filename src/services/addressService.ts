import apiClient from './apiClient';
import { API_ENDPOINTS } from './endpoints';
import { ApiResponse, Address } from '../types';

/**
 * Address Service
 * Handles all address-related API calls
*/

/**
 * Add new address
*/
export const addAddress = async (addressData: Address): Promise<ApiResponse<Address>> => {
    const response = await apiClient.post(API_ENDPOINTS.ADDRESSES.BASE, addressData);
    return response.data;
};

/**
 * Get user addresses
*/
export const getAddresses = async (): Promise<ApiResponse<Address[]>> => {
    const response = await apiClient.get(API_ENDPOINTS.ADDRESSES.BASE);
    return response.data;
};

const addressService = {
    addAddress,
    getAddresses,
};

export default addressService;