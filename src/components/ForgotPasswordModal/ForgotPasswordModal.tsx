"use client"
import React from 'react';

interface ForgotPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Step = 1 | 2 | 3;
export default function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
    return (
        <div>ForgotPasswordModal</div>
    )
};