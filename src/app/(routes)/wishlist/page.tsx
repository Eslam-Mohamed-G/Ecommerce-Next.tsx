"use client"
import ProductCard, { Product } from '@/src/components/ProductCard/ProductCard';
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

        getUserWishlist();
    }, []);
    return (
        <section className='border border-red-400'>
            {!loading && !error && (
                <div className='w-full lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-8 flex items-center justify-between'>
                    {wishList.length > 0 ? (
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 border border-black">
                            {wishList.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-xl text-text2Color">No products found</p>
                            <p className="text-sm text-text2Color mt-2">Try adjusting your filters</p>
                        </div>
                    )}
                </div>
            )}
        </section>
    )
}