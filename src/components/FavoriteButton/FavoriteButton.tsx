"use client"
import { getCookie } from "cookies-next";
import React, { useState } from 'react';

interface favoriteButtonProps {
    cssStyle: string;
    product_Id: string;
}

export default function FavoriteButton({ cssStyle, product_Id }: favoriteButtonProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    // POST Add product to wishlist
    const postWishlist = async (product_Id: string) => {
        const token = getCookie("token") as string | undefined;

        if (!product_Id) {
            console.error("No product selected");
            return;
        }

        if (!token) {
            alert("You are not logged in");
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(
                'https://ecommerce.routemisr.com/api/v1/wishlist',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        token: token,
                    },
                    body: JSON.stringify({
                        productId: product_Id,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Already exists');
            }

            await response.json();
            alert('Added to your wishlist');
        } catch (error) {
            console.error('wishlist:', error);
            alert('Already exists');
        } finally {
            setLoading(false);
        }
    };

    return (
        <button type='button' onClick={(e) => { e.preventDefault(); postWishlist(product_Id) }} aria-label="Add to favorites" className={`${cssStyle} flex items-center justify-center hover:bg-primaryColor hover:text-white transition-colors ease-in-out duration-300 cursor-pointer group/button`}>
            {loading ? (
                <svg className="animate-spin h-5 w-5 text-primaryColor group-hover/button:text-white transition-colors ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : (
                <svg aria-hidden="true" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
            )}
        </button>
    )
};