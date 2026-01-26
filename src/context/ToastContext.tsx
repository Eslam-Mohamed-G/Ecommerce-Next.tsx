"use client";
import React, { ReactNode, createContext, useEffect, useState } from 'react';

export type ToastType = "success" | "error" | "warning" | "info";
interface Toast {
    type: ToastType;
    message: string;
    duration?: number;
};
interface ToastContextType {
    toast: Toast | null;
    showToast: (type: ToastType, message: string, duration?: number) => void;
    hideToast: () => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toast, setToast] = useState<Toast | null>(null);

    const showToast = (
        type: ToastType,
        message: string,
        duration: number = 3000
    ) => {
        setToast({ type, message, duration });
    };

    const hideToast = () => {
        setToast(null);
    };
    
    return (
        <ToastContext.Provider value={ }>
            {children}
        </ToastContext.Provider>
    )
};