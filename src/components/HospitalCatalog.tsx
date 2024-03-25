import Link from "next/link";
import Card from "./Card";
import { HospitalJson, HospitalItem } from "../../interface";

export default function HospitalCatalog({ hospitalsJson }: { hospitalsJson: HospitalJson }) {
    
    const hospitalsJsonReady = hospitalsJson

    return (
        <div className='flex flex-row flex-wrap justify-around content-around m-5'>
            {
                hospitalsJsonReady.data.map((hospitalItem: HospitalItem) => (
                    <Link href={`/hospital/${hospitalItem.id}`} className='w-1/5'>
                        <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
                    </Link>
                    ))
            }
        </div>
    )
}