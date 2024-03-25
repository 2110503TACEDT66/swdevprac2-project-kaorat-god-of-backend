import Link from "next/link";
import Card from "./CardM";

export default function MassageSec() {
    return (
        <div className="ml-20 mr-20">
            <div className="flex flex-wrap flex-row">
                <h1 className="text-7xl	 mr-5 font-bold	font-serif">
                    <span>HAND</span>
                </h1>
                <div className="flex items-start justify-center flex-col text-base md:text-xl">
                    <div className="mt-2 mb-1">Let me introduce our professional massager who will make your day.</div>
                    <Link href={"/hospital"}>
                        <div className="hover:underline hover:underline-offset-2 text-amber-600	 font-sans">see more &rarr;</div>
                    </Link> 
                </div>
            </div>  

            <div className="flex justify-start items-center flex-row flex-wrap gap-8 mt-5 mb-10 bg-transparent border border-transparent transition-colors duration-200 w">
                <div className="w-1/5">
                    <Card cardName="Chulalongkorn Hospital" imgSrc="/img/card1.jpg"/>
                </div>
                
                <div className="w-1/5">
                    <Card cardName="Rajavithi Hospital" imgSrc="https://drive.google.com/file/d/1sgoYCFEn4A54XJKhTObxjmIjdEbV62BK/view?usp=sharing"/>
                </div>

                <div className="w-1/5">
                    <Card cardName="Thammasat University Hospital" imgSrc="/img/card3.jpg"/>
                </div>
            </div>
        </div>
    );
}