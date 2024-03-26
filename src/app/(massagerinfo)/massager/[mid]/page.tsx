import Image from "next/image"
import getMassager from "@/libs/getMassager"

export default async function MassagerDetailPage({ params }: { params: { mid: string } }) {
    const massagerDetail = await getMassager(params.mid)
    
    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={ massagerDetail.data.picture } 
                    alt="massager image" 
                    width={0} height={0} sizes="100vw" 
                    className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">
                    <div>{`Name: ${massagerDetail.data.name}`}</div>
                    <div>{`Address: ${massagerDetail.data.age}`}</div>
                    <div>{`Tel: ${massagerDetail.data.tel}`}</div>
                </div>
            </div>
        </main>
    )
}