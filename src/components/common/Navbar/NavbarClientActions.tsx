"use client";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import UserMenu from "./UserMenu";
import ToastMessage from "../ToastMessage/ToastMessage";
import { useToast } from "@/src/context/ToastContext";
import { useGetProducts } from "@/src/context/GetProductsContext";
import { CartIcon, HeartIcon } from "../../ui/Icon/Icon";

interface Props {
    token: string | null;
}

export default function NavbarClientActions({ token }: Props) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
    const pathName = usePathname();
    const router = useRouter();
    const { toast, showToast } = useToast();
    const { wishlist, cartList } = useGetProducts();
    const itemsCount = cartList?.products.length || 0;

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

    return (
        <nav aria-label="Mobile Navigation" role="navigation">
            <ul id="mobile-nav" ref={navRef} inert={!isNavOpen} className={`bg-black/40 backdrop-blur-xl text-white flex flex-col gap-3 px-4 absolute top-full left-0 right-0 z-50 ${isNavOpen ? token ? "h-[280px] py-4" : "h-[338px] py-4" : "h-0 py-0"} md:hidden overflow-hidden transition-all ease-in-out duration-300`}>
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
                    <Link href={token ? "/wishlist" : "#"} onClick={() => { setIsNavOpen(false); !token && showToast("warning", "You are not logged in") }} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/wishList" && "bg-white/20"} transition-all ease-in-out duration-300`}>
                        Wish List
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href={token ? "/cartList" : "#"} onClick={() => { setIsNavOpen(false); !token && showToast("warning", "You are not logged in") }} className={`flex-1 p-2 rounded hover:bg-white/20 ${pathName === "/cart" && "bg-white/20"} transition-all ease-in-out duration-300`}>
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
                    <button type="submit" aria-label="Search keywords" className="flex items-center justify-center cursor-pointer">
                        <Image src="/search.svg" alt="search" width={24} height={24} />
                    </button>
                </form>

                <button type="button" aria-label="open wishlist" onClick={() => { token ? router.push("/wishlist") : showToast("warning", "You are not logged in") }} className="hidden w-8 h-8 md:flex items-center justify-center cursor-pointer relative">
                    <HeartIcon width={28} height={28} />
                    {token && (<span className="absolute -top-1.5 right-0 text-primaryColor text-sm font-medium">{wishlist.length}</span>)}
                </button>

                <button type="button" aria-label="open wishlist" onClick={() => { token ? router.push("/cartList") : showToast("warning", "You are not logged in") }} className="hidden w-8 h-8 md:flex items-center justify-center cursor-pointer relative">
                    <CartIcon width={26} height={26} />
                    {token && (<span className="absolute -top-1.5 right-0 text-primaryColor text-sm font-medium">{itemsCount}</span>)}
                </button>

                <UserMenu token={token || null} />

                <button ref={navToggleRef} aria-label="Toggle navigation menu" aria-expanded={isNavOpen} aria-controls="mobile-nav" className='flex justify-center items-center md:hidden cursor-pointer' onClick={() => { setIsNavOpen(!isNavOpen); setIsAuthMenuOpen(false) }}>
                    {isNavOpen ?
                        <svg aria-hidden="true" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        :
                        <svg aria-hidden="true" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-text-align-justify-icon lucide-text-align-justify"><path d="M3 5h18" /><path d="M3 12h18" /><path d="M3 19h18" /></svg>
                    }
                </button>
            </div>
            {toast && <ToastMessage key={toast.id} />}
        </nav>
    )
}