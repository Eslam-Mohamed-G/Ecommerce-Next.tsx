import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
    return (
        <section className='bg-textColor min-h-[380px] flex items-start'>
            <div className="xl:max-w-7xl lg:max-w-5xl m-auto px-4 flex-1 flex flex-col md:flex-row gap-10 text-white">
                <div className="flex flex-col gap-5">
                    <h1 className='font-bold text-2xl'>Exclusive</h1>
                    <h2 className='font-medium text-xl'>Subscribe</h2>
                    <p>Get 10% off your first order</p>
                    <form className='flex flex-row items-center justify-around gap-4 p-2 border border-Background rounded'>
                        <input type="text" placeholder='Enter your email' className='outline-none max-w-40 h-full ps-1' />
                        <button type='button' className='cursor-pointer'>
                            <Image src="/footer/icon-send.svg" alt="icon-send" loading="lazy" width={30} height={30} />
                        </button>
                    </form>
                </div>

                <div className="flex flex-col gap-5 max-w-44">
                    <h1 className='font-medium text-xl'>Support</h1>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className='font-medium text-xl'>Account</h1>
                    <Link href="/">My Account</Link>
                    <Link href="/login">Login / Register</Link>
                    <Link href="/">Cart</Link>
                    <Link href="/">Wishlist</Link>
                    <Link href="/">Shop</Link>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className='font-medium text-xl'>Quick Link</h1>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Terms Of Use</Link>
                    <Link href="/">FAQ</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </section>
    )
}
