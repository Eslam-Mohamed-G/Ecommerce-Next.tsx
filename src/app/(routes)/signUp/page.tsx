

import SingUpForm from '@/src/components/layout/SingUpForm/SingUpForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function page() {

    return (
        <section className='xl:max-w-7xl lg:max-w-5xl max:h-dvh m-auto flex flex-row items-center justify-start'>
            <h1 className="sr-only">Sign Up Page</h1>
            <div className="flex flex-row justify-between w-full p-4 md:p-0 md:pe-4 mt-4 md:mt-8">
                <div className="hidden md:block md:w-md md2:w-lg lg:w-xl xl:w-3xl h-[550px] absolute start-0">
                    <Image src="/image/sinUpImg.webp" alt='Sign Up illustration' fill loading='lazy' />
                </div>

                <div className="flex-1 flex flex-col md:items-end justify-center bg-primaryBackground h-[550px] p-4 md:ps-8 border border-borderColor rounded md:border-0 md:rounded-none overflow-hidden">
                    <div className="md:max-w-md lg:w-96 xl:w-md">
                        <h2 className='text-2xl md:text-4xl text-start w-full font-medium text-textColor'>Create an account</h2>
                        <p className='w-full text-start'>Enter your details below</p>
                        <SingUpForm />

                        <div className="flex flex-row gap-3 items-center justify-center w-full text-base mt-6">
                            <p className='font-normal'>Already have account?</p>
                            <Link href="/"><span className='font-medium border-b pb-px'>Log in</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}