import React from 'react'
import Link from 'next/link'
import { cookies } from "next/headers";
import NavbarClientActions from './NavbarClientActions';

export default async function Navbar() {

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    return (
        <header>
            <nav className='border-b border-borderColor' aria-label="Main Navigation">
                <div className="bg-textColor w-full h-10 text-white flex items-center justify-center">
                    <p className='text-xs font-normal text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <Link href="/products" className="underline decoration-primaryBackground font-semibold md:ms-1">
                            Shop Now
                        </Link>
                    </p>
                </div>

                <div className="xl:max-w-7xl lg:max-w-5xl m-auto flex items-center justify-between px-4 py-2 relative">
                    {/* Logo */}
                    <Link href="/" aria-label="Homepage" className="md:text-2xl font-bold">
                        Exclusive
                    </Link>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex flex-row gap-8">
                        <li className=''>
                            <Link href="/products" className='relative after:absolute after:top-full after:start-0 after:end-full hover:after:end-0 after:h-0.5 after:bg-borderColor after:transition-all after:ease-in-out after:duration-300'>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className='relative after:absolute after:top-full after:start-0 after:end-full hover:after:-end-0.5 after:h-0.5 after:bg-borderColor after:transition-all after:ease-in-out after:duration-300'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className='relative after:absolute after:top-full after:start-0 after:end-full hover:after:-end-0.5 after:h-0.5 after:bg-borderColor after:transition-all after:ease-in-out after:duration-300'>
                                Contact
                            </Link>
                        </li>

                        <li>
                            {!token && (
                                <Link href="/login" className={`relative after:absolute after:top-full after:translate-y-0.5 after:start-0 after:end-full hover:after:-end-0.5 after:h-0.5 after:bg-borderColor after:transition-all after:ease-in-out after:duration-300`}>
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>

                    <NavbarClientActions token={token || null} />
                </div>
            </nav>
        </header>
    )
}