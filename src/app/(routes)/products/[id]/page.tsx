"use client"
import Breadcrumb from '@/src/components/Breadcrumb/Breadcrumb';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; import ImageGallery from '@/src/components/ImageGallery/ImageGallery';
;
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
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [details, setDetails] = useState<ProductDetails | null>(null);

    const fetchProductsDetails = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setDetails(data.data);
            setLoading(false);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Something went wrong');
            }
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchProductsDetails();
    }, [fetchProductsDetails]);

    return (
        <section className='xl:max-w-7xl lg:max-w-5xl m-auto px-4 py-8'>
            <Breadcrumb
                items={[
                    { label: 'Products', href: '/products' },
                    { label: details?.title || '' },
                ]}
            />

            {/* Product Details Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                {/* Image Gallery */}
                {details && details.images?.length > 0 && (
                    <ImageGallery
                        images={details.images}
                        productName={details.title}
                    />
                )}

                {/* Product Info */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold">{details?.title}</h1>

                </div>
            </div>
        </section>
    )
}