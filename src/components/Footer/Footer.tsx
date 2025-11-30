import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
    return (
        <section aria-label="Website footer" className='bg-textColor min-h-[380px] flex items-start'>
            <div className="xl:max-w-7xl lg:max-w-5xl m-auto px-4 pt-10 lg:pt-0 flex-1 flex flex-row flex-wrap justify-between gap-10 text-white">
                <div className="flex flex-col gap-5">
                    <h1 className='font-bold text-2xl'>Exclusive</h1>
                    <h2 className='font-medium text-xl'>Subscribe</h2>
                    <p>Get 10% off your first order</p>
                    <form className='flex flex-row items-center justify-around gap-4 p-2 border border-Background rounded'>
                        <input id='email-field' type="email" placeholder='Enter your email' className='outline-none max-w-40 h-full ps-1' />
                        <button aria-label="Subscribe to newsletter" type='button' className='cursor-pointer'>
                            <Image src="/footer/icon-send.svg" alt="Send email icon" loading="lazy" width={30} height={30} />
                        </button>
                    </form>
                </div>

                <div className="flex flex-col gap-5 max-w-44">
                    <h2 className='font-medium text-xl'>Support</h2>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>

                <div className="flex flex-col gap-5">
                    <h2 className='font-medium text-xl'>Account</h2>
                    <Link href="/">My Account</Link>
                    <Link href="/login">Login / Register</Link>
                    <Link href="/">Cart</Link>
                    <Link href="/">Wishlist</Link>
                    <Link href="/">Shop</Link>
                </div>

                <div className="flex flex-col gap-5">
                    <h2 className='font-medium text-xl'>Quick Link</h2>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Terms Of Use</Link>
                    <Link href="/">FAQ</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className="flex flex-col gap-5">
                    <h2 className='font-medium text-xl'>Download App</h2>
                    <p className='text-xs text-grayStarColor'>Save $3 with App New User Only</p>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        <div className="col-span-1 row-span-2">
                            <Image src="/footer/Qrcode.webp" alt='Qrcode' width={80} height={80} loading='lazy' />
                        </div>
                        <div className="col-span-1 row-span-1">
                            <Image src="/footer/google-play-store.webp" alt='google play store' width={104} height={30} loading='lazy' />
                        </div>
                        <div className="col-span-1 row-span-1">
                            <Image src="/footer/apple-store.webp" alt='apple store' width={104} height={30} loading='lazy' />
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 justify-between">
                        <div className="flex items-center justify-center">
                            <Image src="/footer/facebookIcon.svg" alt='Visit our Facebook page' width={24} height={24} loading='lazy' aria-hidden="true" />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src="/footer/twitterIcon.svg" alt='Visit our twitter page' width={24} height={24} loading='lazy' aria-hidden="true" />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src="/footer/instagramicon.svg" alt='Visit our instagram page' width={24} height={24} loading='lazy' aria-hidden="true" />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src="/footer/linkedinIcon.svg" alt='Visit our linkedin page' width={24} height={24} loading='lazy' aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
