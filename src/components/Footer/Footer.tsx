import React from 'react'

export default function Footer() {
    return (
        <section className='bg-textColor'>
            <div className="xl:max-w-7xl lg:max-w-5xl m-auto px-4 flex flex-col md:flex-row gap-10 text-white">
                <div className="flex flex-col">
                    <h1 className='font-bold text-2xl'>Exclusive</h1>
                    <h2 className='font-medium text-xl'>Subscribe</h2>
                    <p>Get 10% off your first order</p>
                </div>
            </div>
        </section>
    )
}
