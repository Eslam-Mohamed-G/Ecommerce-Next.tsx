"use client";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
interface Props {
    token: string | null;
}
export default function UserMenu({ token }: Props) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
    const [confirmLogout, setConfirmLogout] = useState(false);
    const pathName = usePathname();
    const router = useRouter();

    const userButtonRef = useRef<HTMLButtonElement | null>(null);
    const userMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            const target = e.target as Node;

            if (userMenuRef.current?.contains(target)) return;

            if (userButtonRef.current?.contains(target)) return;

            setIsAuthMenuOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (confirmLogout) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [confirmLogout]);

    const handleLogout = () => {
        deleteCookie("token");
        if (pathName === "/wishList" || pathName === "/cart" ) {
            router.push("/");
        }
        router.refresh();
        setConfirmLogout(false);
    };

    return (
        <div className={token ? "block" : "hidden"}>
            {token &&
                <button ref={userButtonRef} aria-label="User menu" aria-expanded={isAuthMenuOpen} aria-controls="user-menu" onClick={() => { setIsAuthMenuOpen(!isAuthMenuOpen); setIsNavOpen(false) }} className="bg-primaryColor text-white flex items-center justify-center w-8 h-8 overflow-hidden rounded-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                </button>
            }

            <div ref={userMenuRef} id="user-menu" className={`absolute bg-black/40 backdrop-blur-xl top-full end-5 z-50 w-48 px-2 rounded ${isAuthMenuOpen ? "h-56 py-4" : "h-0 py-0"} overflow-hidden shadow transition-all ease-in-out duration-300`}>
                <ul role="menu" className='flex flex-col gap-2 text-white text-sm'>
                    <li role="menuitem" className='flex items-center'>
                        <Link href="/account" onClick={()=>setIsAuthMenuOpen(false)} className='flex-1 flex items-center gap-2 rounded ps-0 pe-2 hover:bg-white/20'>
                            <div className="w-8 h-8 flex items-center justify-center text-white fill-white relative">
                                <Image src="/navbar/user.svg" alt='User menu' fill />
                            </div>
                            <span>Manage My Account</span>
                        </Link>
                    </li>

                    <li role="menuitem" className='flex items-center'>
                        <Link href="/" className='flex-1 flex items-center gap-3 ps-0 pe-2 py-1 hover:bg-white/20 rounded'>
                            <div className="w-6 h-6 ms-1 flex items-center justify-center relative">
                                <Image src="/navbar/icon-cancel.svg" alt='icon-cancel' fill />
                            </div>
                            <span>My Cancellations</span>
                        </Link>
                    </li>

                    <li role="menuitem" className='flex items-center'>
                        <Link href="/" className='flex-1 flex items-center gap-3 ps-0 pe-2 py-1 hover:bg-white/20 rounded'>
                            <div className="w-6 h-6 ms-1 flex items-center justify-center relative">
                                <Image src="/navbar/icon-mallbag.svg" alt='user icon' fill />
                            </div>
                            <span>My Order</span>
                        </Link>
                    </li>

                    <li role="menuitem" className='flex items-center'>
                        <Link href="/" className='flex-1 flex items-center gap-3 ps-0 pe-2 py-1 hover:bg-white/20 rounded'>
                            <div className="w-6 h-6 ms-1 flex items-center justify-center relative">
                                <Image src="/navbar/Icon-Reviews.svg" alt='Icon-Reviews' fill />
                            </div>
                            <span>My Reviews</span>
                        </Link>
                    </li>

                    <li role="menuitem" className='flex items-center'>
                        <button type="button" onClick={() => { setIsAuthMenuOpen(false); setConfirmLogout(true); }} className='flex-1 flex items-center gap-3 ps-0 pe-2 py-1 hover:bg-white/20 rounded cursor-pointer'>
                            <div className="w-6 h-6 flex items-center justify-center relative">
                                <Image src="/navbar/Icon-logout.svg" alt='logout Icon' fill />
                            </div>
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>

            {confirmLogout && (
                <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center">
                    <div className="bg-white flex flex-col items-center justify-center gap-4 p-4 capitalize rounded animate-zoom-in">
                        <h1 className="text-lg font-bold">confirm logout</h1>
                        <div className="flex flex-row gap-4">
                            <button type="button" onClick={handleLogout} className="text-primaryColor w-20 py-2 border rounded cursor-pointer">logout</button>
                            <button type="button" onClick={() => setConfirmLogout(false)} className="bg-primaryColor text-white w-20 py-2 rounded cursor-pointer">cancl</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}