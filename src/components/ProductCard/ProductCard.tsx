"use client"
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { Product } from '@/src/lib/types';
import { StarIcon } from '../ui/Icon/Icon';

export default function ProductCard({ id, title, price, priceAfterDiscount, imageCover, ratingsAverage, ratingsQuantity }: Product) {
    // Calculate discount percentage
    const discount = priceAfterDiscount
        ? Math.round(((price - priceAfterDiscount) / price) * 100)
        : 0;

    const displayPrice = priceAfterDiscount || price;
    return (
        <Link href={`/products/${id}`} role="article" className='w-full md:w-56 group'>
            <div className="bg-primaryBackground rounded flex items-center justify-center p-6 overflow-hidden relative">
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                    {discount > 0 && (
                        <span className="bg-primaryColor text-white text-xs px-3 py-1 rounded">
                            -{discount}%
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 items-center justify-center absolute top-3 right-3 z-10">
                    <FavoriteButton cssStyle={"w-8 h-8 bg-white rounded-full"} product_Id={id} />

                    <button type='button' onClick={(e) => { e.preventDefault() }} aria-label="View details" className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-primaryColor hover:text-white transition-colors ease-in-out duration-300 cursor-pointer'>
                        <svg aria-hidden="true" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                    </button>
                </div>

                {/* img */}
                <div className="relative h-48 flex items-center justify-center p-6">
                    <Image src={imageCover} alt={title} width={190} height={180} loading='lazy' className='object-contain group-hover:scale-110 transition-transform duration-300' />
                </div>

                <button type='button' aria-label="Add product to cart" className='bg-textColor text-white text-base py-1 absolute left-0 right-0 top-full group-hover:-translate-y-8 cursor-pointer transition-all ease-in-out duration-300'>
                    Add To Cart
                </button>
            </div>

            {/* Product Info */}
            <div className="mt-2">
                <h3 className="font-medium text-base line-clamp-2 group-hover:text-primaryColor transition-colors ease-in-out duration-300">{title}</h3>
                <div className="flex items-center gap-3 mt-2">
                    <span className="text-primaryColor font-semibold">
                        ${displayPrice}
                    </span>
                    {priceAfterDiscount && (
                        <span className="text-text2Color line-through text-sm">
                            ${price}
                        </span>
                    )}
                </div>
            </div>

            {/* stars */}
            <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row gap-1">
                    <span className="sr-only">Rating: {ratingsAverage} out of 5</span>
                    {[...Array(5)].map((_, i) => {
                        const fillPercent = Math.min(Math.max(ratingsAverage - i, 0), 1) * 100;
                        return <StarIcon key={i} fillPercent={fillPercent} />;
                    })}
                </div>
                <span className="text-text2Color text-sm">({ratingsQuantity})</span>
            </div>
        </Link>
    )
}