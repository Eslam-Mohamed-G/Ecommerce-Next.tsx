"use client"
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; import ImageGallery from '@/src/components/features/ImageGallery/ImageGallery';
import QuantitySelector from '@/src/components/features/QuantitySelector/QuantitySelector';
import ProductCard from '@/src/components/features/ProductCard/ProductCard';
import FavoriteButton from '@/src/components/features/FavoriteButton/FavoriteButton';
import { Product } from '@/src/types';
import productService from '@/src/services/productService';
import AddToCartButton from '@/src/components/features/AddToCartButton/AddToCartButton';

// Mock product data
const mockProduct = {
    colors: ['#A0BCE0', '#E07575', '#000000'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
};

export default function ProductDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [details, setDetails] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

    // Calculate discount percentage
    const discount = details?.priceAfterDiscount
        ? Math.round(((details?.price - details?.priceAfterDiscount) / details?.price) * 100)
        : 0;

    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);

    const fetchProductsDetails = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await productService.getProductById(id);
            if (response.data) {
                setDetails(response.data);
            }
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

    // Fetch related Products from API
    useEffect(() => {
        // Only fetch related products when details are loaded
        if (!details) return;

        const fetchrelatedProducts = async () => {
            try {
                const response = await productService.getAllProducts();

                const filtered = response.data
                    ?.filter((product: Product) => product.category._id === details.category._id && product.id !== details.id)
                    .slice(0, 4) ?? [];
                setRelatedProducts(filtered);
            } catch (err) {
                // Don't set main error state for related products failure
                console.error('Failed to fetch related products:', err);
            }
        };

        fetchrelatedProducts();
    }, [details]);

    return (
        <section className='xl:max-w-7xl lg:max-w-5xl m-auto px-4 py-8'>
            <Breadcrumb
                items={[
                    { label: 'Products', href: '/products' },
                    { label: details?.title || '' },
                ]}
            />

            {/* Loading State */}
            {loading && (
                <div className="flex items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primaryColor"></div>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    <p className="font-semibold">Error loading products</p>
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {!loading && !error && (
                <>
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
                                        const fillPercent = Math.min(Math.max((details?.ratingsAverage ?? 0) - i, 0), 1) * 100;
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
                            <div className='flex flex-row items-center gap-4'>
                                <h3 className="font-semibold">Colors:</h3>
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

                            {/* Sizes */}
                            <div className='flex flex-row items-center gap-4 mt-3'>
                                <h3 className="font-semibold">Size:</h3>
                                <div className="flex gap-3">
                                    {mockProduct.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-10 border rounded transition-all ${selectedSize === size
                                                ? 'bg-primaryColor text-white border-primaryColor'
                                                : 'border-borderColor hover:border-primaryColor'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity and Actions */}
                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <QuantitySelector
                                    quantity={quantity}
                                    onIncrease={() => setQuantity(q => q + 1)}
                                    onDecrease={() => setQuantity(q => q - 1)}
                                />

                                <AddToCartButton aria-label="Add to Cart" product_Id={id} className="flex-1 flex items-center justify-center gap-2 min-w-48 bg-primaryColor hover:bg-buttonColor text-white py-3 px-8 rounded transition-colors duration-300 cursor-pointer"/>

                                <FavoriteButton product_Id={id} cssStyle='w-12 h-12 border border-borderColor hover:border-primaryColor rounded' />
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className='mb-8'>
                        <div className="flex items-center gap-4 mb-6">
                            <span aria-hidden="true" className="bg-primaryColor w-5 h-10 rounded" />
                            <h2 className="text-2xl font-bold">Related Products</h2>
                        </div>

                        {relatedProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                                {relatedProducts.map((product) => (
                                    <ProductCard key={product.id} className='w-full md:w-56 group' {...product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-xl text-text2Color">No products found</p>
                                <p className="text-sm text-text2Color mt-2">Try adjusting your filters</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </section>
    )
}