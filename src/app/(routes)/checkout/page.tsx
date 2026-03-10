"use client";
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { useGetProducts } from '@/src/context/GetProductsContext';
import { useToast } from '@/src/context/ToastContext';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
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
    const { showToast } = useToast();

    const formik = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: '',
            postalCode: '',
            paymentMethod: 'cash' as 'cash' | 'card',
        },
        validationSchema: checkoutSchema,
        
        onSubmit: async (values, {setSubmitting}) => {
            
        },
    });

    useEffect(() => {
        getUserCart();
        return () => {

        };
    }, []);

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