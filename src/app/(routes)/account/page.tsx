import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';

export default function page() {
    return (
        <section className='w-full lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-10'>
            <header className='flex items-center justify-between'>
                <Breadcrumb items={[{ label: 'My Account' }]} />

                <div className="flex gap-2">
                    <span>Welcome! </span>
                    <span className='text-primaryColor'>Eslam</span>
                </div>
            </header>

            <div className="grid grid-cols-4 mt-10">
                <div className="col-span-1">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3">
                            <h2 className='text-base font-bold'>Manage My Account</h2>
                            <ul className="flex flex-col gap-1 ms-12">
                                <li className='cursor-pointer'>My Profile</li>
                                <li className='cursor-pointer'>Address Book</li>
                                <li className='cursor-pointer'>My Payment Options</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h2 className='text-base font-bold'>My Orders</h2>
                            <ul className="flex flex-col gap-1 ms-12">
                                <li className='cursor-pointer'>My Returns</li>
                                <li className='cursor-pointer'>My Cancellations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="w-full p-6 rounded shadow">
                        <h2 className='text-primaryColor text-xl font-semibold mb-5'>Edit Your Profile</h2>
                        <form className='flex flex-col gap-5'>
                            <div className="flex flex-row flex-wrap gap-5">
                                <div className="flex-1 flex flex-col gap-1 min-w-56">
                                    <label htmlFor="f_name">First Name</label>
                                    <input type="text" name="f_name" id="f_name" placeholder='Eslam' className='bg-primaryBackground p-2 rounded outline-none' />
                                </div>

                                <div className="flex-1 flex flex-col gap-1 min-w-56">
                                    <label htmlFor="l_name">Last Name</label>
                                    <input type="email" name="l_name" id="l_name" placeholder='Mohamed' className='bg-primaryBackground rounded p-2 outline-none' />
                                </div>
                            </div>

                            <div className="flex flex-row flex-wrap gap-5">
                                <div className="flex-1 flex flex-col gap-1 min-w-56">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder='Eslam@gmail.com' className='bg-primaryBackground rounded p-2 outline-none' />
                                </div>
                                <div className="flex-1 flex flex-col gap-1 min-w-56">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name="address" id="address" placeholder='Kingston, 5236, United State' className='bg-primaryBackground p-2 rounded outline-none' />
                                </div>
                            </div>

                            <div className="w-full flex justify-end items-end">
                                <button type='submit' className='bg-primaryColor hover:bg-buttonColor text-white rounded w-44 h-14 cursor-pointer transition-all ease-in-out duration-300'>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}