"use client"
import React, { useState } from 'react';

export default function FilterSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Mobile Filter Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-full bg-primaryColor text-white py-3 px-4 rounded-lg mb-4 flex items-center justify-center gap-2 cursor-pointer"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M7 12h10M11 18h2" />
                </svg>
                Filters
            </button>

            {/* Sidebar */}
            <aside className={`
                    fixed lg:static top-0 left-0 h-full lg:h-auto w-80 lg:w-64
                    bg-white lg:bg-transparent z-50 lg:z-auto
                    transform lg:transform-none transition-transform duration-300
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    overflow-y-auto p-6 lg:p-0 border-r lg:border-r-0 border-borderColor
                `}
            >
                {/* Mobile Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="lg:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
                    aria-label="Close filters"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col gap-6">
                    {/* header */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Filters</h2>
                        <button
                            className="text-sm text-primaryColor hover:underline"
                        >
                            Clear All
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}