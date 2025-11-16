

import SingUpForm from '@/src/components/layout/SingUpForm/SingUpForm';
import Image from 'next/image';
import React from 'react';


export default function page() {

    return (
        <section className='xl:max-w-7xl lg:max-w-5xl max:h-dvh flex flex-row items-center justify-start'>
            <h1 className="sr-only">Sign Up Page</h1>
            <div className="flex flex-row justify-between w-full p-4 md:p-0 mt-8">
                <div className="relative w-xs md:w-lg lg:w-2xl h-[550px] hidden md:block">
                    <Image src="/image/sinUpImg.webp" alt='Sign Up illustration' fill loading='lazy' />
                </div>

                <div className="flex-1 bg-primaryBackground p-4 md:ps-8  border border-borderColor rounded md:border-0 md:border-borderColor md:rounded overflow-hidden">
                    <h2 className='text-2xl md:text-4xl font-medium text-textColor'>Create an account</h2>
                    <p>Enter your details below</p>
                    <SingUpForm />
                </div>
            </div>
        </section>
    )
}