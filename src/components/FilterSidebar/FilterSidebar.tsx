"use client"
import React, { useState } from 'react';

interface FilterSidebarProps {
    onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
    categories: string[];
    priceRange: [number, number];
    rating: number;
}

const categories = [
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Sports',
    'Books',
    'Toys',
    'Beauty',
    'Automotive'
];
export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const handleCategoryToggle = (category: string) => {
        const updated = selectedCategories.includes(category)
            ? selectedCategories.filter(c => c !== category)
            : [...selectedCategories, category];
        setSelectedCategories(updated);
    };

    // price range
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [minRating, setMinRating] = useState(0);
    const handlePriceChange = (index: 0 | 1, value: number) => {
        const updated: [number, number] = [...priceRange] as [number, number];
        updated[index] = value;
        setPriceRange(updated);
        onFilterChange({ categories: selectedCategories, priceRange: updated, rating: minRating });
    };

    return (
        <>
            {/* Mobile Filter Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-full bg-primaryColor text-white py-3 px-4 rounded-lg mb-4 flex items-center justify-center gap-2 cursor-pointer"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M7 12h10M11 18h2" />
                </svg>
                Filters
            </button>

            {/* Sidebar */}
            <aside className={`
                    fixed lg:static top-0 left-0 h-full lg:h-auto w-80 lg:w-64
                    bg-white lg:bg-transparent z-50 lg:z-auto
                    transform lg:transform-none transition-transform duration-300
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    overflow-y-auto p-6 lg:p-0 border-r lg:border-r-0 border-borderColor
                `}
            >
                {/* Mobile Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="lg:hidden absolute top-2 right-2 w-11 h-11 flex items-center justify-center cursor-pointer"
                    aria-label="Close filters"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col gap-6 mt-6">
                    {/* header */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Filters</h2>
                        <button
                            className="text-sm text-primaryColor hover:underline cursor-pointer"
                        >
                            Clear All
                        </button>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold mb-3">Categories</h3>
                        <div className="flex flex-col gap-2">
                            {categories.map((category) => (
                                <label
                                    key={category}
                                    className="flex items-center gap-2 cursor-pointer hover:text-primaryColor transition-colors"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryToggle(category)}
                                        className="w-4 h-4 accent-primaryColor cursor-pointer"
                                    />
                                    <span className="text-sm">{category}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div>
                        <h3 className="font-semibold mb-3">Price Range</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                                    className="w-full px-3 py-2 border border-borderColor rounded focus:outline-none focus:border-primaryColor"
                                    placeholder="Min"
                                />
                                <span>-</span>
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                                    className="w-full px-3 py-2 border border-borderColor rounded focus:outline-none focus:border-primaryColor"
                                    placeholder="Max"
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                value={priceRange[1]}
                                onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                                className="w-full accent-primaryColor"
                            />
                        </div>
                    </div>

                    {/* Rating */}
                    <div>
                        <h3 className="font-semibold mb-3">Minimum Rating</h3>
                        <div className="flex flex-col gap-2">
                            {[4, 3, 2, 1].map((rating) => (
                                <label
                                    key={rating}
                                    className="flex items-center gap-2 cursor-pointer hover:text-primaryColor transition-colors"
                                >
                                    <input
                                        type="radio"
                                        name="rating"
                                        checked={minRating === rating}
                                        // onChange={() => handleRatingChange(rating)}
                                        className="w-4 h-4 accent-primaryColor cursor-pointer"
                                    />
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                width="16"
                                                height="16"
                                                fill={i < rating ? '#FFAD33' : '#9096A2'}
                                            >
                                                <path d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 6.83189Z" />
                                            </svg>
                                        ))}
                                        <span className="text-sm ml-1">& Up</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}