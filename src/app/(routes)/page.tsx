import Sidebar from "@/src/components/layout/Sidebar/Sidebar";
import Image from "next/image";

export default function Home() {
    return (
        <main className="">
            <section aria-label="top screen" className="xl:max-w-7xl lg:max-w-5xl m-auto flex items-center justify-between px-4 ">
                <nav aria-label="Product Categories Navigation" className=" max-w-96">
                    <Sidebar/>
                </nav>
            </section> 
        </main>
    );
}