"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <header>
            <nav className='border-b border-borderColor relative'>
                <div className="bg-textColor w-full h-10 text-white flex items-center justify-center">
                    <p className='text-xs font-normal text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='underline decoration-primaryBackground font-semibold'>ShopNow</span></p>
                </div>

                <div className="xl:max-w-7xl lg:max-w-5xl m-auto flex items-center justify-between p-4">
                    {/* Logo */}
                    <Link href="/" aria-label="Homepage" className="md:text-2xl font-bold">
                        Exclusive
                    </Link>

                    {/* Navigation Links */}
                    <ul
                        className={`absolute md:relative top-full left-0 right-0 z-50 ${isNavOpen ? "bg-slate-400/30 h-56 p-4 shadow" : "h-0"} flex flex-col md:flex-row md:bg-transparent md:h-fit md:p-0 md:shadow-none gap-8 overflow-hidden transition-all ease-in-out duration-300`}>
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
                        <form className="bg-primaryBackground rounded-sm p-2 flex items-center justify-center" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="What are you looking for?" className="w-20 md:w-40 text-xs px-2 outline-0" />
                            <button type="submit" className="cursor-pointer">
                                <Image src="/search.svg" alt="search" width={20} height={20} />
                            </button>
                        </form>

                        <button className="hidden w-8 h-8 md:flex items-center justify-center cursor-pointer">
                            <Image src="/Wishlist.svg" alt='Wishlist buy' width={28} height={28} />
                        </button>

                        <button className="hidden w-8 h-8 md:flex items-center justify-center cursor-pointer">
                            <Image src="/cart.svg" alt='cart buy' width={28} height={28} />
                        </button>

                        <button className="bg-primaryColor w-8 h-8 rounded-full flex items-center justify-center text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                        </button>

                        <button className='flex justify-center items-center md:hidden cursor-pointer' onClick={() => { setIsNavOpen(!isNavOpen) }}>
                            {isNavOpen ?
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-text-align-justify-icon lucide-text-align-justify"><path d="M3 5h18" /><path d="M3 12h18" /><path d="M3 19h18" /></svg>
                            }
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}