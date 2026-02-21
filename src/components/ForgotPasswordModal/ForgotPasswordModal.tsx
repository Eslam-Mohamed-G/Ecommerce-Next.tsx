"use client"
import React, { useState } from 'react';

interface ForgotPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Step = 1 | 2 | 3;

export default function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
    const [step, setStep] = useState<Step>(1);
    const [loading, setLoading] = useState(false);
    const [globalError, setGlobalError] = useState("");
    const [globalSuccess, setGlobalSuccess] = useState("");
    const [savedEmail, setSavedEmail] = useState("");

    const handleClose = () => {
        setStep(1);
        setGlobalError("");
        setGlobalSuccess("");
        onClose();
    };
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity ease-in-out duration-300">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden relative">
                
            </div>
        </div>
    )
};