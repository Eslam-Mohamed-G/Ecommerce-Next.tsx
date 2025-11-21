import Sidebar from "@/src/components/Sidebar/Sidebar";
import Image from "next/image";
import CarouselComponent from "./CarouselComponent";

export default function Home() {
    return (
        <main className="">
            <section aria-label="top screen" className="xl:max-w-7xl lg:max-w-5xl m-auto flex items-center px-4">
                <nav aria-label="Product Categories Navigation" className=" max-w-96">
                    <Sidebar/>
                </nav>

                <div className="border flex-1 h-full mt-6 md:ps-6 overflow-hidden">
                    <CarouselComponent/>
                </div>
            </section> 
        </main>
    );
}