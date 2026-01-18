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

export interface ApiResponse<T> {
    message: string;
    data?: T;
    token?: string;
}