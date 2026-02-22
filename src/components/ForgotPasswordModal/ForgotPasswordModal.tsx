"use client"
import React, { useState } from 'react';
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner';
import { useFormik } from 'formik';
import * as Yup from "yup";
import authService, { verifyResetCode } from '@/src/services/authService';

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
        emailFormik.resetForm();
        onClose();
    };

    // ---- step 1 ----
    const emailFormik = useFormik({
        initialValues: { email: "" },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is required").email("Invalid email address"),
        }),

        onSubmit: async (values) => {
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
        },
    });

    // --- STEP 2: RESET CODE ---
    const resetCodeFormik = useFormik({
        initialValues: { resetCode: "" },
        validationSchema: Yup.object({
            resetCode: Yup.string().required("Reset code is required"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            setGlobalError("");
            setGlobalSuccess("");
            try {
                const response = await authService.verifyResetCode({ resetCode: values.resetCode });
                if (response.status === "Success" || response.message) {
                    setGlobalSuccess("Code verified successfully.");
                    setTimeout(() => {
                        setGlobalSuccess("");
                        setStep(3);
                    }, 1500);
                }
            } catch (error: any) {
                setGlobalError("someting worring please try agin");
            } finally {
                setLoading(false);
            }
        },
    });

    if (!isOpen) return null;

    const inputClasses =
        "w-full h-10 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all";
    const errorClasses = "text-red-500 text-sm absolute top-full left-0 translate-y-1";

    return (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity ease-in-out duration-300">
            <div className="bg-white rounded-lg shadow-xl w-full p-6 max-w-md overflow-hidden animate-zoom-in">
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
                        <form onSubmit={emailFormik.handleSubmit} className="flex flex-col gap-4">
                            <div className='relative'>
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
                                    className={inputClasses}
                                />

                                {emailFormik.touched.email && emailFormik.errors.email && (
                                    <p className={errorClasses}>{emailFormik.errors.email}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primaryColor hover:bg-buttonColor text-white font-semibold mt-4 py-2 px-4 rounded cursor-pointer transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                            >
                                {loading && <LoadingSpinner size="sm" />}
                                {loading ? "Sending..." : "Send Code"}
                            </button>
                        </form>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                        <form onSubmit={resetCodeFormik.handleSubmit} className="animate-fade-right flex flex-col gap-4">
                            <div className='relative'>
                                <label htmlFor="resetCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Reset Code
                                </label>
                                <input
                                    id="resetCode"
                                    name="resetCode"
                                    type="text"
                                    placeholder="e.g. 123456"
                                    className={inputClasses}
                                    value={resetCodeFormik.values.resetCode}
                                    onChange={resetCodeFormik.handleChange}
                                    onBlur={resetCodeFormik.handleBlur}
                                    maxLength={6}
                                />

                                {resetCodeFormik.touched.resetCode && resetCodeFormik.errors.resetCode && (
                                    <p className={errorClasses}>{resetCodeFormik.errors.resetCode}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primaryColor hover:bg-buttonColor text-white font-semibold py-2 px-4 rounded transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-1"
                            >
                                {loading && <LoadingSpinner size="sm" />}
                                {loading ? "Verifying..." : "Verify Code"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
};