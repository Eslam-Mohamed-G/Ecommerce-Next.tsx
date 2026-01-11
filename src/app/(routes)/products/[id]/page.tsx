"use client"
import Breadcrumb from '@/src/components/Breadcrumb/Breadcrumb'
import React from 'react';
interface ProductDetails {
    _id?: string;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    priceAfterDiscount?: number;
    imageCover: string;
    images: string[];
    category: {
        _id: string;
        name: string;
        slug: string;
        image: string;
    };
    brand: {
        _id: string;
        name: string;
        slug: string;
        image: string;
    };
    ratingsAverage: number;
    ratingsQuantity: number;
    sold: number | null;
}
export default function ProductDetailsPage() {  
    return (
        <section className='xl:max-w-7xl lg:max-w-5xl m-auto px-4 py-8'>
            <Breadcrumb
                items={[
                    { label: 'Products', href: '/products' },
                    { label: 'mockProduct.name' },
                ]}
            />
        </section>
    )
}
