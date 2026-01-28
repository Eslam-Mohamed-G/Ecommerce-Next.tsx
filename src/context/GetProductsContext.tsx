"use client";
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../types';
import { getCookie } from 'cookies-next';
import wishlistService from '../services/wishlistService';
import { useToast } from './ToastContext';

export interface GetProductsContextType {
    loading: boolean;
    error: string | null;
    wishlist: Product[];
    getUserWishlist: () => Promise<void>;
}

const GetProductsContext = createContext<GetProductsContextType | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [wishlist, setWishlist] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {showToast} = useToast();

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
    
    return (
        <GetProductsContext.Provider value={{ loading, error, getUserWishlist, wishlist }}>
            {children}
        </GetProductsContext.Provider>
    )
};

export const useWishlist = () => {
    const context = useContext(GetProductsContext);
    if (!context) {
        throw new Error('useWishlist must be used within WishlistProvider');
    }
    return context;
};