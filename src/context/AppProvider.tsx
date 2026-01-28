"use client";
import React from 'react';
import { ToastProvider } from './ToastContext';
import { WishlistProvider } from './GetProductsContext';

/**
 * AppProvider - Main provider that wraps all context providers
 * This centralizes all global state management for the application
*/

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ToastProvider>
            <WishlistProvider>
                {children}
            </WishlistProvider>
        </ToastProvider>
    )
}