"use client";
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../types';
import { getCookie } from 'cookies-next';
import wishlistService from '../services/wishlistService';

export interface WishlistContextType {
    loading: boolean;
    error: string | null;
    wishlist: Product[];
    getUserWishlist: () => Promise<void>;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [wishlist, setWishlist] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getUserWishlist = async () => {
        const token = getCookie("token") as string | undefined;
        if (!token) {
            alert("You are not logged in");
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

    return (
        <WishlistContext.Provider value={{ loading, error, getUserWishlist, wishlist }}>
            {children}
        </WishlistContext.Provider>
    )
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within WishlistProvider');
    }
    return context;
};