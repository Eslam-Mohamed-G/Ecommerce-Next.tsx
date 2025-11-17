"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useRouter } from "next/navigation";
import axios from 'axios';
import { setAuthToken } from '@/src/actions/setAuthToken';
import Link from 'next/link';

type valuesType = {
    email: string;
    password: string;
}

export default function LoginForm() {
    const [messageFromBackEnd, setMessageFromBackEnd] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const router = useRouter();

    let validator = Yup.object().shape({
        email: Yup.string().required('email is required').email('invalid email'),
        password: Yup.string().required('password is required')
    });

    let formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: validator,

        onSubmit: async (values: valuesType) => {
            setIsLoading(true);
            try {
                const response = await axios.post("/api/login", values);
                if (response.data.message === 'success') {
                    setAuthToken(response?.data?.token);

                    router.push('/')
                };
            } catch (error: any) {
                setMessageFromBackEnd(error?.response?.data?.message)
            } finally {
                setIsLoading(false);
            }
        }
    });

    const inputGray = "border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 min-w-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    const trueMessage = "border-green-500 text-green-500 appearance-none dark:text-green-400 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-green-500";
    const falseMessage = "border-red-500 text-red-500 appearance-none text-sm focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:border-red-500";
    return (
        <form onSubmit={formik.handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="flex flex-col gap-8 relative">
                {/* email   email   email */}
                <div className="relative">
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="email"
                        className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 ${formik.touched.email ? formik.errors.email ? falseMessage : trueMessage : inputGray}`}
                        placeholder="Email address"
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                        Address
                    </label>

                    {formik.errors.email && formik.touched.email ?
                        <>
                            <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                            <p className='absolute -bottom-5 text-red-600 text-[12px]'>{formik.errors.email}</p>
                        </>
                        :
                        <i className={`${formik.touched.email ? formik.errors.email ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                    }
                </div>

                {/* password   password   password */}
                <div className="relative">
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        autoComplete="off"
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : "password"}
                        className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 ${formik.touched.password ? formik.errors.password ? falseMessage : trueMessage : inputGray}`}
                        placeholder="Password"
                    />
                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                    {formik.errors.password && formik.touched.password ?
                        <>
                            <i className="absolute top-1/3 end-7 text-red-600 fa-solid fa-xmark"></i>
                            <p className='absolute -bottom-5 text-red-600 text-[12px]'>{formik.errors.password}</p>
                        </>
                        :
                        <i className={`${formik.touched.password ? formik.errors.password ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-7 text-green-500 fa-solid fa-check`}></i>
                    }
                    <div className='absolute top-2 end-0 cursor-pointer' onClick={togglePasswordVisibility}>
                        {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                    </div>
                </div>

                {/* Forgot password */}
                <div className="relative flex flex-row items-center justify-between">
                    <button className="bg-primaryColor text-white w-32 h-10 rounded cursor-pointer">
                        {isLoading ? <>Submiting... <i className='fas fa-spinner fa-spin'></i></> : 'Log In'}
                    </button>
                    <Link href={'/forgetpassword'} className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</Link>
                </div>

                <div aria-live="polite" className={`absolute top-full -bottom-2 z-0 w-full mb-6 group text-center ${messageFromBackEnd ? '' : 'hidden'}`}>
                    {messageFromBackEnd ? <p className='text-red-500'>{messageFromBackEnd}</p> : <p className='text-green-500'>succeed
                    </p>}
                </div>
            </div>


            <div className="flex flex-row gap-3 items-center justify-center w-full text-base mt-6">
                <p className='font-normal'>Need an account?</p>
                <Link href="/login"><span className='font-medium border-b pb-px'>Create an account</span></Link>
            </div>
        </form>
    )
}