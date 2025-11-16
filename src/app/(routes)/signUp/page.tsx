import Image from 'next/image';
import React from 'react';

export default function page() {
    return (
        <section className='xl:max-w-7xl lg:max-w-5xl m-auto px-4 max:h-dvh border-2 flex flex-row items-center justify-start'>
            <h1 className="sr-only">Sign Up Page</h1>
            <div className="relative w-xl h-[500px]">
                <Image src="/image/sinUpImg.webp" alt='Sign Up illustration' fill loading='lazy' />
            </div>

            <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
                <h2>Create an account</h2>
                <p>Enter your details below</p>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="name"
                        id="name"
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none ${formik.touched.name ? formik.errors.name ? falseMessage : trueMessage : inputGray} peer`}
                        placeholder=" "
                    />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>

                    <div className="" aria-live="polite">
                        {formik.errors.name && formik.touched.name ?
                            <>
                                <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.name}</p>
                            </>
                            :
                            <i className={`${formik.touched.name ? formik.errors.name ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                        }
                    </div>
                </div>

                {/* email   email   email */}
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="email"
                        id="email"
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none ${formik.touched.email ? formik.errors.email ? falseMessage : trueMessage : inputGray} peer`}
                        placeholder=" "
                    />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    <div className="" aria-live="polite">
                        {formik.errors.email && formik.touched.email ?
                            <>
                                <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.email}</p>
                            </>
                            :
                            <i className={`${formik.touched.email ? formik.errors.email ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                        }
                    </div>
                </div>

                {/* password   password   password */}
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="password"
                        id="password"
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none ${formik.touched.password ? formik.errors.password ? falseMessage : trueMessage : inputGray} peer`}
                        placeholder=" "
                    />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    <div className="" aria-live="polite">

                        {formik.errors.password && formik.touched.password ?
                            <>
                                <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.password}</p>
                            </>
                            :
                            <i className={`${formik.touched.password ? formik.errors.password ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                        }
                    </div>
                </div>

                {/* rePassword   rePassword   rePassword */}
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="password"
                        value={formik.values.rePassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="rePassword"
                        id="rePassword"
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none ${formik.touched.rePassword ? formik.errors.rePassword ? falseMessage : trueMessage : inputGray} peer`}
                        placeholder=" "
                    />
                    <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    <div className="" aria-live="polite">

                        {formik.errors.rePassword && formik.touched.rePassword ?
                            <>
                                <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.rePassword}</p>
                            </>
                            :
                            <i className={`${formik.touched.rePassword ? formik.errors.rePassword ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                        }
                    </div>
                </div>

                {/* phone   phone   phone */}
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="phone"
                        id="phone"
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none ${formik.touched.phone ? formik.errors.phone ? falseMessage : trueMessage : inputGray} peer`}
                        placeholder=" "
                    />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
                    <div className="" aria-live="polite">

                        {formik.errors.phone && formik.touched.phone ?
                            <>
                                <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.phone}</p>
                            </>
                            :
                            <i className={`${formik.touched.phone ? formik.errors.phone ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                        }
                    </div>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {isLoading ? <>Submiting... <i className='fas fa-spinner fa-spin'></i></> : 'Create Account'}
                </button>

                <div className={`relative z-0 w-full mb-6 group text-center ${messageFromBackEnd ? '' : 'hidden'}`}>
                    {messageFromBackEnd ? <p className='text-red-500'>{messageFromBackEnd}</p> : <p className='text-green-500'>succeed</p>}
                </div>
            </form>
        </section>
    )
}