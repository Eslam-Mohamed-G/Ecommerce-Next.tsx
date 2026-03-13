"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { Order } from '@/src/types';
import React, { useEffect, useState } from 'react';

export default function page() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {

        return () => {

        };
    }, []);

    return (
        <section className="w-full min-h-96 lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-8">
            <Breadcrumb items={[{ label: 'My Orders' }]} />
        </section>
    )
};