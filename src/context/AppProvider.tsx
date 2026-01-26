"use client";
import React from 'react';
import { ToastProvider } from './ToastContext';

/**
 * AppProvider - Main provider that wraps all context providers
 * This centralizes all global state management for the application
*/

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ToastProvider>
            {children}
        </ToastProvider>
    )
}