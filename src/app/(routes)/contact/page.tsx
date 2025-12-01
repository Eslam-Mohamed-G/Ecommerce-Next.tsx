import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section className='xl:max-w-7xl lg:max-w-5xl m-auto px-4 py-14 flex flex-col gap-10'>
      <header>
        <h1 className='text-sm text-text2Color'><Link href="/">Home</Link> / <span className='font-normal text-textColor'>Cantact</span></h1>
      </header>

      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-1">
          <div className="flex flex-col gap-5 p-4 md:p-8 rounded shadow">
            <div className="flex flex-col gap-5 pb-4 border-b-2 border-borderColor">
              <h2 className='flex flex-row gap-5 items-center'>
                <div className="bg-primaryColor w-10 h-10 rounded-full flex items-center justify-center">
                  <Image src="/icon/phone.svg" alt='phone' loading='lazy' width={24} height={24} />
                </div>
                <span className='font-medium text-base mt-0.5'>Call To Us</span>
              </h2>
              <p className='text-sm font-normal ms-1'>We are available 24/7, 7 days a week.</p>
              <p className='text-sm font-normal ms-1'><span>Phone: </span>+8801611112222</p>
            </div>

            <div className="flex flex-col gap-5 pb-4">
              <h2 className='flex flex-row gap-5 items-center'>
                <div className="bg-primaryColor w-10 h-10 rounded-full flex items-center justify-center">
                  <Image src="/icon/email.svg" alt='email' loading='lazy' width={24} height={24} />
                </div>
                <span className='font-medium text-base mt-0.5'>Write To US</span>
              </h2>
              <p className='text-sm font-normal ms-1'>Fill out our form and we will contact you within 24 hours.</p>
              <p className='text-sm font-normal ms-1'><span>Emails: </span>customer@exclusive.com</p>
              <p className='text-sm font-normal ms-1'><span>Emails: </span>support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <form className="rounded shadow"></form>
        </div>
      </div>
    </section>
  )
}
