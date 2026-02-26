"use client";
import ProductCard from '@/src/components/features/ProductCard/ProductCard';
import { useGetProducts } from '@/src/context/GetProductsContext';
import React, { useEffect } from 'react';

export default function page() {
    const { wishlistLoading, wishlistError, wishlist, getUserWishlist } = useGetProducts();

    // useEffect will be used to fetch the wishlist data when the page loads.
    useEffect(() => {
        getUserWishlist();
    }, []);

    return (
        <section className=''>
            {wishlistLoading && (
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
            {wishlistError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    <p className="font-semibold">Error loading products</p>
                    <p className="text-sm">{wishlistError}</p>
                </div>
            )}

            {!wishlistLoading && !wishlistError && (
                <div className='w-full lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-8'>
                    <div className="flex items-center gap-2 mb-4">
                        <span aria-hidden="true" className="bg-primaryColor w-5 h-10 rounded" />
                        <h1 className='font-medium text-lg'>Wishlist ({wishlist.length})</h1>
                    </div>
                    {wishlist.length > 0 ? (
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                            {wishlist.map((product) => (
                                <ProductCard key={product.id} {...product} className='animate-zoom-in' />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-xl text-text2Color">No products found</p>
                            <p className="text-sm text-text2Color mt-2">Try adjusting your filters</p>
                        </div>
                    )}
                </div>
            )}
        </section>
    )
}