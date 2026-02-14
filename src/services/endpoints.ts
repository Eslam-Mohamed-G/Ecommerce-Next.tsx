export const API_BASE_URL = 'https://ecommerce.routemisr.com/api/v1';

export const API_ENDPOINTS = {
    AUTH: {
        SIGNIN: `${API_BASE_URL}/auth/signin`,
        SIGNUP: `${API_BASE_URL}/auth/signup`,
        FORGOT_PASSWORD: `${API_BASE_URL}/auth/forgotPasswords`,
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
        BASE: `${API_BASE_URL}/cart`,
        ITEM: (itemId: string) => `${API_BASE_URL}/cart/${itemId}`,
        APPLY_COUPON: `${API_BASE_URL}/cart/applyCoupon`,
    }
    
} as const;

export const COOKIE_CONFIG = {
    TOKEN: {
        name: 'token',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
        secure: true,
    },
} as const;
