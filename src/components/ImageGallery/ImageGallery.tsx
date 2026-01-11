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
    )
}