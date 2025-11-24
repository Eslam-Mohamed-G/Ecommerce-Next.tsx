"use client"
import Image from 'next/image'
import React from 'react'

export default function ProductCard() {
    return (
        <div className='w-3xs group'>
            <div className="bg-primaryBackground rounded flex items-center justify-center p-6 overflow-hidden relative">
                {/* discount */}
                <div className="bg-primaryColor w-12 h-6 rounded flex items-center justify-center text-white text-xs font-normal absolute top-3 start-3">
                    <span>-35%</span>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center absolute top-3 end-3">
                    <button type='button' aria-label="Add to favorites" className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-textColor cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                    </button>
                    <button type='button' aria-label="View details" className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-textColor cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                    </button>
                </div>

                {/* img */}
                <div className="">
                    <Image src="/image/Joystick.png" alt='product image' width={190} height={180} />
                </div>

                <button type='button' className='bg-textColor text-white text-base py-1 absolute start-0 end-0 top-full group-hover:-translate-y-8 cursor-pointer transition-all ease-in-out duration-300'>
                    Add To Cart
                </button>
            </div>
            <div className="mt-3">
                <header><h1>HAVIT HV-G92 Gamepad</h1></header>
                <div className="flex flex-row gap-1 text-base">
                    <span className='text-primaryColor font-medium'>$120</span>
                    <span className='text-text2Color font-normal relative after:absolute after:top-1/2 after:-translatey-1/2 after:start-0 after:end-0 after:bg-text2Color after:h-px'>$160</span>
                </div>
            </div>

            {/* stars */}

        </div>
    )
}