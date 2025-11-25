import Sidebar from "@/src/components/Sidebar/Sidebar";
import Image from "next/image";
import CarouselComponent from "./CarouselComponent";
import ProductCard from "@/src/components/ProductCard/ProductCard";

export default function Home() {
    return (
        <main className="xl:max-w-7xl lg:max-w-5xl m-auto px-4 flex flex-col gap-10">
            <section aria-label="top screen" className="flex items-end relative">
                <Sidebar aria-label="Product Categories Navigation" />

                <div className="flex-1 h-full md:ps-7 pe-1 overflow-hidden">
                    <CarouselComponent />
                </div>
            </section>

            <section className="flex flex-col gap-4 mt-10">
                <header className="flex flex-row items-center gap-2">
                    <span className="bg-primaryColor w-5 h-10 rounded"/>
                    <span className="text-primaryColor font-semibold text-base">Today’s</span>
                </header>

                <div className="flex flex-row items-center">
                    <h1 className="text-4xl font-semibold">Flash Sales</h1>
                    <div className=""></div>
                </div>
                <ProductCard />
            </section>
        </main>
    );
}