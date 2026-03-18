import React from 'react';
import Image from 'next/image'
import Breadcrumb from '@/src/components/common/Breadcrumb/Breadcrumb';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | E-Commerce Store',
    description: 'Learn more about our E-Commerce Store, our story, and our commitment to bringing you the best products.',
};
export default function page() {
    return (
        <section className='relative'>
            <div className="w-full lg:max-w-5xl xl:max-w-7xl m-auto px-4 py-10 flex flex-col gap-4">
                <header>
                    <Breadcrumb items={[{ label: 'About' }]} />
                </header>

                <div className="md:h-[400px] lg:h-[500px] flex flex-row md:items-center justify-between">
                    <div className="flex flex-col gap-4 md:max-w-[400px] lg:max-w-lg">
                        <h2 className='font-semibold text-2xl md:text-3xl'>Our Story</h2>
                        <p className='font-normal text-sm leading-5 ms-1'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p className='font-normal text-sm leading-5 ms-1'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>

                    <div className="hidden md:block bg-[#EB7EA8] md:w-96 lg:w-lg xl:w-2xl md:h-[400px] lg:h-[500px] rounded-s absolute end-0" />
                </div>

                <div className="flex flex-row flex-wrap gap-3 md:gap-5 lg:gap-10 mt-10">
                    <div className="flex-1 flex flex-col items-center justify-center gap-4 min-w-28 h-36 md:h-52 border border-borderColor rounded hover:bg-buttonColor hover:border-buttonColor group transition-all ease-in-out duration-300">
                        <div className="w-16 h-16 border-8 border-border2Color rounded-full bg-textColor flex items-center justify-center text-white group-hover:bg-white group-hover:text-textColor transition-all ease-in-out duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-store-icon lucide-store"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" /><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" /><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" /></svg>
                        </div>
                        <h3 className='font-bold text-2xl group-hover:text-white transition-all ease-in-out duration-300'>10.5k</h3>
                        <p className='hidden md:block group-hover:text-white text-center transition-all ease-in-out duration-300'>Sallers active our site</p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-4 min-w-28 h-36 md:h-52 border border-borderColor rounded hover:bg-buttonColor hover:border-buttonColor group transition-all ease-in-out duration-300">
                        <div className="w-16 h-16 border-8 border-border2Color rounded-full bg-textColor flex items-center justify-center text-white group-hover:bg-white group-hover:text-textColor transition-all ease-in-out duration-300">
                            <svg aria-hidden='true' xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"><circle cx={12} cy={12} r={10} /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
                        </div>
                        <h3 className='font-bold text-2xl group-hover:text-white transition-all ease-in-out duration-300'>33k</h3>
                        <p className='hidden md:block group-hover:text-white text-center transition-all ease-in-out duration-300'>Mopnthly Produduct Sale</p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-4 min-w-28 h-36 md:h-52 border border-borderColor rounded hover:bg-buttonColor hover:border-buttonColor group transition-all ease-in-out duration-300">
                        <div className="w-16 h-16 border-8 border-border2Color rounded-full bg-textColor flex items-center justify-center text-white group-hover:bg-white group-hover:text-textColor transition-all ease-in-out duration-300">
                            <svg width={32} height={32} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.667 11.6667V8.33339C11.667 7.36818 11.9464 6.42362 12.4714 5.6137C12.9965 4.80379 13.7447 4.16315 14.6258 3.76912C15.5069 3.37509 16.4832 3.24451 17.4369 3.39313C18.3906 3.54176 19.2809 3.96325 20.0003 4.60672C20.7197 3.96325 21.61 3.54176 22.5637 3.39313C23.5174 3.24451 24.4937 3.37509 25.3749 3.76912C26.256 4.16315 27.0042 4.80379 27.5292 5.6137C28.0543 6.42362 28.3336 7.36818 28.3337 8.33339V11.6667H30.8337C31.4967 11.6667 32.1326 11.9301 32.6014 12.399C33.0703 12.8678 33.3337 13.5037 33.3337 14.1667V30.8417C33.3337 32.3866 32.72 33.8682 31.6276 34.9606C30.5352 36.053 29.0535 36.6667 27.5087 36.6667H13.3337C11.5655 36.6667 9.86986 35.9643 8.61961 34.7141C7.36937 33.4639 6.66699 31.7682 6.66699 30.0001V14.1667C6.66699 13.5037 6.93038 12.8678 7.39922 12.399C7.86807 11.9301 8.50395 11.6667 9.16699 11.6667H11.667ZM22.7253 34.1667C22.0454 33.1914 21.6818 32.0306 21.6837 30.8417V14.1667H9.16699V30.0001C9.16699 30.5472 9.27477 31.089 9.48416 31.5946C9.69356 32.1001 10.0005 32.5594 10.3874 32.9463C10.7743 33.3332 11.2336 33.6402 11.7391 33.8496C12.2447 34.0589 12.7865 34.1667 13.3337 34.1667H22.7253ZM19.167 11.6667V8.33339C19.167 7.67035 18.9036 7.03446 18.4348 6.56562C17.9659 6.09678 17.33 5.83339 16.667 5.83339C16.004 5.83339 15.3681 6.09678 14.8992 6.56562C14.4304 7.03446 14.167 7.67035 14.167 8.33339V11.6667H19.167ZM21.667 11.6667H25.8337V8.33339C25.8337 7.81878 25.6749 7.31669 25.379 6.89566C25.0832 6.47463 24.6645 6.15517 24.1803 5.98089C23.6961 5.8066 23.1699 5.78599 22.6736 5.92186C22.1773 6.05773 21.7349 6.34346 21.407 6.74005C21.5753 7.24005 21.667 7.77672 21.667 8.33339V11.6667ZM24.1837 30.8417C24.1837 31.7236 24.534 32.5693 25.1575 33.1929C25.7811 33.8164 26.6268 34.1667 27.5087 34.1667C28.3905 34.1667 29.2362 33.8164 29.8598 33.1929C30.4833 32.5693 30.8337 31.7236 30.8337 30.8417V14.1667H24.1837V30.8417Z" /></svg>
                        </div>
                        <h3 className='font-bold text-2xl group-hover:text-white transition-all ease-in-out duration-300'>45.5k</h3>
                        <p className='hidden md:block group-hover:text-white text-center transition-all ease-in-out duration-300'>Customer active in our site</p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-4 min-w-28 h-36 md:h-52 border border-borderColor rounded hover:bg-buttonColor hover:border-buttonColor group transition-all ease-in-out duration-300">
                        <div className="w-16 h-16 border-8 border-border2Color rounded-full bg-textColor flex items-center justify-center text-white group-hover:bg-white group-hover:text-textColor transition-all ease-in-out duration-300">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4277 29.7731H20.9277C21.5521 29.7731 22.1512 29.5251 22.5928 29.0836C23.0343 28.6421 23.2821 28.0429 23.2822 27.4186C23.2822 26.7942 23.0343 26.1951 22.5928 25.7535C22.1512 25.312 21.5522 25.0641 20.9277 25.0641H20.4277V29.7731ZM19.0732 19.5006C18.4488 19.5006 17.8497 19.7485 17.4082 20.1901C16.9668 20.6316 16.7188 21.2308 16.7188 21.8551C16.7189 22.4793 16.9669 23.0777 17.4082 23.5192C17.8497 23.9607 18.4488 24.2096 19.0732 24.2096H19.5732V19.5006H19.0732ZM19.5732 25.0641H19.0732C18.2222 25.0641 17.4055 24.7255 16.8037 24.1237C16.2022 23.522 15.8644 22.7059 15.8643 21.8551C15.8643 21.0041 16.202 20.1874 16.8037 19.5856C17.4055 18.9838 18.2222 18.6461 19.0732 18.6461H19.5732V17.7184H20.4277V18.6461H20.9277C21.5915 18.6461 22.2393 18.8518 22.7812 19.235C23.2552 19.5702 23.6282 20.0265 23.8623 20.5543L23.9541 20.7858C23.9726 20.8384 23.9805 20.8941 23.9775 20.9498C23.9746 21.0059 23.9607 21.0613 23.9365 21.1119C23.9123 21.1625 23.8786 21.2083 23.8369 21.2457C23.7952 21.2832 23.7462 21.312 23.6934 21.3307C23.6405 21.3494 23.5843 21.3571 23.5283 21.3541C23.4724 21.3511 23.4177 21.3372 23.3672 21.3131C23.265 21.2643 23.1862 21.1767 23.1484 21.0699C22.9861 20.6109 22.6847 20.2133 22.2871 19.9323C21.8895 19.6512 21.4147 19.5005 20.9277 19.5006H20.4277V24.2096H20.9277C21.7788 24.2096 22.5955 24.5472 23.1973 25.149C23.799 25.7509 24.1367 26.5675 24.1367 27.4186C24.1366 28.2694 23.7988 29.0854 23.1973 29.6871C22.5955 30.2889 21.7788 30.6276 20.9277 30.6276H20.4277V31.5543H19.5732V30.6276H19.0732C18.4095 30.6275 17.7617 30.4219 17.2197 30.0387C16.6779 29.6556 16.2682 29.1135 16.0469 28.4879L16.042 28.4742C16.0215 28.421 16.0119 28.3642 16.0137 28.3073C16.0155 28.2502 16.0289 28.194 16.0527 28.1422C16.0766 28.0903 16.1111 28.044 16.1533 28.0055C16.1955 27.967 16.245 27.9366 16.2988 27.9176C16.3526 27.8987 16.4099 27.8907 16.4668 27.8942C16.5237 27.8976 16.5797 27.9128 16.6309 27.9381C16.6819 27.9634 16.7275 27.9985 16.7646 28.0416C16.8019 28.0849 16.8302 28.1357 16.8477 28.1901L16.8496 28.1969L16.8525 28.2037C17.177 29.1184 18.0483 29.773 19.0732 29.7731H19.5732V25.0641Z" fill="currentColor" stroke="currentColor" /><path d="M20.0361 3.80945C23.9382 3.80945 27.4978 5.04277 29.7168 6.12L29.8447 6.1825C30.284 6.39987 30.6638 6.60847 30.9766 6.7948L27.8457 11.3729L27.6143 11.7108L27.9014 12.0048C29.8396 13.9864 31.6698 16.5169 32.9805 19.1923C34.2934 21.8724 35.0683 24.6627 34.9414 27.1737C34.8155 29.6638 33.8056 31.8866 31.5166 33.5038C29.2054 35.1366 25.538 36.1884 20.0361 36.1884C14.5332 36.1883 10.8546 35.1548 8.52832 33.5438C6.22488 31.9487 5.19876 29.7545 5.05762 27.286C4.9153 24.7955 5.67566 22.0153 6.9834 19.3202C8.28876 16.63 10.1227 14.0594 12.0811 11.9989L12.3594 11.7069L12.1328 11.3739L9.02246 6.79675C9.17967 6.70416 9.35379 6.60749 9.54297 6.50671L9.54492 6.50574C9.7354 6.40331 9.94076 6.29779 10.1611 6.19031L10.2197 6.16199C12.4563 5.07592 16.0841 3.8095 20.0361 3.80945ZM26.957 12.6981C22.6083 14.3798 17.3703 14.38 13.0215 12.7001L12.8418 13.1659L12.4756 12.826C10.6577 14.7855 8.96568 17.1901 7.75098 19.6932C6.55983 22.149 5.86865 24.6147 5.89551 26.8036L5.91016 27.2372C6.0376 29.4718 6.94935 31.4116 9.0127 32.8417C11.1392 34.3136 14.6197 35.3338 20.0352 35.3339C25.4465 35.3339 28.9126 34.2956 31.0215 32.8055C33.0713 31.3568 33.9725 29.3909 34.0869 27.1298C34.2038 24.8131 33.4877 22.1697 32.2119 19.5673L32.2109 19.5653L31.9766 19.1044C30.7861 16.8113 29.2793 14.6958 27.5 12.8202L27.2695 12.577L26.957 12.6981ZM28.7627 7.08093C26.4933 7.24436 23.8596 7.72976 21.2637 8.4198L20.1553 8.72742C18.2952 9.26476 16.2165 9.22705 14.2295 8.90027L13.834 8.83093C13.3047 8.7328 12.7788 8.6166 12.2578 8.48132L10.9727 8.14734L11.7188 9.24597L13.499 11.8671L13.5908 12.0028L13.7451 12.0575C17.6692 13.4545 22.2998 13.4545 26.2246 12.0594L26.0566 11.5878L26.4697 11.87L29.2119 7.86218L29.7969 7.00671L28.7627 7.08093ZM20.0352 4.66394C16.7535 4.66399 13.7063 5.5779 11.5801 6.48035L11.7754 6.94031L11.6328 7.4198C12.3895 7.64493 13.1819 7.84098 13.9873 7.99011H13.9883C16.0232 8.3649 18.1082 8.43009 19.917 7.90613L19.918 7.90515C21.8862 7.33179 23.8882 6.88147 25.9121 6.55554L25.9766 5.58289C24.2351 5.05858 22.1902 4.66394 20.0352 4.66394Z" fill="currentColor" stroke="currentColor" /></svg>
                        </div>
                        <h3 className='font-bold text-2xl group-hover:text-white transition-all ease-in-out duration-300'>25k</h3>
                        <p className='hidden md:block group-hover:text-white text-center transition-all ease-in-out duration-300'>Anual gross sale in our site</p>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap items-center justify-center md:justify-between gap-5">
                    <div className='w-3xs'>
                        <div className="bg-primaryBackground rounded flex items-center justify-center w-full pt-5">
                            <div className=" w-4/5 h-64 relative">
                                <Image src="/image/personImg2.webp" alt='person image' fill loading='lazy' />
                            </div>
                        </div>
                        <div className="mt-2">
                            <h2 className='text-xl md:text-2xl font-medium'>Tom Cruise</h2>
                            <p className='text-base'>Founder & Chairman</p>
                            <div className="flex flex-row gap-3 text-base font-normal mt-4">
                                <Image src="/icon/Icon-Twitter.svg" alt='Icon Twitter' width={22} height={22} loading='lazy' />
                                <Image src="/icon/icon-instagram.svg" alt='icon instagram' width={20} height={20} loading='lazy' />
                                <Image src="/icon/Icon-Linkedin.svg" alt='Icon Linkedin' width={22} height={22} loading='lazy' />
                            </div>
                        </div>
                    </div>

                    <div className='w-3xs'>
                        <div className="bg-primaryBackground rounded flex items-center justify-center w-full pt-5">
                            <div className=" w-4/5 h-64 relative">
                                <Image src="/image/personImg.webp" alt='person image' fill loading='lazy' />
                            </div>
                        </div>
                        <div className="mt-2">
                            <h2 className='text-xl md:text-2xl font-medium'>Tom Cruise</h2>
                            <p className='text-base'>Managing Director</p>
                            <div className="flex flex-row gap-3 text-base font-normal mt-4">
                                <Image src="/icon/Icon-Twitter.svg" alt='Icon Twitter' width={22} height={22} loading='lazy' />
                                <Image src="/icon/icon-instagram.svg" alt='icon instagram' width={20} height={20} loading='lazy' />
                                <Image src="/icon/Icon-Linkedin.svg" alt='Icon Linkedin' width={22} height={22} loading='lazy' />
                            </div>
                        </div>
                    </div>

                    <div className='w-3xs'>
                        <div className="bg-primaryBackground rounded flex items-center justify-center w-full pt-5">
                            <div className=" w-4/5 h-64 relative">
                                <Image src="/image/personImg2.webp" alt='person image' fill loading='lazy' />
                            </div>
                        </div>
                        <div className="mt-2">
                            <h2 className='text-xl md:text-2xl font-medium'>Will Smith</h2>
                            <p className='text-base'>Product Designer</p>
                            <div className="flex flex-row gap-3 text-base font-normal mt-4">
                                <Image src="/icon/Icon-Twitter.svg" alt='Icon Twitter' width={22} height={22} loading='lazy' />
                                <Image src="/icon/icon-instagram.svg" alt='icon instagram' width={20} height={20} loading='lazy' />
                                <Image src="/icon/Icon-Linkedin.svg" alt='Icon Linkedin' width={22} height={22} loading='lazy' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-12">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-textColor border-8 border-border2Color flex items-center justify-center">
                            <Image src="/footer/deliveryIcon.svg" alt="delivery Icon" width={34} height={34} loading="lazy" />
                        </div>
                        <h3 className="font-semibold text-xl mt-4">FREE AND FAST DELIVERY</h3>
                        <p>Free delivery for all orders over $140</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-textColor border-8 border-border2Color flex items-center justify-center">
                            <Image src="/footer/customerService.svg" alt="customer Service" width={34} height={34} loading="lazy" />
                        </div>
                        <h3 className="font-semibold text-xl mt-4">24/7 CUSTOMER SERVICE</h3>
                        <p>Friendly 24/7 customer support</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-textColor border-8 border-border2Color flex items-center justify-center">
                            <Image src="/footer/secureIcon.svg" alt="secure Icon" width={34} height={34} loading="lazy" />
                        </div>
                        <h3 className="font-semibold text-xl mt-4">MONEY BACK GUARANTEE</h3>
                        <p>We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
        </section>
    )
};