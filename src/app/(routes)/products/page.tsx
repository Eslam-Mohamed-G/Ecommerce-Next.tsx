"use client"
import Breadcrumb from '@/src/components/Breadcrumb/Breadcrumb'
import FilterSidebar, { FilterState } from '@/src/components/FilterSidebar/FilterSidebar'
import React, { useState } from 'react'

export default function page() {
    const [filters, setFilters] = useState<FilterState>({
        categories: [],
        priceRange: [0, 1000],
        rating: 0,
    });
    return (
        <main className="xl:max-w-7xl lg:max-w-5xl m-auto px-4 py-8">
            <Breadcrumb items={[{ label: 'Products' }]} />

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <FilterSidebar onFilterChange={setFilters} />
            </div>
        </main>
    )
}
