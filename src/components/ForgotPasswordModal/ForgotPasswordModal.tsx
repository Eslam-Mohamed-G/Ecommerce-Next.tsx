"use client"
import React, { useState } from 'react';
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner';
import { useFormik } from 'formik';
import * as Yup from "yup";
import authService from '@/src/services/authService';

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

    if (!isOpen) return null;

    // ---- step 1 ----
    const emailFormik = useFormik({
        initialValues: { email: "" },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is required").email("Invalid email address"),
        }),

        onSubmit:async (values) => {
            setLoading(true);
            setGlobalError("");
            setGlobalSuccess("");
            try {
                const response = await authService.forgotPassword({ email: values.email });
                if (response.status === "success" || response.message) {
                    setSavedEmail(values.email);
                    setGlobalSuccess(response.message || "Reset code sent to your email.");
                    setTimeout(() => {
                        setGlobalSuccess("");
                        setStep(2);
                    }, 1500);
                }
            } catch (error: any) {
                setGlobalError("something warring please try agin");
            } finally {
                setLoading(false);
            }
        }
    });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity ease-in-out duration-300">
            <div className="bg-white rounded-lg shadow-xl w-full p-6 max-w-md overflow-hidden">
                {/* header */}
                <div className="w-full relative">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {step === 1 && "Forgot Password"}
                        {step === 2 && "Enter Reset Code"}
                        {step === 3 && "Reset Password"}
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
                        {step === 1 && "Enter your email address to receive a password reset code."}
                        {step === 2 && "We've sent a 6-digit code to your email. Please enter it below."}
                        {step === 3 && "Create a new strong password for your account."}
                    </p>

                    {/* close button */}
                    <button
                        onClick={handleClose}
                        aria-label="Close modal"
                        className="absolute -top-3 -right-3 ms-auto flex items-center justify-center bg-transparent box-border hover:bg-border2Color/10 font-medium rounded text-sm h-8 w-8 cursor-pointer transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* content */}
                <div className="relative">
                    {/* STEP 1 */}
                    {step === 1 && (
                        <form className="animate-fade-right flex flex-col gap-4">
                            <div>
                                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email Address
                                </label>
                                <input
                                    id="modal-email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={emailFormik.values.email}
                                    onChange={emailFormik.handleChange}
                                    onBlur={emailFormik.handleBlur}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primaryColor hover:bg-buttonColor text-white font-semibold py-2 px-4 rounded cursor-pointer transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                            >
                                {loading && <LoadingSpinner size="sm" />}
                                {loading ? "Sending..." : "Send Code"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
};