"use client"
import { getCookie } from "cookies-next";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import ToastMessage from "../ToastMessage/ToastMessage";
import { HeartIcon, TrashIcon } from "../ui/Icon/Icon";
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner";

interface favoriteButtonProps {
    cssStyle: string;
    product_Id: string;
}

export default function FavoriteButton({ cssStyle, product_Id }: favoriteButtonProps) {
    const pathname = usePathname();
    const isWishlistPage = pathname === "/wishList";
    const [loading, setLoading] = useState(false);

    const [showToastMessage, setShowToastMessage] = useState<{
        type: "success" | "warning" | "error";
        message: string;
    } | null>(null);

    // POST Add product to wishlist
    const postWishlist = async (product_Id: string) => {
        const token = getCookie("token") as string | undefined;

        if (!product_Id) {
            console.error("No product selected");
            return;
        }

        if (!token) {
            setShowToastMessage({
                type: "warning",
                message: "You are not logged in",
            });
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(
                'https://ecommerce.routemisr.com/api/v1/wishlist',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        token: token,
                    },
                    body: JSON.stringify({
                        productId: product_Id,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Already exists');
            }

            await response.json();
            setShowToastMessage({
                type: "success",
                message: "Added to your wishlist successfully",
            });
        } catch (error) {
            console.error('wishlist:', error);
            setShowToastMessage({
                type: "error",
                message: "Something is wrong, Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    // Remove product from wishlist
    const removeWishlist = async (product_Id: string) => {
        const token = getCookie("token") as string | undefined;

        if (!product_Id) {
            console.error("No product selected");
            return;
        }

        if (!token) {
            setShowToastMessage({
                type: "warning",
                message: "You are not logged in",
            });
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(
                `https://ecommerce.routemisr.com/api/v1/wishlist/${product_Id}`,
                {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                        token: token,
                    }
                }
            );

            if (!response.ok) {
                throw new Error("It wasn't deleted. Please try again.");
            }

            await response.json();

            setShowToastMessage({
                type: "success",
                message: "Removed from your wishlist successfully",
            });

        } catch (error) {
            console.error('wishlist:', error);
            setShowToastMessage({
                type: "error",
                message: "Something is wrong, Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="">
            {isWishlistPage ?
                <button type='button' onClick={(e) => { e.preventDefault(); removeWishlist(product_Id) }} aria-label="remove from favorites" className={`${cssStyle} flex items-center justify-center hover:bg-primaryColor hover:text-white transition-colors ease-in-out duration-300 cursor-pointer group/button`}>
                    {loading ? (
                        // <svg className="animate-spin h-5 w-5 text-primaryColor group-hover/button:text-white transition-colors ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        //     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        //     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        // </svg>
                        <LoadingSpinner size="sm" className="text-primaryColor group-hover/button:text-white" />
                    ) : (
                        <TrashIcon />
                    )}
                </button>
                :
                <button type='button' onClick={(e) => { e.preventDefault(); postWishlist(product_Id) }} aria-label="Add to favorites" className={`${cssStyle} flex items-center justify-center hover:bg-primaryColor hover:text-white transition-colors ease-in-out duration-300 cursor-pointer group/button`}>
                    {loading ? (
                        // <svg className="animate-spin h-5 w-5 text-primaryColor group-hover/button:text-white transition-colors ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        //     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        //     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        // </svg>
                        <LoadingSpinner size="sm" className="text-primaryColor group-hover/button:text-white" />
                    ) : (
                        <HeartIcon />
                    )}
                </button>
            }

            {showToastMessage && (
                <ToastMessage
                    messageTypy={showToastMessage.type}
                    messageContent={showToastMessage.message}
                    onClose={() => setShowToastMessage(null)}
                />
            )}
        </div>
    )
};