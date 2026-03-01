"use client";

import Image from "next/image";
import { useRef } from "react";
import { CameraIcon, GamingIcon, PhoneIcon, ComputerIcon, HeadphoneIcon, MenFashionIcon, WomenFashionIcon, SmartWatchIcon } from "@/src/components/ui/Icon/Icon";

export default function CategoriesCarousel() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    const categories = [
        { img: "/category/MenFashion.svg", label: "Men's Fashion" },
        { img: "/category/dress.svg", label: "Women's Fashion" },
        { img: "/category/cellPhone.svg", label: "Phones" },
        { img: "/category/computer.svg", label: "Computer" },
        { img: "/category/gamepad.svg", label: "Gaming" },
        { img: "/category/headphone.svg", label: "HeadPhones" },
        { img: "/category/camera.svg", label: "Camera" },
    ];

    return (
        <div className="relative w-full">
            {/* Buttons */}
            <div className="absolute bottom-full -translate-y-20 md:-translate-y-8 right-0 flex flex-row items-center justify-center gap-2 md:gap-4">
                <button type="button" onClick={scrollLeft} className="flex items-center justify-center w-10 h-10 bg-primaryBackground rounded-full cursor-pointer">
                    <Image src="/category/icons_arrow-left.svg" alt="icons_arrow-left" width={24} height={24} loading="lazy"/>
                </button>

                <button type="button" onClick={scrollRight} className="flex items-center justify-center w-10 h-10 bg-primaryBackground rounded-full cursor-pointer">
                    <Image src="/category/icons arrow-right.svg" alt="icons arrow-right" width={24} height={24} loading="lazy"/>
                </button>
            </div>

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex flex-row gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none"
            >
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="group w-44 h-32 flex flex-col items-center justify-center gap-3 border border-borderColor hover:bg-buttonColor hover:border-buttonColor rounded cursor-pointer transition-all ease-in-out duration-300 snap-center shrink-0"
                    >
                        <Image
                            src={cat.img}
                            alt={cat.label}
                            width={77}
                            height={32}
                            loading="lazy"
                            className="pointer-events-none"
                        />
                        <h1 className="group-hover:text-white transition-all duration-300">
                            {cat.label}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
}
