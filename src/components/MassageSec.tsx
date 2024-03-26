import Link from "next/link";

export default function MassageSec() {
    return (
        <div className="ml-20 mr-20">
        <div className="flex flex-wrap flex-row">
            <h1 className="text-7xl	 mr-5 font-bold	font-serif">
                <span>HAND</span>
            </h1>
            <div className="flex items-start justify-center flex-col text-base md:text-xl font-sans">
                <div className="mt-2 mb-1 font-light">Let me introduce our professional massager who will make your day.</div>
                <Link href={"/massager"}>
                    <div className="hover:underline hover:underline-offset-2 text-amber-600	 font-sans">see more &rarr;</div>
                </Link> 
            </div>
        </div>  


        </div>
    );
}