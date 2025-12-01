import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section className='xl:max-w-7xl lg:max-w-5xl m-auto px-4 py-14 flex flex-col gap-10'>
      <header>
        <h1 className='text-sm text-text2Color'><Link href="/">Home</Link> / <span className='font-normal text-textColor'>Cantact</span></h1>
      </header>

      <div className="grid md:grid-cols-4 gap-5">
        <div className="md:col-span-4 lg:col-span-1">
          <div className="flex flex-col md:flex-row lg:flex-col justify-between gap-5 p-4 md:p-8 rounded shadow">
            <div className="flex-1 flex flex-col gap-5 pb-4 border-b-2 md:border-b-0 md:border-e-2 lg:border-e-0 lg:border-b-2 border-borderColor">
              <h2 className='flex flex-row gap-5 items-center'>
                <div className="bg-primaryColor w-10 h-10 rounded-full flex items-center justify-center">
                  <Image src="/icon/phone.svg" alt='phone' loading='lazy' width={24} height={24} />
                </div>
                <span className='font-medium text-base mt-0.5'>Call To Us</span>
              </h2>
              <p className='text-sm font-normal ms-1'>We are available 24/7, 7 days a week.</p>
              <p className='text-sm font-normal ms-1'><span>Phone: </span>+8801611112222</p>
            </div>

            <div className="flex-1 flex flex-col gap-5 pb-4">
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

        <div className="md:col-span-4 lg:col-span-3">
          <form className="h-full flex flex-col gap-5 p-4 md:p-8 rounded shadow">
            <div className="flex flex-row flex-wrap gap-5">
              <input type="text" name="name" id="name" placeholder='Your Name *' className='flex-1 min-w-56 bg-primaryBackground rounded p-2 outline-none' />
              <input type="email" name="email" id="email" placeholder='Your Email *' className='flex-1 min-w-56 bg-primaryBackground rounded p-2 outline-none' />
              <input type="tel" name="phone" id="phone" placeholder='Your Phone *' className='flex-1 min-w-56 bg-primaryBackground rounded p-2 outline-none' />
            </div>
            <textarea id="message" className="h-full bg-primaryBackground p-2 rounded outline-none resize-none" placeholder='Your Massage'></textarea>
            <div className="w-full flex justify-end items-end">
              <button type='submit' className='bg-primaryColor hover:bg-buttonColor text-white rounded w-44 h-14 cursor-pointer transition-all ease-in-out duration-300'>Send Massage</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
