import Image from 'next/image';
import React from 'react';

export default function page() {
    return (
        <section className='xl:max-w-7xl lg:max-w-5xl m-auto px-4 max:h-dvh border-2 flex flex-row items-center justify-start'>
            <div className="relative w-xl h-[500px]">
                <Image src="/image/sinUpImg.webp" alt='sinUp Img' fill loading='lazy'/>
            </div>
            singup
        </section>
    )
}