import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    return (
        <section className='lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-14 flex flex-col gap-4 border'>
            <header>
                <h1 className='flex flex-row items-center text-sm text-text2Color'>
                    <Link href="/">Home</Link>
                    <div className="bg-text2Color w-5 h-0.5 rounded-full -rotate-60" />
                    <span className='font-normal text-textColor'>About</span>
                </h1>
            </header>
            <div className="flex flex-row items-center justify-between relative">
                <div className="flex flex-col gap-4 max-w-lg">
                    <h2 className='font-semibold text-2xl md:text-3xl'>Our Story</h2>
                    <p className='font-normal text-sm leading-5 ms-1'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='font-normal text-sm leading-5 ms-1'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>

                <div className="hidden md:block bg-[#EB7EA8] w-2xl h-[500px] rounded relative end-0"/>
            </div>
        </section>
    )
};