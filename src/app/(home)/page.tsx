import Sidebar from "@/src/components/Sidebar/Sidebar";
import Image from "next/image";
import CarouselComponent from "./CarouselComponent";
import ProductCard from "@/src/components/ProductCard/ProductCard";
import Countdown from "./Countdown";
import CategoriesCarousel from "./CategoriesCarousel";

export default function Home() {
    return (
        <main className="xl:max-w-7xl lg:max-w-5xl m-auto px-4 flex flex-col gap-10">
            <section aria-label="top screen" className="flex items-end relative">
                <Sidebar aria-label="Product Categories Navigation" />

                <div className="flex-1 h-full md:ps-7 pe-1 overflow-hidden">
                    <CarouselComponent />
                </div>
            </section>

            <section className="flex flex-col gap-4 mt-10 pb-10 border-b border-borderColor">
                <header className="flex flex-row items-center gap-2">
                    <span className="bg-primaryColor w-5 h-10 rounded" />
                    <span className="text-primaryColor font-semibold text-base">Today’s</span>
                </header>

                <div className="flex flex-col xs:flex-row xs:items-end gap-2 xs:gap-12 mb-2 md:mb-6">
                    <h1 className="text-3xl font-bold">Flash Sales</h1>
                    <div className="">
                        <Countdown />
                    </div>
                </div>
                <ProductCard />

                <button type="button" className="bg-primaryColor hover:bg-buttonColor text-white w-3xs h-14 rounded m-auto mt-10 cursor-pointer transition-all ease-in-out duration-300">
                    View All Products
                </button>
            </section>

            <section className="flex flex-col gap-4 mt-10 pb-10 border-b border-borderColor overflow-hidden">
                <header className="flex flex-row items-center gap-2">
                    <span className="bg-primaryColor w-5 h-10 rounded" />
                    <span className="text-primaryColor font-semibold text-base">Categories</span>
                </header>
                <div className="flex flex-col xs:flex-row xs:items-end gap-2 xs:gap-10 mb-4">
                    <h1 className="text-3xl font-bold">Browse By Category</h1>
                </div>
                <CategoriesCarousel />
            </section>

            <section className="flex flex-col-reverse md:flex-row items-center justify-around gap-4 mt-10 p-10 bg-textColor overflow-hidden mb-10">
                <div className="flex flex-col gap-5 md:gap-10 items-start text-white">
                    <h1 className="text-successButton font-semibold text-base">Categories</h1>
                    <p className="text-3xl md:text-5xl font-semibold max-w-64 md:max-w-[420px]">Enhance Your Music Experience</p>
                    <div className="flex flex-row gap-4 md:gap-7 text-textColor font-medium text-sm">
                        <div className="bg-white w-16 h-16 rounded-full flex flex-col items-center justify-center">
                            <span className="font-bold">05</span>
                            <span>Days</span>
                        </div>
                        <div className="bg-white w-16 h-16 rounded-full flex flex-col items-center justify-center">
                            <span className="font-bold">23</span>
                            <span>Hours</span>
                        </div>
                        <div className="bg-white w-16 h-16 rounded-full flex flex-col items-center justify-center">
                            <span className="font-bold">59</span>
                            <span>Minutes</span>
                        </div>
                        <div className="bg-white w-16 h-16 rounded-full flex flex-col items-center justify-center">
                            <span className="font-bold">35</span>
                            <span>Seconds</span>
                        </div>
                    </div>

                    <button type="button" className="flex items-center justify-center w-44 h-14 rounded bg-[#078639] cursor-pointer">
                        Buy Now!
                    </button>
                </div>
                <div className="flex items-center justify-center relative">
                    <Image src="/image/Speaker.webp" alt="Speaker" width={600} height={420} loading="lazy" className="static z-20" />
                    <div className="absolute z-10 bg-transparent md:bg-backGrounblur md:blur-[80px] lg:blur-[130px] md:w-80 md:h-80 lg:w-[480px] lg:h-[480px] rounded-full border border-red-500" />
                </div>
            </section>

            <section aria-labelledby="new-arrivals" className="flex flex-col gap-4 mt-10 pb-10">
                <header className="flex flex-row items-center gap-2">
                    <span aria-hidden="true" className="bg-primaryColor w-5 h-10 rounded" />
                    <span className="text-primaryColor font-semibold text-base">Featured</span>
                </header>
                <div className="flex flex-col xs:flex-row xs:items-end gap-2 xs:gap-10 mb-4">
                    <h2 className="text-3xl font-bold">New Arrival</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 gap-5 md:h-[500px] lg:h-[600px]">
                    <div className="col-span-2 row-span-4 bg-textColor">
                        <div className="w-full h-60 md:h-full p-4 md:p-6 lg:p-10 flex items-end relative">
                            <Image src="/image/playStation.webp" alt="Sony PlayStation 5 gaming console" width={200} height={200} loading="lazy" aria-hidden="true" className="absolute bottom-0 right-0 z-10 md:hidden" />
                            <Image src="/image/playStation.webp" alt="Sony PlayStation 5 gaming console" width={500} height={500} loading="lazy" aria-hidden="true" className="absolute bottom-0 z-10 hidden md:block" />
                            <div className="text-white w-56 md:w-64 static z-20">
                                <h3 className="font-semibold text-2xl">PlayStation 5</h3>
                                <p className="my-2 font-normal">Black and White version of the PS5 coming out on sale.</p>
                                <button type="button" className="w-fit relative px-0.5 py-1 after:absolute after:-bottom-0.5 after:start-0 after:end-0 after:top-full hover:after:top-0 hover:after:bg-white/30 after:bg-white after:rounded flex items-center gap-1 text-xl cursor-pointer pointer-events-auto after:transition-all after:ease-in-out after:duration-300">
                                    <span className="">
                                        Shop Now
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-1 lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 row-span-2 bg-textColor">
                        <div className="w-full h-full p-4 md:p-6 lg:p-10 flex items-end relative">
                            {/* <Image src="/image/playStation.webp" alt="playStation" width={500} height={500} loading="lazy" className="absolute bottom-0 z-10" /> */}
                            <div className="text-white w-64 static z-20">
                                <h3 className="font-semibold text-2xl">Women’s Collections</h3>
                                <p className="my-2 font-normal">Featured woman collections that give you another vibe.</p>
                                <button type="button" className="w-fit relative px-0.5 py-1 after:absolute after:-bottom-0.5 after:start-0 after:end-0 after:top-full hover:after:top-0 hover:after:bg-white/30 after:bg-white after:rounded flex items-center gap-1 text-xl cursor-pointer pointer-events-auto after:transition-all after:ease-in-out after:duration-300">
                                    <span className="">
                                        Shop Now
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-1 lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-2 bg-textColor">
                        <div className="w-full h-full p-4 md:p-6 lg:p-10 flex items-end relative">
                            <Image src="/image/speakers3.webp" alt="speakers3" width={100} height={100} loading="lazy" aria-hidden="true" className="absolute top-1/2 -translate-y-1/2 right-0 z-10 md:hidden" />
                            <Image src="/image/speakers3.webp" alt="speakers3" width={200} height={200} loading="lazy" aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-1/2 z-10 hidden md:block" />
                            <div className="text-white w-64 static z-20">
                                <h3 className="font-semibold text-2xl">Speakers</h3>
                                <p className="my-2 font-normal">Amazon wireless speakers</p>
                                <button type="button" className="w-fit relative px-0.5 py-1 after:absolute after:-bottom-0.5 after:start-0 after:end-0 after:top-full hover:after:top-0 hover:after:bg-white/30 after:bg-white after:rounded flex items-center gap-1 text-xl cursor-pointer pointer-events-auto after:transition-all after:ease-in-out after:duration-300">
                                    <span className="">
                                        Shop Now
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-1 lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-2 bg-textColor">
                        <div className="w-full h-full p-4 md:p-6 lg:p-10 flex items-end relative">
                            <Image src="/image/perfume.webp" alt="perfume" width={100} height={100} loading="lazy" aria-hidden="true" className="absolute top-1/2 right-0 -translate-y-1/2 z-10 md:hidden" />
                            <Image src="/image/perfume.webp" alt="perfume" width={200} height={200} loading="lazy" aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-1/2 z-10 hidden md:block" />
                            <div className="text-white w-64 static z-20">
                                <h3 className="font-semibold text-2xl">Speakers</h3>
                                <p className="my-2 font-normal">Amazon wireless speakers</p>
                                <button type="button" className="w-fit relative px-0.5 py-1 after:absolute after:-bottom-0.5 after:start-0 after:end-0 after:top-full hover:after:top-0 hover:after:bg-white/30 after:bg-white after:rounded flex items-center gap-1 text-xl cursor-pointer pointer-events-auto after:transition-all after:ease-in-out after:duration-300">
                                    <span className="">
                                        Shop Now
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-1 lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}