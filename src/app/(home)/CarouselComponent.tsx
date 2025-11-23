"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const slidesContent = [
    {
        title: "iPhone 14 Series",
        heading: "Up to 10% off Voucher",
        image: "/image/iphone.webp",
    },
    {
        title: "MacBook Pro",
        heading: "Save up to 15%",
        image: "/image/mac.webp",
    },
    {
        title: "Apple Watch Ultra",
        heading: "New Arrival",
        image: "/image/camera.webp",
    },
];

// Infinite structure → [last, ...original, first]
const slides = [
    slidesContent[slidesContent.length - 1],
    ...slidesContent,
    slidesContent[0],
];

export default function CarouselComponent() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [current, setCurrent] = useState(1);
    const [slideWidth, setSlideWidth] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Resize Handler
    useEffect(() => {
        const updateWidth = () => {
            const el = containerRef.current;
            if (!el) return;
            const w = el.clientWidth;
            setSlideWidth(w);
            el.scrollTo({ left: current * w, behavior: "instant" as ScrollBehavior });
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [current]);

    // Drag Logic
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollStart = useRef(0);

    const onDragStart = (e: any) => {
        const el = containerRef.current;
        if (!el) return;

        isDragging.current = true;
        startX.current = e.touches ? e.touches[0].clientX : e.clientX;
        scrollStart.current = el.scrollLeft;

        el.style.cursor = "grabbing";
    };

    const onDragMove = (e: any) => {
        const el = containerRef.current;
        if (!isDragging.current || !el) return;

        const x = e.touches ? e.touches[0].clientX : e.clientX;
        el.scrollLeft = scrollStart.current - (x - startX.current);
    };

    const onDragEnd = () => {
        const el = containerRef.current;
        if (!isDragging.current || !el) return;

        isDragging.current = false;
        el.style.cursor = "grab";

        const idx = Math.round(el.scrollLeft / slideWidth);
        setCurrent(idx);
        el.scrollTo({ left: idx * slideWidth, behavior: "smooth" });

        setIsTransitioning(true);
    };

    // Global Drag Listeners
    useEffect(() => {
        document.addEventListener("mousemove", onDragMove);
        document.addEventListener("mouseup", onDragEnd);
        document.addEventListener("touchmove", onDragMove);
        document.addEventListener("touchend", onDragEnd);

        return () => {
            document.removeEventListener("mousemove", onDragMove);
            document.removeEventListener("mouseup", onDragEnd);
            document.removeEventListener("touchmove", onDragMove);
            document.removeEventListener("touchend", onDragEnd);
        };
    }, [slideWidth]);

    // Infinite Jump
    useEffect(() => {
        if (!isTransitioning || !containerRef.current || !slideWidth) return;

        const el = containerRef.current;

        const fixLoop = () => {
            setIsTransitioning(false);

            if (current === 0) {
                setCurrent(slidesContent.length);
                el.scrollTo({
                    left: slidesContent.length * slideWidth,
                    behavior: "instant" as ScrollBehavior,
                });
            } else if (current === slides.length - 1) {
                setCurrent(1);
                el.scrollTo({
                    left: slideWidth,
                    behavior: "instant" as ScrollBehavior,
                });
            }
        };

        const t = setTimeout(fixLoop, 350);
        return () => clearTimeout(t);
    }, [current, slideWidth, isTransitioning]);

    // Go to Dot Slide
    const goToSlide = (index: number) => {
        const el = containerRef.current;
        if (!el) return;

        const realIndex = index + 1;
        setCurrent(realIndex);
        el.scrollTo({ left: realIndex * slideWidth, behavior: "smooth" });
        setIsTransitioning(true);
    };

    return (
        <div className="relative w-full h-80 pt-6 text-white select-none">
            {/* Slider */}
            <div
                ref={containerRef}
                className="flex overflow-hidden cursor-grab touch-pan-y bg-textColor"
                onMouseDown={onDragStart}
                onTouchStart={onDragStart}
                style={{ scrollBehavior: "smooth" }}
            >
                {slides.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-transparent transition-all duration-300 ease-in-out overflow-hidden"
                        style={{
                            width: slideWidth || "100%",
                            minWidth: slideWidth || "100%",
                        }}
                    >
                        <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-start pointer-events-none">
                            {/* Left Text */}
                            <div className="max-w-2xs h-60 ms-8 flex flex-col justify-between pointer-events-none">
                                <p className="text-xl font-light">{item.title}</p>

                                <h1 className="text-5xl font-bold leading-[1.1]">
                                    {item.heading}
                                </h1>

                                <button className="group flex items-center gap-3 text-xl cursor-pointer pointer-events-auto">
                                    Shop Now
                                    <span className="border-b border-white transition group-hover:translate-x-1">
                                        →
                                    </span>
                                </button>
                            </div>

                            {/* Right Image */}
                            <div className="flex-1 flex justify-center pointer-events-none">
                                <Image
                                    src={item.image}
                                    alt="Product"
                                    loading="lazy"
                                    width={300}
                                    height={280}
                                    className="object-center"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                {slidesContent.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`w-3 h-3 rounded-full border-2 transition-all cursor-pointer ${current === i + 1
                                ? "bg-primaryColor border-white"
                                : "bg-gray-500 border-gray-500"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
