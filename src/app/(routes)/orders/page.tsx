"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { getUserIdFromToken } from '@/src/services/apiClient';
import { getUserOrders } from '@/src/services/orderService';
import { Order } from '@/src/types';
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
        </section>
    )
};