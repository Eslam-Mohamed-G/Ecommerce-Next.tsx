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
                    <Image src="/image/Speaker.webp" alt="Speaker" width={600} height={420} loading="lazy" className="static z-20"/>
                    <div className="absolute z-10 bg-transparent md:bg-backGrounblur md:blur-[80px] lg:blur-[130px] md:w-80 md:h-80 lg:w-[480px] lg:h-[480px] rounded-full border border-red-500"/>
                </div>
            </section>
        </main>
    );
}