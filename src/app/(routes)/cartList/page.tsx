"use client";
import { useGetProducts } from '@/src/context/GetProductsContext';
import React from 'react';

export default function page() {
    const { cartlistLoading, error, cartList, getUserCart } = useGetProducts();
    return (
        <section className=''>

        </section>
    )
};