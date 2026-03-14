"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { getUserIdFromToken } from '@/src/services/apiClient';
import { getUserOrders } from '@/src/services/orderService';
import { Order } from '@/src/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function page() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
                        <div key={i} className="border border-borderColor rounded-lg p-5 animate-pulse">
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
                    {orders.map((order) => (
                        <article key={order._id} className="border border-borderColor rounded-lg overflow-hidden hover:shadow-md transition-shadow ease-in-out duration-300">

                        </article>
                    ))}
                </div>
            )}
        </section>
    )
};