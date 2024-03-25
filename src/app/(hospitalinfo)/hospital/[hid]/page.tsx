import Image from "next/image"
import getHospital from "@/libs/getHospital"
import Link from "next/link"

export default async function HospitalDetailPage({ params }: { params: { hid: string } }) {
    
    const hospitalDetail = await getHospital(params.hid)
    
    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={ hospitalDetail.data.picture } 
                    alt="Hospital image" 
                    width={0} height={0} sizes="100vw" 
                    className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">
                    <div>{`Name: ${hospitalDetail.data.name}`}</div>
                    <div>{`Address: ${hospitalDetail.data.address}`}</div>
                    <div>{`Tel: ${hospitalDetail.data.tel}`}</div>
                </div>
            </div>
        </main>
    )
}