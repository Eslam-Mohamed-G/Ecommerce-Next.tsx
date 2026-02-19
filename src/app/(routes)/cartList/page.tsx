"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { useGetProducts } from '@/src/context/GetProductsContext';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import cartService from '@/src/services/cartService';
import { useToast } from '@/src/context/ToastContext';
import LoadingSpinner from '@/src/components/ui/LoadingSpinner/LoadingSpinner';
import { TrashIcon } from '@/src/components/ui/Icon/Icon';

export default function page() {
    const { cartlistLoading, error, cartList, getUserCart } = useGetProducts();
    const { showToast } = useToast();
    const [updatingItemId, setUpdatingItemId] = useState<string | null>(null);

    const handleQuantityChange = async (itemId: string, newCount: number) => {
        if (newCount < 1) return;

        try {
            setUpdatingItemId(itemId);
            await cartService.updateCartItemQuantity(itemId, newCount);
            await getUserCart();
            showToast('success', 'Cart updated successfully');
        } catch (error) {
            showToast('error', 'Failed to update cart');
        } finally {
            setUpdatingItemId(null);
        }
    };

    const [loadingDelete, setLoadingDelete] = useState<string | null>(null);
    const handleRemoveItem = async (itemId?: string) => {
        if (!itemId) return;
        try {
            setLoadingDelete(itemId);
            await cartService.removeFromCart(itemId);
            await getUserCart();
            showToast('success', 'Item removed from cart');
        } catch (error) {
            showToast('error', 'Failed to remove item');
        } finally {
            setLoadingDelete(itemId)
        }
    };

    useEffect(() => {
        getUserCart();
    }, []);

    return (
        <section className='w-full min-h-96 lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-8'>
            <Breadcrumb items={[{ label: 'Cart' }]} />

            {cartlistLoading && (
                <div className="flex items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primaryColor"></div>
                </div>
            )}

            {!cartlistLoading && !error && (
                <div className="">
                    {cartList?.products.length === 0 ?
                        <div className="text-center py-20">
                            <svg
                                className="mx-auto mb-4 text-text2Color"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                            <p className="text-text2Color mb-6">Add some products to get started!</p>
                            <Link
                                href="/products"
                                className="inline-block bg-primaryColor hover:bg-buttonColor text-white px-8 py-3 rounded transition-colors"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                        :
                        <div className="space-y-8">
                            {/* Cart Items */}
                            <h1 className="text-2xl md:text-3xl font-bold mb-6">Shopping Cart</h1>
                            <div className="flex flex-row items-center justify-between bg-white font-medium shadow-sm rounded py-4 px-6 mb-4">
                                <span className="text-left">Product</span>
                                <span className="text-center">Price</span>
                                <span className="text-center">Quantity</span>
                                <span className="text-center">Subtotal</span>
                            </div>

                            {cartList?.products.map((item) => (
                                <div key={item?.product._id} className="flex flex-row items-center justify-between bg-white shadow-sm rounded mb-4 px-2 py-1 md:py-4 md:px-6">
                                    <div className="flex items-center gap-4 relative">
                                        <button
                                            onClick={() => handleRemoveItem(item?.product?._id)}
                                            className="flex items-center justify-center w-7 h-7 rounded-full bg-primaryColor text-white transition-colors ease-in-out duration-300 absolute -top-2 -left-2 z-30 cursor-pointer group"
                                            aria-label="Remove item"
                                        >
                                            {loadingDelete === item?.product?._id ? <LoadingSpinner size="sm" className="text-white" /> : <TrashIcon width={18} height={18}/>}
                                        </button>

                                        <div className="relative w-16 h-16 bg-gray-100 rounded shrink-0">
                                            <Image
                                                src={item.product.imageCover}
                                                alt={item.product.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <Link
                                            href={`/products/${item.product._id}`}
                                            className="font-normal hover:text-primaryColor transition-colors text-sm"
                                        >
                                        </Link>
                                    </div>

                                    <div className="text-center">${item.price}</div>

                                    <div className="flex items-center justify-center">
                                        <div className="inline-flex items-center border border-gray-300 rounded">
                                            <button
                                                onClick={() => handleQuantityChange(item._id, item.count - 1)}
                                                disabled={item.count <= 1 || updatingItemId === item._id}
                                                className="px-3 py-1 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                −
                                            </button>
                                            <input
                                                type="text"
                                                value={item.count.toString().padStart(2, '0')}
                                                readOnly
                                                className="w-12 text-center border-x border-gray-300 py-1 focus:outline-none"
                                            />
                                            <button
                                                onClick={() => handleQuantityChange(item._id, item.count + 1)}
                                                disabled={updatingItemId === item._id}
                                                className="px-3 py-1 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="text-center font-medium">${item.price * item.count}</div>
                                </div>
                            ))}

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
                                <Link
                                    href="/products"
                                    className="px-8 py-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors font-medium"
                                >
                                    Return To Shop
                                </Link>
                                <button
                                    onClick={() => getUserCart()}
                                    className="px-8 py-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors font-medium"
                                >
                                    Update Cart
                                </button>
                            </div>

                            {/* Coupon and Cart Total */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Coupon Section */}

                                {/* Cart Total */}
                                <div className="border-2 border-gray-900 rounded p-6 space-y-4">
                                    <h3 className="text-xl font-semibold mb-4">Cart Total</h3>

                                    <div className="flex justify-between items-center pb-4 border-b">
                                        <span>Subtotal:</span>
                                        <span className="font-medium">${cartList?.totalCartPrice || 0}</span>
                                    </div>

                                    <div className="flex justify-between items-center pb-4 border-b">
                                        <span>Shipping:</span>
                                        <span className="font-medium">Free</span>
                                    </div>

                                    <div className="flex justify-between items-center pt-2">
                                        <span className="font-semibold">Total:</span>
                                        <span className="font-semibold">${cartList?.totalPriceAfterDiscount || cartList?.totalCartPrice || 0}</span>
                                    </div>

                                    <button className="w-full mt-6 px-8 py-3 bg-primaryColor hover:bg-buttonColor text-white rounded transition-colors font-medium">
                                        Procees to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            )}
        </section>
    )
};