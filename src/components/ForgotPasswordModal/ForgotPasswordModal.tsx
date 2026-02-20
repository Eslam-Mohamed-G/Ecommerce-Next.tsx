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
        <div>ForgotPasswordModal</div>
    )
};