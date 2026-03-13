"use client"
import ProductCard from '@/src/components/features/ProductCard/ProductCard';
import { useGetProducts } from '@/src/context/GetProductsContext';
import Image from 'next/image';
import React, { useEffect, useMemo, useRef } from 'react';

export default function RandomProducts() {
    const { loading, productError, products, fetchProducts } = useGetProducts();

    const randomProducts = useMemo(
        () => [...products].sort(() => .5 - Math.random()).slice(0, 8),
        [products]
    );

    useEffect(() => {
        fetchProducts();
    }, []);

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div className='relative w-full'>
            {/* Buttons */}
            <div className="absolute bottom-full -translate-y-20 md:-translate-y-8 right-0 flex flex-row items-center justify-center gap-2 md:gap-4">
                <button type="button" onClick={scrollLeft} className="flex items-center justify-center w-10 h-10 bg-primaryBackground rounded-full cursor-pointer">
                    <Image src="/icon/arrow-left.svg" alt="icons_arrow-left" width={24} height={24} loading="lazy" />
                </button>

                <button type="button" onClick={scrollRight} className="flex items-center justify-center w-10 h-10 bg-primaryBackground rounded-full cursor-pointer">
                    <Image src="/icon/arrow-right.svg" alt="icons arrow-right" width={24} height={24} loading="lazy" />
                </button>
            </div>

            {loading && (
                <div className='lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
                    {Array.from({ length: 5 }, (_, i) => (
                        <div role="status" key={i} className="flex flex-col gap-4 w-full max-w-sm border border-gray-200 p-4 rounded-lg overflow-hidden">
                            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded-t-lg dark:bg-gray-700">
                                <svg className="w-40 h-40 m-auto text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                </svg>
                            </div>
                            <div className="w-full">
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Error State */}
            {productError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    <p className="font-semibold">Error loading products</p>
                    <p className="text-sm">{productError}</p>
                </div>
            )}

            {!loading && !productError && (
                <div ref={scrollRef} className="flex flex-row gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none">
                    {randomProducts.map((product) => (
                        <ProductCard key={product.id} className='w-56 transition-all ease-in-out duration-300 snap-center shrink-0 group' {...product} />
                    ))}
                </div>
            )}
        </div>
    )
};