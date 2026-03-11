"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { useGetProducts } from '@/src/context/GetProductsContext';
import { useToast } from '@/src/context/ToastContext';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ShippingAddress } from '@/src/types';
import { createCashOrder, createCheckoutSession } from '@/src/services/orderService';

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
    const { showToast } = useToast();

    const [paymentLoading, setPaymentLoading] = useState<boolean>(false);
    const formik = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: '',
            postalCode: '',
            paymentMethod: 'cash' as 'cash' | 'card',
        },
        validationSchema: checkoutSchema,

        onSubmit: async (values) => {
            // Ensure cart exists
            if (!cartList?._id) {
                showToast('error', 'Your cart is empty or could not be loaded.');
                return;
            };

            // Prepare shipping address object
            const shippingAddress: ShippingAddress = {
                details: values.details,
                phone: values.phone,
                city: values.city,
                postalCode: values.postalCode,
            };

            try {
                setPaymentLoading(true);
                // ──────── Cash on Delivery ────────────
                if (values.paymentMethod === 'cash') {
                    const response = await createCashOrder(cartList._id, shippingAddress);
                    if (response.status === 'success') {
                        showToast('success', 'Order placed successfully! 🎉');
                    } else {
                        showToast('error', response.message || 'Failed to place order. Please try again.');
                    }
                } else {

                    // ─────────── Online Payment (Stripe) ───────────────
                    const response = await createCheckoutSession(cartList._id, shippingAddress);
                    const sessionUrl = response?.data?.session?.url;

                    // Redirect user to Stripe checkout page
                    if (sessionUrl) {
                        window.location.href = sessionUrl;
                    } else {
                        showToast('error', 'Could not create payment session.');
                    }
                }
            } catch (error: any) {
                // Handle API errors
                showToast('error', error?.message || 'Something went wrong.');
            } finally {
                // Stop loading state
                setPaymentLoading(false);
            };
        },
    });

    useEffect(() => {
        getUserCart();
    }, []);

    // ─────────────────────────────────────────────────────
    // Helper function for styling inputs --> adds error styles when validation fails
    // ─────────────────────────────────────────────────────
    const inputClass = (field: 'details' | 'phone' | 'city' | 'postalCode') => {
        const hasError = formik.touched[field] && formik.errors[field];

        return `w-full px-4 py-3 border rounded focus:outline-none focus:border-primaryColor transition-colors ${hasError ? 'border-red-400 bg-red-50' : 'border-borderColor'}`;
    };

    // ─── Derived values ───
    const totalPrice = cartList?.totalPriceAfterDiscount ?? cartList?.totalCartPrice ?? 0;
    const itemCount = cartList?.products?.reduce((acc, item) => acc + item.count, 0) ?? 0;

    return (
        <section className="w-full min-h-96 lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-8">
            <Breadcrumb items={[{ label: 'Cart', href: '/cartList' }, { label: 'Checkout' }]} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Billing Details */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
                    <form action="" className="grid grid-cols-1 gap-6">
                        {/* Street Address */}
                        <div className='relative'>
                            <label htmlFor="details" className="block text-sm font-medium mb-1">
                                Street Address <span className="text-primaryColor">*</span>
                            </label>
                            <input
                                type="text"
                                id="details"
                                name="details"
                                value={formik.values.details}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="e.g. 123 Main St, Apt 4B"
                                className={inputClass('details')}
                            />
                            <div className="absolute top-full left-0">
                                {formik.touched.details && formik.errors.details && (
                                    <p className="text-red-500 text-xs">{formik.errors.details}</p>
                                )}
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                Phone <span className="text-primaryColor">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="e.g. 01012345678"
                                className={inputClass('phone')}
                            />
                            <div className="absolute top-full left-0">
                                {formik.touched.phone && formik.errors.phone && (
                                    <p className="text-red-500 text-xs">{formik.errors.phone}</p>
                                )}
                            </div>
                        </div>

                        {/* City & Postal Code */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-2">
                            <div className="relative">
                                <label htmlFor="city" className="block text-sm font-medium mb-1">
                                    City <span className="text-primaryColor">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="e.g. Cairo"
                                    className={inputClass('city')}
                                />
                                <div className="absolute top-full left-0">
                                    {formik.touched.city && formik.errors.city && (
                                        <p className="text-red-500 text-xs">{formik.errors.city}</p>
                                    )}
                                </div>
                            </div>

                            <div className="relative">
                                <label htmlFor="postalCode" className="block text-sm font-medium mb-1">
                                    ZIP / Postal Code <span className="text-primaryColor">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="postalCode"
                                    name="postalCode"
                                    value={formik.values.postalCode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="e.g. 11511"
                                    className={inputClass('postalCode')}
                                />
                                <div className="absolute top-full left-0">
                                    {formik.touched.postalCode && formik.errors.postalCode && (
                                        <p className="text-red-500 text-xs">{formik.errors.postalCode}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Cash on Delivery */}
                        <div className="relative">
                            <label className={`flex items-center gap-3 p-3 border rounded cursor-pointer transition-colors ease-in-out duration-300 ${formik.values.paymentMethod === 'cash' ? 'border-primaryColor bg-primaryColor/5' : 'border-borderColor hover:border-primaryColor'}`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="cash"
                                    checked={formik.values.paymentMethod === 'cash'}
                                    onChange={formik.handleChange}
                                    className="w-4 h-4 accent-primaryColor cursor-pointer"
                                />
                                <span className="text-sm">Cash on Delivery</span>
                            </label>
                        </div>

                        {/* Credit Card (Stripe) */}
                        <div className="relative">
                            <label className={`flex items-center gap-3 p-3 border rounded cursor-pointer transition-colors ${formik.values.paymentMethod === 'card' ? 'border-primaryColor bg-primaryColor/5' : 'border-borderColor hover:border-primaryColor'}`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="card"
                                    checked={formik.values.paymentMethod === 'card'}
                                    onChange={formik.handleChange}
                                    className="w-4 h-4 accent-primaryColor cursor-pointer"
                                />
                                <span className="text-sm">Credit / Debit Card</span>
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={formik.isSubmitting || cartlistLoading || !cartList?.products?.length}
                            className="w-full py-3 bg-primaryColor text-white font-semibold rounded hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {formik.isSubmitting ? 'Processing…' : formik.values.paymentMethod === 'card' ? 'Pay Online' : 'Place Order'}
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="border border-borderColor rounded-lg p-6 sticky top-4">
                        <h2 className="text-xl font-semibold mb-6">
                            Order Summary
                            {itemCount > 0 && (
                                <span className="ml-2 text-sm font-normal text-text2Color">
                                    ({itemCount} {itemCount === 1 ? 'item' : 'items'})
                                </span>
                            )}
                        </h2>

                        {/* Cart Items */}
                        {cartlistLoading ? (
                            <p className="text-text2Color text-sm text-center py-4">Loading cart…</p>
                        ) : cartList?.products?.length ? (
                            <div className="flex flex-col gap-4 mb-4 pb-4 border-b border-borderColor">
                                {cartList.products.map((item) => (
                                    <div key={item?._id} className="flex items-center gap-3">
                                        <div className="relative w-16 h-16 bg-primaryBackground rounded shrink-0">
                                            <Image
                                                src={item.product.imageCover}
                                                alt={item.product.title}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium line-clamp-2">{item.product.title}</p>
                                            <p className="text-xs text-text2Color">Qty: {item.count}</p>
                                        </div>
                                        <span className="font-semibold text-sm whitespace-nowrap">
                                            ${(item.price * item.count).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-text2Color text-sm text-center py-4 mb-6 border-b border-borderColor">
                                No items in cart.
                            </p>
                        )}

                        {/* Totals */}
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total:</span>
                            <span className="text-primaryColor">${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};