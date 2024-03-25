import Link from "next/link";
import Card from "./Card";
import { MassagerJson, MassagerItem } from "../../interface";

export default function massagerCatalog({ massagersJson }: { massagersJson: MassagerJson }) {
    
    const massagersJsonReady = massagersJson

    return (
        <div className='flex flex-row flex-wrap justify-around content-around m-5'>
            {
                massagersJsonReady.data.map((massagerItem: MassagerItem) => (
                    <Link href={`/massager/${massagerItem.id}`} className='w-1/5'>
                        <Card massageshopName={massagerItem.name} imgSrc={massagerItem.picture}/>
                    </Link>
                    ))
            }
        </div>
    )
}