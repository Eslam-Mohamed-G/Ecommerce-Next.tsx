import Breadcrumb from '@/src/components/Breadcrumb/Breadcrumb'
import React from 'react'

export default function page() {
    return (
        <main className="xl:max-w-7xl lg:max-w-5xl m-auto px-4 py-8">
            <Breadcrumb items={[{ label: 'Products' }]} />
        </main>
    )
}
