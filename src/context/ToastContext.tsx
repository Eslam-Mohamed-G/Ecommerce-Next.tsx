"use client";
import React, { createContext, useState } from 'react';

const ToastContext = createContext();

export default function ToastProvider({ children }) {
    const [state, setstate] = useState();
    return (
        <ToastContext.Provider value={ }>
            {children}
        </ToastContext.Provider>
    )
};