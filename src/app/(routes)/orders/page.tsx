"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { PlusIcon } from '@/src/components/ui/Icon/Icon';
import { getUserIdFromToken } from '@/src/services/apiClient';
import { getUserOrders } from '@/src/services/orderService';
import { Order } from '@/src/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function page() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<string | null>(null);
    const toggleOrder = (id: string) => {
        setIsOpen((prev) => (prev === id ? null : id));
    };

    useEffect(() => {
        const fetchOrders = async () => {
            const userId = getUserIdFromToken();
            if (!userId) {
                setError('You must be logged in to view your orders.');
                return;
            }

            try {
                setLoading(true);
                const data = await getUserOrders(userId);
                setOrders(Array.isArray(data) ? data : []);
            } catch (err: any) {
                setError(err?.message || 'Failed to load orders.');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <section className="w-full min-h-96 lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-8">
            <Breadcrumb items={[{ label: 'My Orders' }]} />

            {/* ───────── Loading Skeleton ───────── */}
            {loading && (
                <div className="flex flex-col gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="border border-borderColor rounded-md p-5 animate-pulse">
                            <div className="flex flex-wrap justify-between gap-4 mb-4">
                                <div className="h-4 bg-gray-200 rounded w-40" />
                                <div className="h-4 bg-gray-200 rounded w-24" />
                            </div>
                            <div className="flex gap-3 mb-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-14 h-14 bg-gray-200 rounded" />
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="h-4 bg-gray-200 rounded w-28" />
                                <div className="h-6 bg-gray-200 rounded w-20" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* ───────── Error message ───────── */}
            {!loading && error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-lg text-center">
                    <p className="font-semibold mb-1">Something went wrong</p>
                    <p className="text-sm">{error}</p>
                    <Link href="/login" className="mt-3 inline-block text-sm text-primaryColor underline">Go to Login</Link>
                </div>
            )}

            {/* ───────── Empty State ───────── */}
            {!loading && !error && orders.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <h2 className="text-xl font-semibold text-text2Color">No orders yet</h2>
                    <p className="text-sm text-text2Color">Looks like you haven't placed any orders.</p>
                    <Link href="/products" className="mt-2 px-6 py-2.5 bg-primaryColor text-white rounded font-medium hover:opacity-90 transition-opacity">
                        Start Shopping
                    </Link>
                </div>
            )}

            {/* ───────── Orders List ───────── */}
            {!loading && !error && orders.length > 0 && (
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-text2Color">{orders.length} {orders.length === 1 ? 'order' : 'orders'} found</p>
                    {orders.map((order) => {
                        const date = new Date(order.createdAt).toLocaleDateString('en-GB', {
                            day: 'numeric', month: 'short', year: 'numeric',
                        });
                        const shortId = order._id.slice(-8).toUpperCase();
                        return (
                            <article key={order._id} className="border border-borderColor rounded-md overflow-hidden hover:shadow-md transition-shadow ease-in-out duration-300">
                                {/* Header */}
                                <div className="bg-primaryBackground px-5 py-3 flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                                        <span className="text-xs text-text2Color">Order <span className="font-semibold text-textColor">#{shortId}</span></span>
                                        <span className="text-xs text-text2Color">{date}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 items-center">
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 h-fit rounded-md text-xs font-medium ${order.isPaid ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                            {order.isPaid ? '✅ Paid' : '⏳ Unpaid'}
                                        </span>
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 h-fit rounded-md text-xs font-medium ${order.isDelivered ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                                            {order.isDelivered ? '✅ Delivered' : '📦 Pending'}
                                        </span>
                                        <button type='button' onClick={() => toggleOrder(order._id)} className='flex items-center justify-center text-white bg-primaryColor w-8 h-8 rounded-full cursor-pointer'>
                                            <PlusIcon width={24} height={24} className={`${isOpen === order._id && "rotate-45"} transition-all ease-in-out duration-300`} />
                                        </button>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="px-5 py-4 flex flex-col gap-4">
                                    {/* Products */}
                                    <div className={`flex flex-col gap-3 ${isOpen === order._id ? "max-h-96 opacity-100 mt-2 overflow-y-auto custom_scrollbar" : "max-h-0 opacity-0"} pr-2 overflow-hidden transition-all ease-in-out duration-300`}>
                                        {order.cartItems.map((item) => (
                                            <div key={item._id} className="flex items-center gap-3">
                                                <div className="relative w-14 h-14 bg-primaryBackground rounded shrink-0">
                                                    <Image
                                                        src={item.product.imageCover}
                                                        alt={item.product.title}
                                                        fill
                                                        className="object-contain p-1.5"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium line-clamp-2">{item.product.title}</p>
                                                    <p className="text-xs text-text2Color mt-0.5">Qty: {item.count} × ${item.price.toFixed(2)}</p>
                                                </div>
                                                <span className="text-sm font-semibold whitespace-nowrap">
                                                    ${(item.price * item.count).toFixed(2)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Footer */}
                                    <div className="pt-3 border-t border-borderColor flex flex-wrap items-center justify-between gap-2">
                                        <div className="flex items-center gap-3 text-xs text-text2Color">
                                            <span className="capitalize flex items-center gap-1">
                                                {order.paymentMethodType === 'cash' ? '💵' : '💳'} {order.paymentMethodType === 'cash' ? 'Cash on Delivery' : 'Credit Card'}
                                            </span>
                                            <span>📍 {order.shippingAddress.city}</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-text2Color">Total</p>
                                            <p className="text-lg font-bold text-primaryColor">${order.totalOrderPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            )}
        </section>
    )
};