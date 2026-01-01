"use client"
import React from 'react';
import Image from 'next/image'

export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image: string;
    rating: number;
    reviews: number;
    isNew?: boolean;
}

interface ProductCardProps {
    productItem: Product[];
}

export default function ProductCard({ productItem }: ProductCardProps) {
    return (
        <div role="article" className='w-3xs group'>
            <div className="bg-primaryBackground rounded flex items-center justify-center p-6 overflow-hidden relative">
                {/* discount */}
                <div className="bg-primaryColor w-12 h-6 rounded flex items-center justify-center text-white text-xs font-normal absolute top-3 left-3">
                    <span>-35%</span>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center absolute top-3 right-3">
                    <button type='button' aria-label="Add to favorites" className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-textColor cursor-pointer'>
                        <svg aria-hidden="true" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                    </button>
                    <button type='button' aria-label="View details" className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-textColor cursor-pointer'>
                        <svg aria-hidden="true" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                    </button>
                </div>

                {/* img */}
                <div className="">
                    <Image src="/image/Joystick.png" alt='product image' width={190} height={180} loading='lazy' />
                </div>

                <button type='button' aria-label="Add product to cart" className='bg-textColor text-white text-base py-1 absolute left-0 right-0 top-full group-hover:-translate-y-8 cursor-pointer transition-all ease-in-out duration-300'>
                    Add To Cart
                </button>
            </div>
            <div className="mt-2">
                <header><h1 className='text-base font-medium'>HAVIT HV-G92 Gamepad</h1></header>
                <div className="flex flex-row gap-3 text-base font-normal">
                    <span className='text-primaryColor'>$120</span>
                    <span className='text-text2Color relative after:absolute after:top-1/2 after:-translatey-y-1/2 after:left-0 after:right-0 after:bg-text2Color after:h-px'>$160</span>
                </div>
            </div>

            {/* stars */}
            <div className="flex flex-row items-center gap-2 text-sm">
                <div className="flex flex-row gap-1">
                    <span className="sr-only">Rating: out of 5</span>
                    {[...Array(5)].map((_, i) => {
                        const fillPercent = Math.min(Math.max(3.5 - i, 0), 1) * 100;
                        return (
                            <div key={i} className="relative w-4 h-4">
                                {/* gray star */}
                                <div className="absolute top-0 left-0 flex items-center justify-center text-grayStarColor">
                                    <svg fill="currentColor" aria-hidden="true">
                                        <path d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 6.83189Z" />
                                    </svg>
                                </div>

                                {/* gold star */}
                                <div className="flex items-center justify-center text-starColor absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercent}%` }}>
                                    <svg fill="currentColor" aria-hidden="true">
                                        <path d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 6.83189Z" />
                                    </svg>
                                </div>
                            </div>)
                    }
                    )}
                </div>
                <span className='text-text2Color'>(88)</span>
            </div>
        </div>
    )
}