"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <header>
            <nav className='border-b border-borderColor'>
                <div className="bg-textColor w-full h-10 text-white flex items-center justify-center">
                    <p className='text-xs font-normal'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='underline decoration-primaryBackground font-semibold'>ShopNow</span></p>
                </div>

                <div className="max-w-7xl m-auto flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold">
                        Exclusive
                    </Link>

                    {/* Navigation Links */}
                    <ul className="flex items-center gap-8">
                        <li>
                            <Link href="/products" className="hover:text-blue-600 transition">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-blue-600 transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-600 transition">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/signUp" className="hover:text-blue-600 transition">
                                Sign Up
                            </Link>
                        </li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <form className="bg-primaryBackground rounded-sm p-2 flex" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="What are you looking for?" className="text-xs px-2 outline-0" />
                            <button type="submit" className="cursor-pointer">
                                <Image src="/search.svg" alt="search" width={20} height={20} />
                            </button>
                        </form>

                        <button className="w-8 h-8 flex items-center justify-center">
                            <Image src="/Wishlist.svg" alt='Wishlist buy' width={28} height={28} />
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center">
                            <Image src="/cart.svg" alt='cart buy' width={28} height={28} />
                        </button>

                        <button className="bg-primaryColor w-8 h-8 rounded-full flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}