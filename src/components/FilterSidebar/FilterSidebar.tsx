"use client"
import React, { useState } from 'react';

export default function FilterSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Mobile Filter Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-full bg-primaryColor text-white py-3 px-4 rounded-lg mb-4 flex items-center justify-center gap-2"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M7 12h10M11 18h2" />
                </svg>
                Filters
            </button>
        </>
    )
}