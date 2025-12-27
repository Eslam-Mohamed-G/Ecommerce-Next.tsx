import Breadcrumb from '@/src/components/Breadcrumb/Breadcrumb'
import FilterSidebar from '@/src/components/FilterSidebar/FilterSidebar'
import React from 'react'

export default function page() {
    return (
        <main className="xl:max-w-7xl lg:max-w-5xl m-auto px-4 py-8">
            <Breadcrumb items={[{ label: 'Products' }]} />

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <FilterSidebar />
            </div>
        </main>
    )
}
