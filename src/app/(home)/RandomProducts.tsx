"use client"
import ProductCard from '@/src/components/features/ProductCard/ProductCard';
import { useGetProducts } from '@/src/context/GetProductsContext';
import React, { useEffect } from 'react';

export default function RandomProducts() {
    const {loading, error, products, fetchProducts} = useGetProducts();
    useEffect(() => {
        fetchProducts();
        return () => {
            
        };
    }, []);

    return (
        <div className=''>
            <ProductCard />
        </div>
    )
};