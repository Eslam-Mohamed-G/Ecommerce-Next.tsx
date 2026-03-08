// ==================== API Response Types ====================
export interface ApiResponse<T> {
    message?: string;
    data?: T;
    token?: string;
    status?: string;
    results?: number;
    metadata?: {
        currentPage: number;
        numberOfPages: number;
        limit: number;
        nextPage?: number;
    };
}

export interface ApiError {
    message: string;
    statusMsg?: string;
    errors?: Array<{
        value: string;
        msg: string;
        param: string;
        location: string;
    }>;
}

export interface Product {
    _id?: string;
    id: string;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    priceAfterDiscount?: number;
    imageCover: string;
    images: string[];
    category: {
        _id: string;
        name: string;
        slug: string;
        image: string;
    };
    brand: {
        _id: string;
        name: string;
        slug: string;
        image: string;
    };
    ratingsAverage: number;
    ratingsQuantity: number;
    sold: number | null;
}

export type ToastType = "success" | "warning" | "error";

export interface ToastMessage {
    type: ToastType;
    message: string;
}

// ==================== User Types ====================
export interface User {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    role: 'user' | 'admin';
    active?: boolean;
}

// ==================== Auth Types ====================
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignUpData {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phone: string;
}

export interface ForgotPasswordData {
    email: string;
}

export interface VerifyResetCodeData {
    resetCode: string;
}

export interface ResetPasswordData {
    email: string;
    newPassword: string;
}

export interface UpdatePasswordData {
    currentPassword: string;
    password: string;
    rePassword: string;
}

// ==================== Address Types ====================
export interface Address {
    _id?: string;
    name: string;
    details: string;
    phone: string;
    city: string;
}

// ==================== Cart Types ====================
export interface CartItem {
    count: number;
    _id: string;
    product: Product;
    price: number;
}

export interface Cart {
    _id: string;
    cartOwner: string;
    products: CartItem[];
    totalCartPrice: number;
    totalPriceAfterDiscount?: number;
}

// ==================== Order Types ====================
export interface ShippingAddress {
    details: string;
    phone: string;
    city: string;
    postalCode: string;
}

export interface OrderItem {
    count: number;
    _id: string;
    product: Pick<Product, '_id' | 'title' | 'imageCover' | 'price'>;
    price: number;
}

export interface Order {
    _id: string;
    user: Pick<User, '_id' | 'name' | 'email' | 'phone'>;
    cartItems: OrderItem[];
    shippingAddress: ShippingAddress;
    taxPrice: number;
    shippingPrice: number;
    totalOrderPrice: number;
    paymentMethodType: 'cash' | 'card';
    isPaid: boolean;
    paidAt?: string;
    isDelivered: boolean;
    deliveredAt?: string;
    createdAt: string;
    updatedAt: string;
    id: string;
}