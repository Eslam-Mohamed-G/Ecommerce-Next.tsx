"use client";
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../types';

export interface WishlistContextType {
    wishlist: Product[];
    addToWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [wishlist, setWishlist] = useState<Product[]>([]);
    useEffect(() => {
        
        return () => {
            
        };
    }, []);
    return (
        <WishlistContext.Provider value={{}}>
            {children}
        </WishlistContext.Provider>
    )
};