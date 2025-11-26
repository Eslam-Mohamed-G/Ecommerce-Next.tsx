import Sidebar from "@/src/components/Sidebar/Sidebar";
import Image from "next/image";
import CarouselComponent from "./CarouselComponent";
import ProductCard from "@/src/components/ProductCard/ProductCard";
import Countdown from "./Countdown";

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

            <section className="flex flex-col gap-4 mt-10 pb-10 border-b border-borderColor">
                <header className="flex flex-row items-center gap-2">
                    <span className="bg-primaryColor w-5 h-10 rounded" />
                    <span className="text-primaryColor font-semibold text-base">Categories</span>
                </header>
                <div className="flex flex-col xs:flex-row xs:items-end gap-2 xs:gap-10 mb-2 md:mb-6">
                    <h1 className="text-3xl font-bold">Browse By Category</h1>
                </div>
            </section>
        </main>
    );
}