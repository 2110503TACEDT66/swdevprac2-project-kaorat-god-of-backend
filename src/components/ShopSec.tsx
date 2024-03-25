import Link from "next/link";
import Card from "./CardM";

export default function ShopSec() {

    return (
        <div className="ml-20 mr-20 mb-20">
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

            <div className="flex justify-start items-center flex-row flex-wrap gap-8 mt-5 mb-10 bg-transparent border border-transparent transition-colors duration-200">
                <div className="w-1/5">
                    <Card cardName="Poseidon" imgSrc="/img/card1.jpg"/>
                </div>
                
                <div className="w-1/5">
                    <Card cardName="La de France" imgSrc="/img/card2.jpg"/>
                </div>

                <div className="w-1/5">
                    <Card cardName="Colonse" imgSrc="/img/card3.jpg"/>
                </div>

                <div className="w-1/5">
                    <Card cardName="Amsterdam" imgSrc="/img/card4.jpg"/>
                </div>
            </div>
        </div>
    );
}