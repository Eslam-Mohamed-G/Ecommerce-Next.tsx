"use client"
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { HeartIcon, TrashIcon } from "../../ui/Icon/Icon";
import LoadingSpinner from "../../ui/LoadingSpinner/LoadingSpinner";
import wishlistService from '@/src/services/wishlistService';
import { useToast } from '@/src/context/ToastContext';
import { getCookie } from 'cookies-next';
import { useGetProducts } from '@/src/context/GetProductsContext';

interface favoriteButtonProps {
    cssStyle: string;
    product_Id: string;
}

export default function FavoriteButton({ cssStyle, product_Id }: favoriteButtonProps) {
    const pathname = usePathname();
    const isWishlistPage = pathname === "/wishList";
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();
    const { getUserWishlist } = useGetProducts();

    const handleWishlistAction = async (action: 'add' | 'remove') => {
        if (!product_Id) {
            console.error("No product selected");
            return;
        }

        const token = getCookie("token");
        if (!token) {
            showToast("warning", "You are not logged in");
            return;
        }

        try {
            setLoading(true);

            if (action === 'add') {
                await wishlistService.addToWishlist(product_Id);
            } else {
                await wishlistService.removeFromWishlist(product_Id);
            }

            showToast(
                "success",
                action === 'add'
                    ? "Added to your wishlist"
                    : "Removed from your wishlist",
            );

        } catch (error) {
            showToast("error", "There's an error. Please try again.");
        } finally {
            setLoading(false);
            getUserWishlist();
        };
    };

    return (
        <div className="">
            <button
                type='button'
                onClick={(e) => {
                    e.preventDefault();
                    handleWishlistAction(isWishlistPage ? 'remove' : 'add');
                }}
                aria-label={isWishlistPage ? "Remove from favorites" : "Add to favorites"}
                className={`${cssStyle} flex items-center justify-center hover:bg-primaryColor hover:text-white transition-colors ease-in-out duration-300 cursor-pointer group/button`}
            >
                {loading ? (
                    <LoadingSpinner size="sm" className="text-primaryColor group-hover/button:text-white" />
                ) : isWishlistPage ? (
                    <TrashIcon />
                ) : (
                    <HeartIcon width={28} height={28}/>
                )}
            </button>
        </div>
    )
};