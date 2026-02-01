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
        <section className=''>
            <Breadcrumb items={[{ label: 'Cart' }]} />
            {cartlistLoading && (
                <div className="flex items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primaryColor"></div>
                </div>
            )}
        </section>
    )
};