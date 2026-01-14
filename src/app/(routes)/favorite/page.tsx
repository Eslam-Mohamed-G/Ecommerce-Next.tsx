"use client"
import { Product } from '@/src/components/ProductCard/ProductCard';
import { getCookie } from 'cookies-next';
import React, { useEffect, useState } from 'react';

export default function page() {
    const [wishList, setWishList] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // useEffect will be used to fetch the wishlist data when the page loads.
    useEffect(() => {
        const getUserWishlist = async () => {
            const token = getCookie("token") as string | undefined;
            if (!token) {
                alert("You are not logged in");
                return;
            }

            setLoading(true);
            setError("");

            try {
                const response = await fetch(
                    "https://ecommerce.routemisr.com/api/v1/wishlist",
                    {
                        method: "GET",
                        headers: {
                            token: token,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch wishlist");
                }

                const data = await response.json();
                setWishList([...data.data]);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        }
        return () => {

        };
    }, []);
    return (
        <div>page</div>
    )
}