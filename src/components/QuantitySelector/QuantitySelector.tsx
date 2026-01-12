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
        <div>QuantitySelector</div>
    )
}
