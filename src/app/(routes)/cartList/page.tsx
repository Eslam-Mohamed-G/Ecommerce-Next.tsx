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
    const { cartlistLoading, cartError, cartList, getUserCart } = useGetProducts();
    const { showToast } = useToast();

    const [updatingItemId, setUpdatingItemId] = useState<string | null>(null);
    const handleQuantityChange = async (itemId: string | undefined, newCount: number) => {
        if (!itemId || newCount < 1) return;

        try {
            setUpdatingItemId(itemId);
            const response = await cartService.updateCartItemQuantity(itemId, newCount);
            if (response) {
                await getUserCart(false);
                showToast('success', 'Cart updated successfully');
            }
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
            const response = await cartService.removeFromCart(itemId);
            if (response) {
                await getUserCart(false);
                showToast('success', 'Item removed from cart');
            }
        } catch (error) {
            showToast('error', 'Failed to remove item');
        } finally {
            setLoadingDelete(itemId)
        }
    };

    const [confirmCleaningModel, setConfirmCleaningModel] = useState<boolean>(false);
    const [loadingClearCart, setLoadingClearCart] = useState<boolean>(false);
    const handleClearCart = async () => {
        try {
            setLoadingClearCart(true);
            const response = await cartService.clearCart();
            if (response) {
                await getUserCart(false);
                showToast('success', 'All products removed from cart');
            }
        } catch (error) {
            showToast('error', 'Failed to clear cart');
        } finally {
            setLoadingClearCart(false)
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

            {cartError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    <p className="font-semibold">Error loading products</p>
                    <p className="text-sm">{cartError}</p>
                </div>
            )}

            {!cartlistLoading && !cartError && (
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
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-8">
                                <h1 className="text-2xl md:text-3xl font-bold mb-6">Shopping Cart</h1>
                                <div className="flex flex-row items-center justify-between bg-white font-medium shadow-sm rounded py-4 px-6 mb-4">
                                    <span className="text-left">Product</span>
                                    <span className="text-center">Price</span>
                                    <span className="text-center">Quantity</span>
                                    <span className="text-center">Subtotal</span>
                                </div>

                                {cartList?.products.map((item) => (
                                    <div key={item?.product._id} className="flex flex-row items-center justify-between bg-white shadow-sm rounded mb-4 px-2 py-1 md:py-4 md:px-6 animate-fade-down">
                                        {/* image + remove button */}
                                        <div className="flex items-center gap-4 relative">
                                            <button
                                                onClick={() => handleRemoveItem(item?.product?._id)}
                                                className="flex items-center justify-center w-7 h-7 rounded-full bg-primaryColor text-white transition-colors ease-in-out duration-300 absolute -top-2 -left-2 z-30 cursor-pointer group"
                                                aria-label="Remove item"
                                            >
                                                {loadingDelete === item?.product?._id ? <LoadingSpinner size="sm" className="text-white" /> : <TrashIcon width={18} height={18} />}
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

                                        {/* price */}
                                        <div className="text-center">${item.price}</div>

                                        {/* quantity */}
                                        <div className="flex items-center justify-center">
                                            <div className="inline-flex items-center border border-gray-300 rounded">
                                                <button
                                                    onClick={() => handleQuantityChange(item?.product?._id, item.count - 1)}
                                                    disabled={item.count <= 1 || updatingItemId === item?.product?._id}
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
                                                    onClick={() => handleQuantityChange(item?.product?._id, item.count + 1)}
                                                    disabled={updatingItemId === item?.product?._id}
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
                                        onClick={() => setConfirmCleaningModel(true)}
                                        className="px-8 py-3 border border-primaryColor rounded bg-transparent hover:bg-primaryColor hover:text-white font-medium cursor-pointer transition-colors ease-in-out duration-300"
                                    >
                                        Clear Cart
                                    </button>
                                </div>
                                {confirmCleaningModel && (
                                    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center">
                                        <div className="bg-white flex flex-col items-center justify-center gap-4 p-4 capitalize rounded animate-zoom-in">
                                            <h1 className="text-lg font-bold">confirm logout</h1>
                                            <div className="flex flex-row gap-4">
                                                <button type="button" aria-label='clear the cart' onClick={handleClearCart} className="text-primaryColor w-20 py-2 border rounded cursor-pointer">Clear cart</button>
                                                <button type="button" aria-label='cancel the Cleaning' onClick={() => setConfirmCleaningModel(false)} className="bg-primaryColor text-white w-20 py-2 rounded cursor-pointer">cancl</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Coupon and Cart Total */}
                            <div className="lg:col-span-1">
                                <div className="border border-borderColor rounded-lg p-6 sticky top-4">
                                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                                    {/* Coupon Section */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium mb-2">Coupon Code</label>
                                        <div className="grid grid-cols-4 gap-2">
                                            <input
                                                type="text"
                                                placeholder="Enter code"
                                                className="col-span-3 px-4 py-2 border border-borderColor rounded focus:outline-none focus:border-primaryColor"
                                            />
                                            <button
                                                className="col-span-1 bg-primaryColor hover:bg-buttonColor text-white py-2 rounded cursor-pointer transition-colors ease-in-out duration-300"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                    {/* Cart Total */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-text2Color">Subtotal:</span>
                                            <span className="font-medium">${cartList?.totalCartPrice || 0}</span>
                                        </div>

                                        <div className="flex justify-between items-center pb-4 border-b">
                                            <span className="text-text2Color">Shipping:</span>
                                            <span className="font-medium">Free</span>
                                        </div>

                                        <div className="flex justify-between items-center text-lg font-bold pt-2">
                                            <span className="font-semibold">Total:</span>
                                            <span className="font-semibold text-primaryColor">${cartList?.totalPriceAfterDiscount || cartList?.totalCartPrice || 0}</span>
                                        </div>

                                        <button className="w-full mt-6 px-8 py-3 bg-primaryColor hover:bg-buttonColor text-white rounded transition-colors font-medium">
                                            Procees to checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            )}
        </section>
    )
};