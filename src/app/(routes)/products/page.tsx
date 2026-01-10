"use client"
import Breadcrumb from '@/src/components/Breadcrumb/Breadcrumb'
import FilterSidebar, { FilterState } from '@/src/components/FilterSidebar/FilterSidebar'
import { Product } from '@/src/components/ProductCard/ProductCard';
import React, { useEffect, useState } from 'react'

interface ApiResponse {
    results: number;
    metadata: {
        currentPage: number;
        numberOfPages: number;
        limit: number;
        nextPage?: number;
    };
    data: Product[];
}

export default function page() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    console.log(products);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [filters, setFilters] = useState<FilterState>({
        categories: [],
        priceRange: [0, 1000],
        rating: 0,
    });

    const [sortBy, setSortBy] = useState('default');

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://ecommerce.routemisr.com/api/v1/products');

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data: ApiResponse = await response.json();
                setProducts(data.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

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
        result = result.filter(prodcut =>{
            const price = prodcut.priceAfterDiscount || prodcut.price;
            return price >= filters.priceRange[0] && price <= filters.priceRange[1]
        })

        // Filter by rating
        if(filters.rating > 0) {
            result = result.filter(product => product.ratingsAverage >= filters.rating);
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
                                Showing of products
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
                </div>
            </div>
        </main>
    )
}
