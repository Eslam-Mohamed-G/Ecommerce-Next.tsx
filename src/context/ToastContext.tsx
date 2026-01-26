"use client";
import React, { createContext, useEffect, useState } from 'react';

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

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <ToastContext.Provider value={ }>
            {children}
        </ToastContext.Provider>
    )
};