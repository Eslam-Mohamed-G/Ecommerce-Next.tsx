"use client";
import React, { useEffect } from 'react';

interface ToastMessageProps {
    messageTypy: "success" | "warning" | "error";
    messageContent: string;
    onClose?: () => void;
}

export default function ToastMessage({ messageTypy, messageContent, onClose }: ToastMessageProps) {
    useEffect(() => {
        if (!onClose) return;

        const timer = setTimeout(() => {
            onClose();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onClose]);
    return (
        <section role="status" aria-live="polite" className='fixed top-20 left-0 right-0 z-50 flex items-center justify-center'>
            {/* success message */}
            <div id="toast-success" className="flex items-center w-full max-w-80 p-4 pb-6 bg-white border border-borderColor rounded-xl shadow relative">
                {messageTypy === "success" && (
                    <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-successIcon bg-successButton/10 rounded">
                        <svg className="w-5 h-5" aria-hidden="true" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11.917 9.724 16.5 19 7.5" /></svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                )}

                {messageTypy === "warning" && (
                    <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-[#f97316] bg-[#FDFDEA] rounded">
                        <svg className="w-5 h-5" aria-hidden="true" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                        <span className="sr-only">Warning icon</span>
                    </div>
                )}

                {messageTypy === "error" && (
                    <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-red-500 bg-red-500/10 rounded">
                        <svg className="w-5 h-5" aria-hidden="true" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                        <span className="sr-only">Error icon</span>
                    </div>

                )}

                <div className="ms-3 text-sm font-normal">{messageContent}</div>

                <button type="button" onClick={(e) => { e.preventDefault(); onClose?.(); }} className="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border hover:bg-border2Color/10 font-medium rounded text-sm h-8 w-8 cursor-pointer" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-5 h-5" aria-hidden="true" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                </button>

                <div className="flex items-center absolute left-4 right-5 bottom-3">
                    <div className={`w-full ${messageTypy === "success" ? "bg-successIcon/10" : messageTypy === "warning" ? "bg-[#FDFDEA]" : "bg-red-500/10"} rounded-full h-1.5`}>
                        <div className={`${messageTypy === "success" ? "bg-successIcon" : messageTypy === "warning" ? "bg-[#f97316]" : "bg-red-500"} progress-line-animation`} />
                    </div>
                </div>
            </div>
        </section>
    )
};