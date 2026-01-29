"use client"
import { useToast } from '@/src/context/ToastContext';
import cartService from '@/src/services/cartService';
import { getCookie } from 'cookies-next';
import React, { useState } from 'react';

interface AddToCartButtonProps {
    className: string;
    product_Id: string;
};

export default function AddToCartButton({ className, product_Id }: AddToCartButtonProps) {
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();

    const addToCart = async (product_Id: string) => {
        if (!product_Id) {
            showToast("warning", "There's an error. Please try again.");
            return;
        }

        const token = getCookie("token");
        if (!token) {
            showToast("warning", "You are not logged in");
            return;
        };

        try {
            setLoading(true);
            const response = await cartService.addToCart(product_Id);
            if (response) {
                showToast("success", "Added to your cart");
            };
        } catch (error) {
            showToast("error", "There's an error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button type='button' aria-label='add product to cart' onClick={()=> addToCart(product_Id)} className={className}>Add To Cart</button>
    )
};