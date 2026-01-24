"use client"
import { getCookie } from "cookies-next";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import ToastMessage from "../../common/ToastMessage/ToastMessage";
import { HeartIcon, TrashIcon } from "../../ui/Icon/Icon";
import LoadingSpinner from "../../ui/LoadingSpinner/LoadingSpinner";
import { API_ENDPOINTS } from "@/src/lib/constants/api";

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

    const handleWishlistAction = async (action: 'add' | 'remove') => {
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
            const url = action === 'add'
                ? API_ENDPOINTS.WISHLIST
                : `${API_ENDPOINTS.WISHLIST}/${product_Id}`;

            const response = await fetch(url, {
                method: action === 'add' ? 'POST' : "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    token: token,
                },
                body: action === 'add' ? JSON.stringify({ productId: product_Id }) : undefined,
            });

            if (!response.ok) {
                setShowToastMessage({
                    type: "error",
                    message: "Something is wrong, Please try again.",
                });
                throw new Error("Something is wrong, Please try again.");
            };

            await response.json();

            setShowToastMessage({
                type: "success",
                message: action === 'add'
                    ? "Added to your wishlist successfully"
                    : "Removed from your wishlist successfully",
            });

        } catch (error) {
            setShowToastMessage({
                type: "error",
                message: "Something is wrong, Please try again.",
            });
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