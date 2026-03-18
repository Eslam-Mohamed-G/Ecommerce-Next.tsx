import LoginForm from '@/src/components/LoginForm/LoginForm'
import Image from 'next/image'
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login | E-Commerce Store',
    description: 'Log in to your account to access your orders, wishlist, and exclusive deals.',
};
export default function page() {
    return (
        <section className='xl:max-w-7xl lg:max-w-5xl max:h-dvh m-auto flex flex-row items-center justify-start'>
            <h1 className="sr-only">Sign In Page</h1>
            <div className="flex flex-row justify-between w-full p-4 md:p-0 md:pe-4 my-4 md:my-8">
                <div className="hidden md:block md:w-md md2:w-lg lg:w-xl xl:w-3xl h-[550px] absolute start-0">
                    <Image src="/image/sinUpImg.webp" alt='Sign Up illustration' loading='lazy' fill />
                </div>

                <div className="flex-1 flex flex-col md:items-end justify-center bg-primaryBackground h-[550px] p-4 md:ps-8 border border-borderColor rounded md:border-0 md:rounded-none overflow-hidden">
                    <div className="md:max-w-md lg:w-96 xl:w-md">
                        <h2 className='text-2xl md:text-4xl text-start w-full font-medium text-textColor'>Log in to Exclusive</h2>
                        <p className='w-full text-start'>Enter your details below</p>

                        <LoginForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}