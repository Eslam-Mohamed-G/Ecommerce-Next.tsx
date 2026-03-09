"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { useGetProducts } from '@/src/context/GetProductsContext';
import Image from 'next/image';
import React, { useEffect } from 'react';
import * as Yup from 'yup';

// ─── Validation Schema ───

const checkoutSchema = Yup.object({
    details: Yup.string().trim().required('Street address is required'),
    phone: Yup.string()
        .trim()
        .required('Phone number is required')
        .matches(/^[0-9+\-\s]{7,15}$/, 'Enter a valid phone number'),
    city: Yup.string().trim().required('City is required'),
    postalCode: Yup.string().trim().required('ZIP / Postal code is required'),
    paymentMethod: Yup.string().oneOf(['cash', 'card']).required(),
});

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
                            {cartList?.products.map((item) => (
                                <div key={item?.product._id} className="flex items-center gap-3">
                                    <div className="relative w-16 h-16 bg-primaryBackground rounded shrink-0">
                                        <Image
                                            src={item.product.imageCover}
                                            alt={item.product.title}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium line-clamp-2">{item.product.title}</p>
                                        <p className="text-sm text-text2Color">Qty: {item.count}</p>
                                    </div>
                                    <span className="font-semibold">${item.price * item.count}</span>
                                </div>
                            ))}
                        </div>

                        {/* Totals */}
                        <div className="flex justify-between text-lg font-bold mb-6">
                            <span>Total:</span>
                            <span className="text-primaryColor">${cartList?.totalPriceAfterDiscount || cartList?.totalCartPrice || 0}</span>
                        </div>

                        {/* Payment Methods */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-4">Payment Method</h3>

                            <div className="flex flex-col gap-3">
                                {/* Credit Card */}
                                <label className="flex items-center gap-3 p-3 border border-borderColor rounded cursor-pointer hover:border-primaryColor transition-colors">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="card"
                                        checked={formData.paymentMethod === 'card'}
                                        onChange={handleInputChange}
                                        className="w-4 h-4 accent-primaryColor cursor-pointer"
                                    />
                                    <span>Credit / Debit Card</span>
                                </label>

                                {/* Card Details */}
                                {formData.paymentMethod === 'card' && (
                                    <div className="pl-7 flex flex-col gap-3">
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            placeholder="Card Number"
                                            value={formData.cardNumber || ''}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 border rounded focus:outline-none focus:border-primaryColor ${errors.cardNumber ? 'border-primaryColor' : 'border-borderColor'}`}
                                        />
                                        <div className="grid grid-cols-2 gap-3">
                                            <input
                                                type="text"
                                                name="cardExpiry"
                                                placeholder="MM/YY"
                                                value={formData.cardExpiry || ''}
                                                onChange={handleInputChange}
                                                className={`px-4 py-2 border rounded focus:outline-none focus:border-primaryColor ${errors.cardExpiry ? 'border-primaryColor' : 'border-borderColor'}`}
                                            />
                                            <input
                                                type="text"
                                                name="cardCVV"
                                                placeholder="CVV"
                                                value={formData.cardCVV || ''}
                                                onChange={handleInputChange}
                                                className={`px-4 py-2 border rounded focus:outline-none focus:border-primaryColor ${errors.cardCVV ? 'border-primaryColor' : 'border-borderColor'}`}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Cash on Delivery */}
                                <label className="flex items-center gap-3 p-3 border border-borderColor rounded cursor-pointer hover:border-primaryColor transition-colors">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cash"
                                        checked={formData.paymentMethod === 'cash'}
                                        onChange={handleInputChange}
                                        className="w-4 h-4 accent-primaryColor cursor-pointer"
                                    />
                                    <span>Cash on Delivery</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
};