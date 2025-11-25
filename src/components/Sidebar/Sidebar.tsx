"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openWomenDropdown, setOpenWomenDropdown] = useState(false);
    const [openMenDropdown, setOpenMenDropdown] = useState(false);

    const userButtonRef = useRef<HTMLButtonElement | null>(null);
    const userSidebarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            const target = e.target as Node;

            if (userSidebarRef.current?.contains(target)) return;

            if (userButtonRef.current?.contains(target)) return;

            setIsSidebarOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <nav className='absolute top-0 start-0 md:static z-40'>
            <button ref={userButtonRef} aria-expanded={isSidebarOpen} onClick={()=>setIsSidebarOpen(!isSidebarOpen)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className={`absolute -start-1 z-30 ${isSidebarOpen ? "start-48 -translate-x-1": ""} text-heading bg-transparent md:hidden cursor-pointer transition-all ease-in-out duration-300`}>
                <span className="sr-only">Open sidebar</span>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h10" />
                </svg>
            </button>

            <aside id="default-sidebar" ref={userSidebarRef} aria-label="Product Categories Sidebar" inert={!isSidebarOpen} className={`md:border-e border-borderColor ${isSidebarOpen ? "w-48 ps-4 border-e bg-black/40 backdrop-blur-xl" : "w-0 ps-0"} md:w-48 md:bg-transparent transition-all ease-in-out duration-300 overflow-hidden`}>
                <h2 className="sr-only">Categories</h2>
                <ul className="flex flex-col gap-4 mt-5 p-0 pe-4 text-white md:text-textColor text-base font-normal w-48 h-[300px] overflow-hidden">
                    <li className=''>
                        <button aria-expanded={openWomenDropdown} aria-controls="women-submenu" onClick={() => { setOpenWomenDropdown(!openWomenDropdown); setOpenMenDropdown(false) }} className="relative flex flex-row w-full justify-between items-center cursor-pointer">
                            <span className="">Woman’s Fashion</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`${openWomenDropdown ? "rotate-90" : ""} transition-all ease-in-out duration-300`}><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                        <ul id="women-submenu" hidden={!openWomenDropdown} className='transition-all ease-in-out duration-300'>...</ul>
                    </li>
                    <li>
                        <button aria-expanded={openMenDropdown} aria-controls="men-submenu" onClick={() => { setOpenMenDropdown(!openMenDropdown); setOpenWomenDropdown(false) }} className="relative flex flex-row w-full justify-between items-center cursor-pointer">
                            <span className="">Men’s Fashion</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`${openMenDropdown ? "rotate-90" : ""} transition-all ease-in-out duration-300`}><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                        <ul id="men-submenu" hidden={!openMenDropdown} className='transition-all ease-in-out duration-300'>...</ul>
                    </li>
                    <li>
                        <Link href="/" className="flex items-center">
                            <span className="flex-1  whitespace-nowrap">Sports & Outdoor</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="flex items-center">
                            <span className="">Home & Lifestyle</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="flex items-center">
                            <span className="flex-1  whitespace-nowrap">Health & Beauty</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="flex items-center">
                            <span className="flex-1  whitespace-nowrap">Groceries & Pets</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="flex items-center">
                            <span className="flex-1  whitespace-nowrap">Baby & Toys</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="flex items-center">
                            <span className="">Electronics</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="flex items-center">
                            <span className="flex-1  whitespace-nowrap">Medicine</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </nav>
    )
}