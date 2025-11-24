import Sidebar from "@/src/components/Sidebar/Sidebar";
import Image from "next/image";
import CarouselComponent from "./CarouselComponent";

export default function Home() {
    return (
        <main className="">
            <section aria-label="top screen" className="xl:max-w-7xl lg:max-w-5xl m-auto flex items-center px-4 relative">
                <Sidebar aria-label="Product Categories Navigation"/>

                <div className="flex-1 h-full md:ps-6 overflow-hidden">
                    <CarouselComponent/>
                </div>
            </section> 
        </main>
    );
}