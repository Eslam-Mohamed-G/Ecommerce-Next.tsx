"use client"
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb'
import FilterSidebar, { FilterState } from '@/src/components/features/FilterSidebar/FilterSidebar'
import ProductCard from '@/src/components/features/ProductCard/ProductCard';
import { useGetProducts } from '@/src/context/GetProductsContext';
import { Product } from '@/src/types';
import React, { useEffect, useState } from 'react'


export default function page() {
    const {loading, error, products, fetchProducts} = useGetProducts();

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState<FilterState>({
        categories: [],
        priceRange: [0, 1000],
        rating: 0,
    });

    const [sortBy, setSortBy] = useState('default');

    // Fetch products from API
    useEffect(() => {
        fetchProducts();
    }, []);

    // Apply filters and sorting
    useEffect(() => {
        let result = [...products];

        // filter by categories
        if (filters.categories.length > 0) {
            result = result.filter(product =>
                filters.categories.some(cat =>
                    product.category.name.toLowerCase().includes(cat.toLowerCase())
                )
            );
        }

        // Filter by price range
        result = result.filter(prodcut => {
            const price = prodcut.priceAfterDiscount || prodcut.price;
            return price >= filters.priceRange[0] && price <= filters.priceRange[1]
        })

        // Filter by rating
        if (filters.rating > 0) {
            result = result.filter(product => product.ratingsAverage >= filters.rating);
        };

        // Apply sorting
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => {
                    const priceA = a.priceAfterDiscount || a.price;
                    const priceB = b.priceAfterDiscount || b.price;
                    return priceA - priceB;
                })
                break;

            case 'price-high':
                result.sort((a, b) => {
                    const priceA = a.priceAfterDiscount || a.price;
                    const priceB = b.priceAfterDiscount || b.price;
                    return priceB - priceA;
                })
                break;

            case 'rating':
                result.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
                break;

            case 'name':
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;

            default:
                break;
        };

        setFilteredProducts(result);
    }, [products, filters, sortBy]);
    return (
        <main className="xl:max-w-7xl lg:max-w-5xl m-auto px-4 py-8">
            <Breadcrumb items={[{ label: 'Products' }]} />

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <FilterSidebar onFilterChange={setFilters} />

                {/* Main Content */}
                <div className="flex-1">
                    {/* header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>
                            <p className="text-text2Color mt-1">
                                Showing {filteredProducts.length} of {products.length} products
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Sort Dropdown */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border border-borderColor rounded focus:outline-none focus:border-primaryColor cursor-pointer"
                            >
                                <option value="default">Default</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="name">Name: A to Z</option>
                            </select>
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex items-center justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primaryColor"></div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                            <p className="font-semibold">Error loading products</p>
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    {/* Products Grid */}
                    {!loading && !error && (
                        <>
                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {filteredProducts.map((product) => (
                                        <ProductCard key={product.id} className='w-full md:w-56 group' {...product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-xl text-text2Color">No products found</p>
                                    <p className="text-sm text-text2Color mt-2">Try adjusting your filters</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}
