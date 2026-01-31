"use client";
import { useGetProducts } from '@/src/context/GetProductsContext';
import React from 'react';

export default function page() {
    const { cartlistLoading, error, cartList, getUserCart } = useGetProducts();
    return (
        <section className=''>
            {cartlistLoading && (
                <div className="flex items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primaryColor"></div>
                </div>
            )}
        </section>
    )
};