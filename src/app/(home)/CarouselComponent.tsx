"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image';

const originalSlides = ["First slide", "Second slide", "Third slide"];

// Create infinite loop structure: [last, ...slides, first]
const slides = [
    originalSlides[originalSlides.length - 1],
    ...originalSlides,
    originalSlides[0],
];

export default function CarouselComponent() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [current, setCurrent] = useState(1); // start at first real slide
    const [slideWidth, setSlideWidth] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Update slide width
    useEffect(() => {
        const updateWidth = () => {
            const el = containerRef.current;
            if (!el) return;
            const w = el.clientWidth;
            setSlideWidth(w);

            // Scroll to correct slide on resize
            el.scrollTo({ left: current * w, behavior: "instant" as ScrollBehavior });
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [current]);

    // Drag logic
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollStart = useRef(0);

    const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        const el = containerRef.current;
        if (!el) return;
        isDragging.current = true;
        startX.current =
            "touches" in e
                ? e.touches[0].clientX
                : (e as React.MouseEvent).clientX;

        scrollStart.current = el.scrollLeft;
        el.style.cursor = "grabbing";
    };

    const onDragMove = (e: any) => {
        if (!isDragging.current || !containerRef.current) return;

        const x = e.touches ? e.touches[0].clientX : e.clientX;
        const walk = x - startX.current;
        containerRef.current.scrollLeft = scrollStart.current - walk;
    };

    const onDragEnd = () => {
        const el = containerRef.current;
        if (!isDragging.current || !el) return;
        isDragging.current = false;
        el.style.cursor = "grab";

        if (!slideWidth) return;

        let idx = Math.round(el.scrollLeft / slideWidth);

        setCurrent(idx);

        el.scrollTo({ left: idx * slideWidth, behavior: "smooth" });

        setIsTransitioning(true);
    };

    // Attach global drag listeners
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

    // Handle infinite loop jump
    useEffect(() => {
        if (!isTransitioning || !containerRef.current || !slideWidth) return;

        const el = containerRef.current;

        const handleTransitionEnd = () => {
            setIsTransitioning(false);

            if (current === 0) {
                setCurrent(originalSlides.length);
                el.scrollTo({
                    left: originalSlides.length * slideWidth,
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

        const timeout = setTimeout(handleTransitionEnd, 300);

        return () => clearTimeout(timeout);
    }, [current, slideWidth, isTransitioning]);

    // Go to slide using dots
    const goToRealSlide = (index: number) => {
        const el = containerRef.current;
        if (!el || !slideWidth) return;

        const realIndex = index + 1; // because of duplicated first item
        setCurrent(realIndex);

        el.scrollTo({ left: realIndex * slideWidth, behavior: "smooth" });
        setIsTransitioning(true);
    };

    return (
        <div className="relative w-full bg-transparent text-white">
            {/* SLIDER */}
            <div
                ref={containerRef}
                className="flex overflow-hidden touch-pan-y cursor-grab select-none bg-textColor"
                onMouseDown={onDragStart}
                onTouchStart={onDragStart}
                style={{ scrollBehavior: "smooth" }}
            >
                {slides.map((text, idx) => (
                    <div
                        key={idx}
                        className="flex-none p-4 flex justify-center items-center bg-transparent text-lg border border-red-500 transition-all ease-in-out duration-300"
                        style={{
                            width: slideWidth || "100%",
                            minWidth: slideWidth || "100%",
                            height: "300px",
                        }}
                    >
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

                            {/* Left Content */}
                            <div className="flex-1 space-y-6">
                                {/* Apple Logo + Title */}
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/image/apple-logo.png"
                                        alt="Apple"
                                        width={40}
                                        height={40}
                                    />
                                    <p className="text-xl font-light">iPhone 14 Series</p>
                                </div>

                                {/* Big Heading */}
                                <h1 className="text-5xl md:text-6xl font-bold leading-[1.1]">
                                    Up to 10% <br /> off Voucher
                                </h1>

                                {/* Shop Now */}
                                <button className="group flex items-center gap-3 text-xl mt-6">
                                    Shop Now
                                    <span className="border-b border-white pb-[2px] group-hover:translate-x-1 transition">
                                        →
                                    </span>
                                </button>
                            </div>

                            {/* Right Image */}
                            <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
                                <Image
                                    src="/iphone.png"
                                    alt="iPhone"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                        {text}
                    </div>
                ))}
            </div>

            {/* DOTS */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {originalSlides.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 border-2 rounded-full ${current === i + 1
                            ? "bg-primaryColor border-white"
                            : "bg-gray-400 border-gray-300"
                            } cursor-pointer transition-all ease-in-out duration-300`}
                        onClick={() => goToRealSlide(i)}
                    />
                ))}
            </div>
        </div>
    );
}