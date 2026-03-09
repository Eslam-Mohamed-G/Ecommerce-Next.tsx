import apiClient from './apiClient';
import { API_ENDPOINTS } from './endpoints';
import { Order, ShippingAddress, ApiResponse } from '../types';

/**
 * Order Service --> Handles all order-related API calls
*/

/**
 * Create a cash order from the user's cart
 * @param cartId - The ID of the cart to convert to an order
 * @param shippingAddress - Shipping details for the order
*/
export const createCashOrder = async (
    cartId: string,
    shippingAddress: ShippingAddress
): Promise<ApiResponse<Order>> => {
    const response = await apiClient.post(API_ENDPOINTS.ORDER.CASH_ORDER(cartId), {
        shippingAddress,
    });
    return response.data;
};

const orderService = {
    createCashOrder,
};

export default orderService;