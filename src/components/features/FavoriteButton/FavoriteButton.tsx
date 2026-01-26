"use client"
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { HeartIcon, TrashIcon } from "../../ui/Icon/Icon";
import LoadingSpinner from "../../ui/LoadingSpinner/LoadingSpinner";
import wishlistService from '@/src/services/wishlistService';
import { getErrorMessage } from '@/src/services/apiClient';
import { useToast } from '@/src/context/ToastContext';

interface favoriteButtonProps {
    cssStyle: string;
    product_Id: string;
}

export default function FavoriteButton({ cssStyle, product_Id }: favoriteButtonProps) {
    const pathname = usePathname();
    const isWishlistPage = pathname === "/wishList";
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();

    const handleWishlistAction = async (action: 'add' | 'remove') => {
        if (!product_Id) {
            console.error("No product selected");
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
                    ? "Added to your wishlist successfully"
                    : "Removed from your wishlist successfully",
            );

        } catch (error) {
            showToast(
                "error",
                getErrorMessage(error),
            );
        } finally {
            setLoading(false);
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
                    <HeartIcon />
                )}
            </button>
        </div>
    )
};