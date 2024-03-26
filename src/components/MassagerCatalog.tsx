import Link from "next/link";
import Card from "./CardM";
import { MassagerJson, MassagerItem } from "../../interface";

export default function massagerCatalog({ massagersJson }: { massagersJson: MassagerJson }) {
    
    const massagersJsonReady = massagersJson

    return (
        <div className='flex justify-start items-center flex-row flex-wrap gap-8 mt-5 mb-10 bg-transparent border border-transparent transition-colors duration-200'>
            {
                massagersJsonReady.data.map((massagerItem: MassagerItem) => (
                    <div className='w-1/5'>
                        <Card cardName={massagerItem.name} imgSrc={massagerItem.picture} nextTo={`/massager/${massagerItem._id}`}/>
                    </div>
                    ))
            }
        </div>
    )
}