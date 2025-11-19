"use client";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
    token: string | null;
}

export default function NavbarClientActions({ token }: Props) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
    const pathName = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        deleteCookie("token", { path: "/" });
        router.refresh();
        setIsAuthMenuOpen(false)
    };
    
    return (
        <>
            <ul aria-hidden={!isNavOpen} className={`bg-black/40 backdrop-blur-xl text-white flex flex-col gap-3 px-4 absolute top-full left-0 right-0 z-50 ${isNavOpen ?  token ? "h-[280px] py-4" : "h-[338px] py-4" : "h-0 py-0"} overflow-hidden transition-all ease-in-out duration-300`}>
                <li className="flex items-center">
                    <Link href="/products" onClick={()=>setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/products" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                        Products
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/about" onClick={()=>setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/about" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                        About
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/contact" onClick={()=>setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/contact" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                        Contact
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/wishlist" onClick={()=>setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/wishlist" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                        Wishlist
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/cart" onClick={()=>setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/cart" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                        Cart
                    </Link>
                </li>
                <li className="flex items-center">
                    {!token && (
                        <Link href="/login" onClick={()=>setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/login" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                            Login
                        </Link>
                    )}
                </li>
            </ul>

            <div className="flex items-center gap-4">
                <form className="bg-primaryBackground rounded-sm p-2 flex items-center justify-center" role="search" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="What are you looking for?" className="w-28 md:w-40 text-xs px-2 outline-0" />
                    <button type="submit" aria-label="Search" className="cursor-pointer">
                        <Image src="/search.svg" alt="search" width={20} height={20} />
                    </button>
                </form>

                <button className="hidden w-8 h-8 md:flex items-center justify-center cursor-pointer">
                    <Image src="/Wishlist.svg" alt='Open Wishlist' width={28} height={28} />
                </button>

                <button className="hidden w-8 h-8 md:flex items-center justify-center cursor-pointer">
                    <Image src="/cart.svg" alt='Open Cart' width={28} height={28} />
                </button>

                {token &&
                    <button aria-label="User menu" aria-expanded={isAuthMenuOpen} aria-controls="user-menu" onClick={() => { setIsAuthMenuOpen(!isAuthMenuOpen); setIsNavOpen(false) }} className="bg-primaryColor text-white flex items-center justify-center w-8 h-8 overflow-hidden rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                    </button>
                }

                <button className='flex justify-center items-center md:hidden cursor-pointer' onClick={() => { setIsNavOpen(!isNavOpen); setIsAuthMenuOpen(false) }}>
                    {isNavOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-text-align-justify-icon lucide-text-align-justify"><path d="M3 5h18" /><path d="M3 12h18" /><path d="M3 19h18" /></svg>
                    }
                </button>
            </div>

            <div id="user-menu" aria-hidden={!isAuthMenuOpen} className={`absolute bg-black/40 backdrop-blur-xl top-full end-4 z-50 w-48 px-2 rounded ${isAuthMenuOpen ? "h-56 py-4" : "h-0 py-0"} overflow-hidden shadow transition-all ease-in-out duration-300`}>
                <ul role="menu" className='flex flex-col gap-2 text-white text-sm'>
                    <li className='flex items-center'>
                        <Link href="/" className='flex-1 flex items-center gap-2 rounded ps-0 pe-2 hover:bg-white/20'>
                            <div className="w-8 h-8 flex items-center justify-center text-white fill-white relative">
                                <Image src="/navbar/user.svg" alt='User menu' fill />
                            </div>
                            <span>Manage My Account</span>
                        </Link>
                    </li>

                    <li className='flex items-center'>
                        <Link href="/" className='flex-1 flex items-center gap-3 ps-0 pe-2 py-1 hover:bg-white/20 rounded'>
                            <div className="w-6 h-6 ms-1 flex items-center justify-center relative">
                                <Image src="/navbar/icon-cancel.svg" alt='icon-cancel' fill />
                            </div>
                            <span>My Cancellations</span>
                        </Link>
                    </li>

                    <li className='flex items-center'>
                        <Link href="/" className='flex-1 flex items-center gap-3 ps-0 pe-2 py-1 hover:bg-white/20 rounded'>
                            <div className="w-6 h-6 ms-1 flex items-center justify-center relative">
                                <Image src="/navbar/icon-mallbag.svg" alt='user icon' fill />
                            </div>
                            <span>My Order</span>
                        </Link>
                    </li>

                    <li className='flex items-center'>
                        <Link href="/" className='flex-1 flex items-center gap-3 ps-0 pe-2 py-1 hover:bg-white/20 rounded'>
                            <div className="w-6 h-6 ms-1 flex items-center justify-center relative">
                                <Image src="/navbar/Icon-Reviews.svg" alt='Icon-Reviews' fill />
                            </div>
                            <span>My Reviews</span>
                        </Link>
                    </li>

                    <li className='flex items-center'>
                        <button onClick={() => { handleLogout(); }} className='flex-1 flex items-center gap-3 ps-0 pe-2 py-1 hover:bg-white/20 rounded cursor-pointer'>
                            <div className="w-6 h-6 flex items-center justify-center relative">
                                <Image src="/navbar/Icon-logout.svg" alt='logout Icon' fill />
                            </div>
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}