"use client";
import React from 'react';

interface QuantitySelectorProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    min?: number;
    max?: number;
}

export default function QuantitySelector({
    quantity,
    onIncrease,
    onDecrease,
    min = 1,
    max = 99
}: QuantitySelectorProps) {
    return (
        <div className="flex items-center border border-borderColor rounded overflow-hidden w-fit">
            <button
                type="button"
                onClick={onDecrease}
                disabled={quantity <= min}
                className="w-10 h-10 flex items-center justify-center hover:bg-primaryBackground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Decrease quantity"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10" />
                </svg>
            </button>
            
            <input
                type="text"
                value={quantity}
                readOnly
                className="w-14 h-10 text-center border-x border-borderColor focus:outline-none"
                aria-label="Quantity"
            />

            <button
                type="button"
                onClick={onIncrease}
                disabled={quantity >= max}
                className="w-10 h-10 flex items-center justify-center bg-primaryColor text-white hover:bg-buttonColor disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Increase quantity"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3v10M3 8h10" />
                </svg>
            </button>
        </div>
    )
}
