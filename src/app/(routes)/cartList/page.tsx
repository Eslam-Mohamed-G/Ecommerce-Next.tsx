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
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2">
                                <h1 className="text-2xl md:text-3xl font-bold mb-6">Shopping Cart</h1>

                                {/* Desktop Table View */}
                                <div className="hidden md:block border border-borderColor rounded-lg overflow-hidden">
                                    <table className="w-full">
                                        <thead className="bg-primaryBackground">
                                            <tr>
                                                <th className="text-left p-4 font-semibold">Product</th>
                                                <th className="text-center p-4 font-semibold">Price</th>
                                                <th className="text-center p-4 font-semibold">Quantity</th>
                                                <th className="text-center p-4 font-semibold">Subtotal</th>
                                                <th className="text-center p-4 font-semibold">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartList?.products.map((item) => (
                                                <tr key={item._id} className="border-t border-borderColor">
                                                    <td className="p-4">
                                                        <div className="flex items-center gap-4">
                                                            <div className="relative w-20 h-20 bg-primaryBackground rounded shrink-0">
                                                                <Image
                                                                    src={item.product.imageCover}
                                                                    alt={item.product.title}
                                                                    fill
                                                                    className="object-contain p-2"
                                                                />
                                                            </div>
                                                            <div>
                                                                <Link
                                                                    href={`/products/${item.product._id}`}
                                                                    className="font-medium hover:text-primaryColor transition-colors"
                                                                >
                                                                    {item.product.title}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 text-center">${item.price}</td>
                                                    <td className="p-4">
                                                    </td>
                                                    <td className="p-4 text-center font-semibold">
                                                        ${item.price * item.count}
                                                    </td>
                                                    <td className="p-4 text-center">
                                                        <button
                                                            className="text-primaryColor hover:text-buttonColor transition-colors"
                                                            aria-label="Remove item"
                                                        >
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            )}
        </section>
    )
};

function showToat(arg0: string, arg1: string) {
    throw new Error('Function not implemented.');
}
