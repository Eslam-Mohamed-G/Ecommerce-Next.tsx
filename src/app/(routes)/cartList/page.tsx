"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { useGetProducts } from '@/src/context/GetProductsContext';
import React, { useEffect } from 'react';

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
        </section>
    )
};