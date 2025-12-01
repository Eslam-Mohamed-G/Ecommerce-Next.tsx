import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    return (
        <section className='px-4 py-2 relative'>
            <div className="w-full lg:max-w-5xl xl:max-w-7xl m-auto py-10 flex flex-col gap-4">
                <header>
                    <h1 className='flex flex-row items-center text-sm text-text2Color'>
                        <Link href="/">Home</Link>
                        <div className="bg-text2Color w-5 h-0.5 rounded-full -rotate-60" />
                        <span className='font-normal text-textColor'>About</span>
                    </h1>
                </header>

                <div className="md:h-[400px] lg:h-[500px] flex flex-row md:items-center justify-between">
                    <div className="flex flex-col gap-4 md:max-w-[400px] lg:max-w-lg">
                        <h2 className='font-semibold text-2xl md:text-3xl'>Our Story</h2>
                        <p className='font-normal text-sm leading-5 ms-1'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p className='font-normal text-sm leading-5 ms-1'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>

                    <div className="hidden md:block bg-[#EB7EA8] md:w-96 lg:w-lg xl:w-2xl md:h-[400px] lg:h-[500px] rounded-s absolute end-0" />
                </div>
            </div>
        </section>
    )
};