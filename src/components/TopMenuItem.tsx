import Link from "next/link";
import styles from "./topmenu.module.css"
import { link } from "fs/promises";

export default function TopMenuItem( {title , pageRef} : {title:string, pageRef: string} ) {
    return (
  
        <Link href={pageRef} className="mt-auto mb-auto text-center font-sans text-gray-600 text-base hover:text-lg hover:font-bold transition-all	">
            {title}
        </Link>
    );
}