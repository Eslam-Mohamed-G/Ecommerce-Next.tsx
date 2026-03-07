import React from 'react';
import Link from "next/link";
import Breadcrumb from '../components/common/Breadcrumb/Breadcrumb';

export default function NotFound() {
    return (
        <div className="xl:max-w-7xl lg:max-w-5xl m-auto px-4 py-8">
            <Breadcrumb items={[{ label: '404 Error' }]} />
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl lg:text-8xl font-bold"><span>404</span> <span className='text-nowrap'>Not Found</span></h1>
                <p className="mt-2 text-gray-500">Your visited page not found. You may go home page.</p>

                <Link
                    href="/"
                    className="mt-5 px-4 py-2 bg-black text-white rounded"
                >
                    Back To Home
                </Link>
            </div>
        </div>
    )
};