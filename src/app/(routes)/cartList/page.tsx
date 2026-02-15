"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { useGetProducts } from '@/src/context/GetProductsContext';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import cartService from '@/src/services/cartService';
import { useToast } from '@/src/context/ToastContext';

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

    const handleRemoveItem = async (itemId: string) => {
        try {
            await cartService.removeFromCart(itemId);
            await getUserCart();
            showToast('success', 'Item removed from cart');
        } catch (error) {
            showToast('error', 'Failed to remove item');
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
                            <div className="">
                                <h1 className="text-2xl md:text-3xl font-bold mb-6">Shopping Cart</h1>

                                {/* Cart Table */}
                                <div className="bg-white shadow-sm rounded">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="text-left py-4 px-6 font-medium">Product</th>
                                                    <th className="text-center py-4 px-6 font-medium">Price</th>
                                                    <th className="text-center py-4 px-6 font-medium">Quantity</th>
                                                    <th className="text-center py-4 px-6 font-medium">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartList?.products.map((item) => (
                                                    <tr key={item._id} className="border-b hover:bg-gray-50 transition-colors">
                                                        <td className="py-6 px-6">
                                                            <div className="flex items-center gap-4">
                                                                <button
                                                                    onClick={() => handleRemoveItem(item._id)}
                                                                    className="text-red-500 hover:text-red-700 transition-colors shrink-0"
                                                                    aria-label="Remove item"
                                                                >
                                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                        <circle cx="12" cy="12" r="10" />
                                                                        <path d="M15 9l-6 6M9 9l6 6" />
                                                                    </svg>
                                                                </button>
                                                                <div className="relative w-16 h-16 bg-gray-100 rounded shrink-0">
                                                                    <Image
                                                                        src={item.product.imageCover}
                                                                        alt={item.product.title}
                                                                        fill
                                                                        className="object-contain p-2"
                                                                    />
                                                                </div>
                                                                <Link
                                                                    href={`/products/${item.product._id}`}
                                                                    className="font-normal hover:text-primaryColor transition-colors text-sm"
                                                                >
                                                                    {item.product.title}
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className="py-6 px-6 text-center">${item.price}</td>
                                                        <td className="py-6 px-6">
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
                                                        </td>
                                                        <td className="py-6 px-6 text-center font-medium">${item.price * item.count}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 px-6 border-t">
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
                                </div>
                            </div>
                        </div>
                    }
                </div>
            )}
        </section>
    )
};