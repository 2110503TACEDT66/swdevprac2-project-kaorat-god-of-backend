import Card from "./CardM";
import { MassageshopJson, MassageshopItem } from "../../interface";

export default function massageshopCatalog({ massageshopsJson }: { massageshopsJson: MassageshopJson }) {
    
    const massageshopsJsonReady = massageshopsJson

    return (
        <div className='flex justify-start items-center flex-row flex-wrap gap-8 mt-5 mb-10 bg-transparent border border-transparent transition-colors duration-200'>
            {
                massageshopsJsonReady.data.map((massageshopItem: MassageshopItem) => (
                    <div className='w-1/5'>
                        <Card cardName={massageshopItem.name} imgSrc={massageshopItem.picture} nextTo={`/massageshop/${massageshopItem.id}`} />
                    </div>
                    ))
            }
        </div>
    )
}