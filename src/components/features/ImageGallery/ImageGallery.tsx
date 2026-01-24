"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
    images: string[];
    productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    return (
        <div className="flex flex-col gap-4">
            {/* main Image */}
            <div className="relative bg-primaryBackground rounded-lg overflow-hidden group cursor-zoom-in" onClick={() => setIsZoomed(!isZoomed)}>
                <div className={`relative w-full h-[400px] md:h-[500px] transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}>
                    <Image
                        src={images[selectedImage]}
                        alt={`${productName} - Image ${selectedImage + 1}`}
                        fill
                        className="object-contain p-8"
                        priority
                    />
                </div>
                {isZoomed && (
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded text-sm">
                        Click to zoom out
                    </div>
                )}
            </div>
            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto scrollbar-none">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelectedImage(index);
                                setIsZoomed(false);
                            }}
                            className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 bg-primaryBackground rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                ? 'border-primaryColor'
                                : 'border-transparent hover:border-borderColor'
                                }`}
                            aria-label={`View image ${index + 1}`}
                        >
                            <Image
                                src={image}
                                alt={`${productName} thumbnail ${index + 1}`}
                                fill
                                className="object-contain p-2"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}