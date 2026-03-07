import React from 'react';
import Link from "next/link";
import Breadcrumb from '../components/common/Breadcrumb/Breadcrumb';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Breadcrumb items={[{ label: 'Products' }]} />
            <h1 className="text-5xl font-bold">404</h1>
            <p className="mt-2 text-gray-500">Page Not Found</p>

            <Link
                href="/"
                className="mt-5 px-4 py-2 bg-black text-white rounded"
            >
                Back To Home
            </Link>
        </div>
    )
}