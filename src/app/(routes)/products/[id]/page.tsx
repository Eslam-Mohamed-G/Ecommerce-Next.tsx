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

// Mock product data
const mockProduct = {
    colors: ['#A0BCE0', '#E07575', '#000000'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
};
export default function ProductDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [details, setDetails] = useState<ProductDetails | null>(null);
    // Calculate discount percentage
    const discount = details?.priceAfterDiscount
        ? Math.round(((details?.price - details?.priceAfterDiscount) / details?.price) * 100)
        : 0;

        const [selectedColor, setSelectedColor] = useState(0);
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
                    {/* Rating */}
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => {
                                const fillPercent = Math.min(Math.max(details?.ratingsAverage - i, 0), 1) * 100;
                                return (
                                    <div key={i} className="relative w-5 h-5">
                                        <div className="absolute top-0 left-0 text-grayStarColor">
                                            <svg width="20" height="20" fill="currentColor">
                                                <path d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 6.83189Z" />
                                            </svg>
                                        </div>
                                        <div className="absolute top-0 left-0 text-starColor overflow-hidden" style={{ width: `${fillPercent}%` }}>
                                            <svg width="20" height="20" fill="currentColor">
                                                <path d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 6.83189Z" />
                                            </svg>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <span className="text-text2Color">({details?.ratingsQuantity} Reviews)</span>
                        <span className="text-borderColor">|</span>
                        <span className={details?.quantity ? 'text-successButton' : 'text-primaryColor'}>
                            {details?.quantity} {details?.quantity ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        {details?.priceAfterDiscount ?
                            <>
                                <span className="text-3xl font-semibold">${details?.priceAfterDiscount}</span>
                                {details?.price && (
                                    <span className="text-xl text-text2Color line-through">${details?.price}</span>
                                )}

                                {discount && (
                                    <span className="bg-primaryColor text-white px-2 py-1 rounded text-sm">
                                        -{discount}%
                                    </span>
                                )}
                            </>
                            :
                            <span className="text-3xl font-semibold">${details?.price}</span>
                        }
                    </div>

                    {/* Description */}
                    <p className="text-text2Color border-b border-borderColor pb-4">
                        {details?.description}
                    </p>

                    {/* Colors */}
                    <div>
                        <h3 className="font-semibold mb-3">Colors:</h3>
                        <div className="flex gap-2">
                            {mockProduct.colors.map((color, index) => (
                                <button
                                    type='button'
                                    key={index}
                                    onClick={() => setSelectedColor(index)}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === index ? 'border-textColor scale-110' : 'border-transparent'} cursor-pointer`}
                                    style={{ backgroundColor: color }}
                                    aria-label={`Select color ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}