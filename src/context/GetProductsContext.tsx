"use client";
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Cart, Product } from '../types';
import { getCookie } from 'cookies-next';
import wishlistService from '../services/wishlistService';
import productService from '../services/productService';
import { useToast } from './ToastContext';
import cartService from '../services/cartService';

export interface GetProductsContextType {
    loading: boolean;
    productError: string | null;
    wishlistLoading: boolean;
    wishlistError: string | null;
    cartlistLoading: boolean;
    cartError: string | null;
    error: string | null;
    products: Product[];
    fetchProducts: () => Promise<void>;
    wishlist: Product[];
    getUserWishlist: () => Promise<void>;
    cartList: Cart | null;
    getUserCart: (showLoading?: boolean) => Promise<void>;
}

const GetProductsContext = createContext<GetProductsContextType | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [productError, setProductError] = useState<string | null>(null);

    // fetch products data 
    const [products, setProducts] = useState<Product[]>([]);
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await productService.getAllProducts();

            if (response.data) {
                setProducts(response.data);
            }
        } catch (err) {
            setProductError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const [wishlistLoading, setWishlistLoading] = useState(false);
    const [wishlistError, setWishlistError] = useState<string | null>(null);
    const [wishlist, setWishlist] = useState<Product[]>([]);
    const { showToast } = useToast();

    const getUserWishlist = async () => {
        const token = getCookie("token") as string | undefined;
        if (!token) {
            showToast("warning", "You are not logged in");
            return;
        }

        setWishlistLoading(true);
        setWishlistError(null);
        try {
            const response = await wishlistService.getWishlist();
            if (response.data) {
                setWishlist(response.data || []);
            }
        } catch (error) {
            setWishlistError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setWishlistLoading(false);
        }
    };

    // useEffect will be used to fetch the wishlist data when the page loads.
    useEffect(() => {
        getUserWishlist();
    }, []);

    // fetch cart products
    const [cartlistLoading, setCartlistLoading] = useState(false);
    const [cartError, setCartError] = useState<string | null>(null);
    const [cartList, setCartList] = useState<Cart | null>(null);
    const getUserCart = async (showLoading: boolean = true) => {
        const token = getCookie("token") as string | undefined;
        if (!token) {
            showToast("warning", "You are not logged in");
            return;
        };

        if (showLoading) {
            setCartlistLoading(true);
        }

        setCartError(null);
        try {
            const response = await cartService.getCart();
            if (response.data) {
                setCartList(response.data);
            }
        } catch (error) {
            setCartError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            if (showLoading) {
                setCartlistLoading(false);
            }
        };
    };
    useEffect(() => {
        getUserCart();
    }, []);

    return (
        <GetProductsContext.Provider value={{ loading, wishlistLoading, cartlistLoading, productError, getUserWishlist, wishlistError, wishlist, products, fetchProducts, cartError, cartList, getUserCart }}>
            {children}
        </GetProductsContext.Provider>
    )
};

export const useGetProducts = () => {
    const context = useContext(GetProductsContext);
    if (!context) {
        throw new Error('useWishlist must be used within WishlistProvider');
    }
    return context;
};