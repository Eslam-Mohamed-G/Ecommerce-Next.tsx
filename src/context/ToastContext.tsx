"use client";
import React, { createContext, useEffect, useState } from 'react';

export type ToastType = "success" | "error" | "warning" | "info";
export interface ToastContextType {
    type: ToastType;
    message: string;
    duration?: number;
    showToast: boolean;
    removeToast: void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <ToastContext.Provider value={ }>
            {children}
        </ToastContext.Provider>
    )
};