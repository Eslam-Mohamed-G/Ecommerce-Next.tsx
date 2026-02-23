"use client";
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

export type ToastType = "success" | "error" | "warning" | "info";
interface Toast {
    id: number;
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
        setToast({ id: Date.now(), type, message, duration });
    };

    const hideToast = () => {
        setToast(null);
    };

    useEffect(() => {
        if (!toast) return;

        const timer = setTimeout(() => {
            hideToast();
        }, toast.duration);

        return () => clearTimeout(timer);
    }, [toast]);

    return (
        <ToastContext.Provider value={{ toast, showToast, hideToast }}>
            {children}
        </ToastContext.Provider>
    )
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used inside ToastProvider");
    return context;
};