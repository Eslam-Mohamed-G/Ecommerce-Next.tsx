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
    error: string | null;
    products: Product[];
    fetchProducts: () => Promise<void>;
    wishlist: Product[];
    getUserWishlist: () => Promise<void>;
    cartList: Cart | null;
    getUserCart: () => Promise<void>;
}

const GetProductsContext = createContext<GetProductsContextType | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const [wishlist, setWishlist] = useState<Product[]>([]);
    const { showToast } = useToast();

    const getUserWishlist = async () => {
        const token = getCookie("token") as string | undefined;
        if (!token) {
            showToast("warning", "You are not logged in");
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const response = await wishlistService.getWishlist();
            if (response.data) {
                setWishlist(response.data || []);
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    // useEffect will be used to fetch the wishlist data when the page loads.
    useEffect(() => {
        getUserWishlist();
    }, [wishlist.length]);

    // fetch cart products
    const [cartList, setCartList] = useState<Cart | null>(null);
    const getUserCart = async () => {
        const token = getCookie("token") as string | undefined;
        if (!token) {
            showToast("warning", "You are not logged in");
            return;
        };
        setLoading(true);
        setError(null);
        try {
            const response = await cartService.getCart();
            if (response.data) {
                setCartList(response.data);
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setLoading(false);
        };
    };
    useEffect(() => {
        getUserCart();
    }, []);

    return (
        <GetProductsContext.Provider value={{ loading, error, getUserWishlist, wishlist, products, fetchProducts, cartList, getUserCart }}>
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