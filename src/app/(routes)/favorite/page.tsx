"use client"
import { Product } from '@/src/components/ProductCard/ProductCard';
import React, { useEffect, useState } from 'react';

export default function page() {
    const [wishList, setWishList] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        
        return () => {

        };
    }, []);
    return (
        <div>page</div>
    )
}