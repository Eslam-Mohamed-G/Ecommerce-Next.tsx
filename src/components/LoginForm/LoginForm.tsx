"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Link from 'next/link';
import authService from '@/src/services/authService';
import { LoginCredentials } from '@/src/types';
import { getErrorMessage } from '@/src/services/apiClient';
import { COOKIE_CONFIG } from '@/src/services/endpoints';
import { EyeIcon, EyeOffIcon } from '../ui/Icon/Icon';
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner';

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

        onSubmit: async (values: LoginCredentials) => {
            setIsLoading(true);
            try {
                const response = await authService.signin(values);
                if (response.message === "success" && response.token) {
                    setCookie(COOKIE_CONFIG.TOKEN.name, response.token, {
                        maxAge: COOKIE_CONFIG.TOKEN.maxAge,
                        path: COOKIE_CONFIG.TOKEN.path,
                        secure: COOKIE_CONFIG.TOKEN.secure,
                    });

                    router.push("/");
                    router.refresh();
                }
            } catch (error: any) {
                setMessageFromBackEnd(getErrorMessage(error));
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

                    <div aria-live="polite" className="text-red-600">
                        {formik.errors.email && formik.touched.email &&
                            <p className='absolute -bottom-5 right-0 text-xs'>{formik.errors.email}</p>
                        }
                    </div>
                </div>

                {/* password   password   password */}
                <div className="border-b-2 border-border2Color relative">
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        autoComplete="off"
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : "password"}
                        className={`w-11/12 h-10 peer placeholder-transparent text-gray-900 focus:outline-none focus:borer-rose-600 ${formik.touched.password ? formik.errors.password ? falseMessage : trueMessage : inputGray}`}
                        placeholder="Password"
                    />
                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                    <div aria-live="polite" className="">
                        {formik.errors.password && formik.touched.password && <p className='absolute -bottom-5 right-0 text-red-600 text-xs'>{formik.errors.password}</p>}
                    </div>

                    <button type='button' aria-label={showPassword ? "Hide password" : "Show password"} className='flex items-center justify-center absolute top-0 bottom-0 end-0 cursor-pointer' onClick={togglePasswordVisibility}>
                        {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                    </button>
                </div>

                {/* submiting */}
                <div className="relative flex flex-row items-center justify-between">
                    <button type='submit' disabled={isLoading} className={`bg-primaryColor text-white flex items-center justify-center ${isLoading ? "w-10 h-10 rounded-full opacity-60 cursor-not-allowed" : "w-32 h-10 rounded cursor-pointer"} relative transition-all ease-in-out duration-300`}>
                        {isLoading ?
                            <LoadingSpinner size="sm" />
                            :
                            <span>Log In</span>
                        }
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
                <Link href="/signUp"><span className='font-medium border-b pb-px'>Create an account</span></Link>
            </div>
        </form>
    )
}