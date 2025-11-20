"use client";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import UserMenu from "./UserMenu";

interface Props {
    token: string | null;
}

export default function NavbarClientActions({ token }: Props) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
    const pathName = usePathname();
    const router = useRouter();

    const navRef = useRef<HTMLUListElement | null>(null);
    const navToggleRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            const target = e.target as Node;

            if (navToggleRef.current?.contains(target)) return;

            if (navRef.current?.contains(target)) return;

            setIsNavOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        deleteCookie("token", { path: "/" });
        router.refresh();
        setIsAuthMenuOpen(false)
    };

    return (
        <nav aria-label="Mobile Navigation">
            <ul ref={navRef} aria-hidden={!isNavOpen} className={`bg-black/40 backdrop-blur-xl text-white flex flex-col gap-3 px-4 absolute top-full left-0 right-0 z-50 ${isNavOpen ? token ? "h-[280px] py-4" : "h-[338px] py-4" : "h-0 py-0"} md:hidden overflow-hidden transition-all ease-in-out duration-300`}>
                <li className="flex items-center">
                    <Link href="/products" onClick={() => setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/products" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                        Products
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/about" onClick={() => setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/about" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                        About
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/contact" onClick={() => setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/contact" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                        Contact
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/wishlist" onClick={() => setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/wishlist" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                        Wishlist
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/cart" onClick={() => setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/cart" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                        Cart
                    </Link>
                </li>
                <li className="flex items-center">
                    {!token && (
                        <Link href="/login" onClick={() => setIsNavOpen(false)} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/login" && "bg-white/20"} transition-all ease-in-out duration-300`}>
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
                <UserMenu token={token || null}/>

                <button ref={navToggleRef} className='flex justify-center items-center md:hidden cursor-pointer' onClick={() => { setIsNavOpen(!isNavOpen); setIsAuthMenuOpen(false) }}>
                    {isNavOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-text-align-justify-icon lucide-text-align-justify"><path d="M3 5h18" /><path d="M3 12h18" /><path d="M3 19h18" /></svg>
                    }
                </button>
            </div>
        </nav>
    )
}