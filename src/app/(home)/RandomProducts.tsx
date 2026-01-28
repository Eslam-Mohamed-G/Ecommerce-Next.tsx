"use client"
import ProductCard from '@/src/components/features/ProductCard/ProductCard';
import { useGetProducts } from '@/src/context/GetProductsContext';
import React, { useEffect } from 'react';

export default function RandomProducts() {
    const { loading, error, products, fetchProducts } = useGetProducts();

    const randomProducts = [...products].sort(() => .5 - Math.random()).slice(0, 5);
    
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className=''>
            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
                    {randomProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            )}
        </div>
    )
};