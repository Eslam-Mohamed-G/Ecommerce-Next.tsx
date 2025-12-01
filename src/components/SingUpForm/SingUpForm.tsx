"use client";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useRouter } from "next/navigation";
import axios from 'axios';

type valuesType = {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phone: string;
}

export default function SingUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const [messageFromBackEnd, setMessageFromBackEnd] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    let validator = Yup.object().shape({
        name: Yup.string().required('Name is required').min(3, 'min 3 letters'),
        email: Yup.string().required('email is required').email('invalid email'),
        password: Yup.string().required('password is required').min(6, 'password must be at least 6 characters'),
        rePassword: Yup.string().required('rePassword is required').oneOf([Yup.ref('password')], 'invalid rePassword'),
        phone: Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/, 'invalid phone')
    });

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
        },
        validationSchema: validator,
        onSubmit: async (values: valuesType) => {
            setIsLoading(true);
            try {
                const response = await axios.post("/api/SingUp", values);
                if (response.data.message === 'success') {
                    router.push('/')
                };
            } catch (error: any) {
                setMessageFromBackEnd(error?.response?.data?.message)
            } finally {
                setIsLoading(false);
            }
        }
    });

    const inputGray = "border-borderColor text-textColor focus:ring-blue-500 focus:border-blue-500";
    const trueMessage = "border-green-500 text-green-500 appearance-none dark:text-green-400 focus:ring-green-500 focus:border-green-500 focus:text-green-500 dark:bg-gray-700 dark:border-green-500";
    const falseMessage = "border-red-500 text-red-500 appearance-none text-sm focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:border-red-500";

    return (
        <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="flex flex-col gap-6 mt-3 relative">
                <div className="relative z-0 w-full group">
                    <input
                        type="text"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="name"
                        id="name"
                        className={`block py-2 px-0 w-full text-sm text-textColor bg-transparent border-0 border-b-2 border-borderColor focus:outline-none ${formik.touched.name ? formik.errors.name ? falseMessage : trueMessage : inputGray} peer`}
                        placeholder=" "
                    />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-textInputColor dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-left peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>

                    <div className="" aria-live="polite">
                        {formik.errors.name && formik.touched.name ?
                            <>
                                <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                <p className='absolute top-full text-red-600 text-xs'>{formik.errors.name}</p>
                            </>
                            :
                            <i className={`${formik.touched.name ? formik.errors.name ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                        }
                    </div>
                </div>

                {/* email   email   email */}
                <div className="relative z-0 w-full group">
                    <input
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="email"
                        id="email"
                        className={`block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none ${formik.touched.email ? formik.errors.email ? falseMessage : trueMessage : inputGray} peer`}
                        placeholder=" "
                    />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-textInputColor dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-left peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    <div className="absolute top-full" aria-live="polite">
                        {formik.errors.email && formik.touched.email && <p className='text-red-600 text-xs'>{formik.errors.email}</p>}
                    </div>
                </div>

                {/* password   password   password */}
                <div className={`flex flex-row items-center justify-center gap-0.5 border-b-2 ${formik.touched.password ? formik.errors.password ? "border-red-600" : "text-successButton" : "border-border2Color"} relative z-0 group`}>
                    <div className="flex-1">
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : "password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`block py-2 px-0 w-full text-sm bg-transparent border-0 ${formik.touched.password ? formik.errors.password ? falseMessage : trueMessage : inputGray} outline-none focus:outline-none peer`}
                            placeholder=" "
                        />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-textInputColor dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-left peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="absolute top-full start-0" aria-live="polite">
                        {formik.errors.password && formik.touched.password && <p className='text-red-600 text-xs'>{formik.errors.password}</p>}
                    </div>

                    <button type='button' aria-label={showPassword ? "Hide password" : "Show password"} className='flex items-center justify-center h-full text-textInputColor cursor-pointer' onClick={() => { setShowPassword(!showPassword) }}>
                        {showPassword ?
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>
                        }
                    </button>
                </div>

                {/* rePassword   rePassword   rePassword */}
                <div className={`flex flex-row items-center justify-center gap-0.5 border-b-2 ${formik.touched.rePassword ? formik.errors.rePassword ? "border-red-600" : "text-successButton" : "border-border2Color"} relative z-0 group`}>
                    <div className="flex-1 relative z-0">
                        <input
                            id="rePassword"
                            name="rePassword"
                            type={showRePassword ? 'text' : "password"}
                            value={formik.values.rePassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`block py-2 px-0 w-full text-sm bg-transparent border-0 ${formik.touched.rePassword ? formik.errors.rePassword ? falseMessage : trueMessage : inputGray} outline-none focus:outline-none peer`}
                            placeholder=" "
                        />
                        <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-textInputColor dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-left peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div>
                    <div className="absolute top-full start-0" aria-live="polite">
                        {formik.errors.rePassword && formik.touched.rePassword && <p className='text-red-600 text-xs'>{formik.errors.rePassword}</p>}
                    </div>

                    <button type='button' aria-label={showRePassword ? "Hide Confirm password" : "Show Confirm password"} className='flex items-center justify-center h-full text-textInputColor cursor-pointer' onClick={() => { setShowRePassword(!showRePassword) }}>
                        {showRePassword ?
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>
                        }
                    </button>
                </div>

                {/* phone   phone   phone */}
                <div className="relative z-0 w-full group">
                    <input
                        type="tel"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="phone"
                        id="phone"
                        className={`block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none ${formik.touched.phone ? formik.errors.phone ? falseMessage : trueMessage : inputGray} peer`}
                        placeholder=" "
                    />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-textInputColor dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-left peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
                    <div aria-live="polite" className="">
                        {formik.errors.phone && formik.touched.phone ?
                            <>
                                <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                <p className='absolute top-full text-red-600 text-xs'>{formik.errors.phone}</p>
                            </>
                            :
                            <i className={`${formik.touched.phone ? formik.errors.phone ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                        }
                    </div>
                </div>

                <button type="submit" className="text-white bg-primaryColor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2 text-center cursor-pointer">
                    {isLoading ? <>Submiting... <i className='fas fa-spinner fa-spin'></i></> : 'Create Account'}
                </button>

                <div aria-live="polite" className={`absolute top-full -bottom-2 z-0 w-full group text-center ${messageFromBackEnd ? '' : 'hidden'}`}>
                    {messageFromBackEnd ? <p className='text-red-500'>{messageFromBackEnd}</p> : <p className='text-green-500'>succeed</p>}
                </div>
            </div>
        </form>
    )
}