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
            <div className="relative bg-primaryBackground rounded-lg overflow-hidden group cursor-zoom-in">
                <Image
                    src={images[selectedImage]}
                    alt={`${productName} - Image ${selectedImage + 1}`}
                    fill
                    className="object-contain p-8"
                    priority
                />
            </div>
        </div>
    )
}