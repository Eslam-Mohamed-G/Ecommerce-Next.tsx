"use client";
import React, { createContext, useState } from 'react';

export interface ToastContextType {
    type: "success" | "error" | "warning" | "info";
    message: string;
    duration?: number;
    showToast: void;
    removeToast: void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setstate] = useState();
    return (
        <ToastContext.Provider value={ }>
            {children}
        </ToastContext.Provider>
    )
};