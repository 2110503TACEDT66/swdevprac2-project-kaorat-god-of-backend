import Image from "next/image"
import getMassageshop from "@/libs/getMassageshop"

export default async function MassagerDetailPage({ params }: { params: { hid: string } }) {
    
    const massageshopDetail = await getMassageshop(params.hid)
    
    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={ massageshopDetail.data.picture } 
                    alt="massageshop image" 
                    width={0} height={0} sizes="100vw" 
                    className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">
                    <div>{`Name: ${massageshopDetail.data.name}`}</div>
                    <div>{`Address: ${massageshopDetail.data.address}`}</div>
                    <div>{`Tel: ${massageshopDetail.data.tel}`}</div>
                </div>
            </div>
        </main>
    )
}