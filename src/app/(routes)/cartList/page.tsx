"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { useGetProducts } from '@/src/context/GetProductsContext';
import React, { useEffect } from 'react';
import Link from "next/link";

export default function page() {
    const { cartlistLoading, error, cartList, getUserCart } = useGetProducts();

    useEffect(() => {
        getUserCart();
    }, []);

    return (
        <section className='w-full min-h-96 lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-8'>
            <Breadcrumb items={[{ label: 'Cart' }]} />
            {cartlistLoading && (
                <div className="flex items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primaryColor"></div>
                </div>
            )}

            {!cartlistLoading && !error && (
                <div className="">
                    {cartList?.products.length === 0 ?
                        <div className="text-center py-20">
                            <svg
                                className="mx-auto mb-4 text-text2Color"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                            <p className="text-text2Color mb-6">Add some products to get started!</p>
                            <Link
                                href="/products"
                                className="inline-block bg-primaryColor hover:bg-buttonColor text-white px-8 py-3 rounded transition-colors"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                        :
                        <div className="">
                            8 cart
                        </div>
                    }
                </div>
            )}
        </section>
    )
};