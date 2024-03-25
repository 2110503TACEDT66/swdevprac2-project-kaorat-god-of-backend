import Link from "next/link";
import Card from "./Card";
import { MassageshopJson, MassageshopItem } from "../../interface";

export default function massageshopCatalog({ massageshopsJson }: { massageshopsJson: MassageshopJson }) {
    
    const massageshopsJsonReady = massageshopsJson

    return (
        <div className='flex flex-row flex-wrap justify-around content-around m-5'>
            {
                massageshopsJsonReady.data.map((massageshopItem: MassageshopItem) => (
                    <Link href={`/massageshop/${massageshopItem.id}`} className='w-1/5'>
                        <Card massageshopName={massageshopItem.name} imgSrc={massageshopItem.picture}/>
                    </Link>
                    ))
            }
        </div>
    )
}