"use client";
import React from 'react';

interface ToastMessageProps {
    messageTypy: string;
    messageContent: string;
}
export default function ToastMessage({ messageTypy, messageContent }: ToastMessageProps) {
    return (
        <section className='fixed top-20 left-0 right-0 z-50 flex items-center justify-center'>
            {/* success message */}
            <div id="toast-success" className="flex items-center w-full max-w-sm p-4 pb-6 bg-white border border-borderColor rounded-xl shadow relative" role="alert">
                <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-successIcon bg-successButton/10 rounded">
                    <svg className="w-5 h-5" aria-hidden="true" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11.917 9.724 16.5 19 7.5" /></svg>
                    <span className="sr-only">Check icon</span>
                </div>
                
                <div className="ms-3 text-sm font-normal">Added to your wishlist successfully.</div>

                <button type="button" className="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border hover:bg-border2Color/10 font-medium rounded text-sm h-8 w-8 cursor-pointer" data-dismiss-target="#toast-success" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-5 h-5" aria-hidden="true" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                </button>

                <div className="flex items-center absolute left-4 right-5 bottom-3">
                    <div className="w-full bg-successIcon/10 rounded-full h-1.5">
                        <div className="bg-successIcon h-1.5 rounded-full" style={{ width: '75%' }} />
                    </div>
                </div>
            </div>
        </section>
    )
};