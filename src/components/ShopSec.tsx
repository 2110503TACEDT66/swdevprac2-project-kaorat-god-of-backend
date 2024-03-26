import Link from "next/link";

export default function ShopSec() {

    return (
        <div className="ml-20 mr-20">
            <div className="flex flex-wrap flex-row">
                <h1 className="text-7xl	 mr-5 font-bold	font-serif">
                    <span>SHOP</span>
                </h1>
                <div className="flex items-start justify-center flex-col text-base md:text-xl font-sans">
                    <div className="mt-2 mb-1 font-light">Let me introduce our massage shop</div>
                    <Link href={"/massageshop"}>
                        <div className="hover:underline hover:underline-offset-2 text-amber-600	 font-sans">see more &rarr;</div>
                    </Link> 
                </div>
            </div>  
        </div>
    );
}