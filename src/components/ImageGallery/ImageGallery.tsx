import React, { useState } from 'react';

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
                
            </div>
        </div>
    )
}