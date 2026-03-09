"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { useGetProducts } from '@/src/context/GetProductsContext';
import React, { useEffect } from 'react';

export default function page() {
    const { cartlistLoading, cartError, cartList, getUserCart } = useGetProducts();

    useEffect(() => {
        getUserCart();
        return () => {

        };
    }, []);
    
    return (
        <section className="w-full min-h-96 lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-8">
            <Breadcrumb items={[{ label: 'Cart', href: '/cart' }, { label: 'Checkout' }]} />

            <form action="" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Billing Details */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                                Name <span className="text-primaryColor">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-primaryColor`}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email <span className="text-primaryColor">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-primaryColor`}
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                Phone <span className="text-primaryColor">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-primaryColor`}
                            />
                        </div>

                        {/* Address */}
                        <div className="">
                            <label htmlFor="address" className="block text-sm font-medium mb-1">
                                Street Address <span className="text-primaryColor">*</span>
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-primaryColor`}
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium mb-1">
                                City <span className="text-primaryColor">*</span>
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-primaryColor`}
                            />
                        </div>

                        {/* ZIP Code */}
                        <div>
                            <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                                ZIP Code <span className="text-primaryColor">*</span>
                            </label>
                            <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-primaryColor`}
                            />
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="border border-borderColor rounded-lg p-6 sticky top-4">
                        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                        {/* Cart Items */}
                        <div className="flex flex-col gap-4 mb-6 pb-6 border-b border-borderColor">

                        </div>

                        {/* Totals */}
                        <div className="flex flex-col gap-3 mb-6 pb-6 border-b border-borderColor">
                            <div className="flex justify-between">
                                <span className="text-text2Color">Subtotal:</span>
                                <span className="font-medium">$</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-text2Color">Shipping:</span>
                                <span className="font-medium">$</span>
                            </div>
                        </div>

                        <div className="flex justify-between text-lg font-bold mb-6">
                            <span>Total:</span>
                            <span className="text-primaryColor">$</span>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
};