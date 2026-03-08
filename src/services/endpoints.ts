export const API_BASE_URL = 'https://ecommerce.routemisr.com/api/v1';
export const API_BASE_URL_V2 = 'https://ecommerce.routemisr.com/api/v2';

export const API_ENDPOINTS = {
    AUTH: {
        SIGNIN: `${API_BASE_URL}/auth/signin`,
        SIGNUP: `${API_BASE_URL}/auth/signup`,
        FORGOT_PASSWORD: `${API_BASE_URL}/auth/forgotPasswords`,
        VERIFY_RESET_CODE: `${API_BASE_URL}/auth/verifyResetCode`,
        RESET_PASSWORD: `${API_BASE_URL}/auth/resetPassword`,
        UPDATE_PASSWORD: `${API_BASE_URL}/users/changeMyPassword`,
    },

    // Addresses
    ADDRESSES: {
        BASE: `${API_BASE_URL}/addresses`,
        BY_ID: (id: string) => `${API_BASE_URL}/addresses/${id}`,
    },
    
    // Products
    PRODUCTS: {
        BASE: `${API_BASE_URL}/products`,
        BY_ID: (id: string) => `${API_BASE_URL}/products/${id}`,
    },

    // Wishlist
    WISHLIST: {
        BASE: `${API_BASE_URL}/wishlist`,
        ITEM: (productId: string) => `${API_BASE_URL}/wishlist/${productId}`,
    },

    // Cart
    CART: {
        BASE: `${API_BASE_URL_V2}/cart`,
        ITEM: (itemId: string) => `${API_BASE_URL_V2}/cart/${itemId}`,
        APPLY_COUPON: `${API_BASE_URL_V2}/cart/applyCoupon`,
    },

    // Order
    ORDER: {
        USR_ORDER: (userId: string) => `${API_BASE_URL}/orders/user/${userId}`,
        CASH_ORDER: (cartId: string) => `${API_BASE_URL_V2}/orders/${cartId}`,
        CHECKOUT_SESSION: (cartId: string) => `${API_BASE_URL}/orders/checkout-session/${cartId}`,
    },
    
} as const;

export const COOKIE_CONFIG = {
    TOKEN: {
        name: 'token',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
        secure: true,
    },
} as const;
