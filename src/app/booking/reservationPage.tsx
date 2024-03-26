"use client";

import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
import DateReserve from "@/components/DateReserve";
import { MassageshopJson , MassageshopItem} from "../../../interface";
import addBooking from "@/libs/addBooking";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";

export default function ReservationPage({
    shops,
    token,
    uid
}:{
    shops: MassageshopJson,
    token: string,
    uid: string
}){

    const [ pickupDate, setPickupDate ] = useState<Dayjs>()
    const [ pickupMassageshop, setPickupMassageshop ] = useState<string>("")
    
    console.log(token,uid)
    return (

        <main  className="w-[100%] flex flex-col items-center space-y-4 mt-5 m-5 p-5">       
            <div className="text-xl font-md">Massage Appointment</div>

            <div className="text-md text-left text-gray-600">Choose Massageshop</div>
            <Select required variant="standard" id="hospital" className="h-[2em] w-[200px]" onChange={ (e) => { setPickupMassageshop(e.target.value as string) } }>
                
                {
                    shops.data.map((shop : MassageshopItem)=>(
                        <MenuItem value={shop._id}>{shop.name}</MenuItem>
                    ))
                }
               
            </Select>
            
            <div className="text-md text-left text-gray-600">Pick Date</div>
            <DateReserve onDateChange={ (value: Dayjs) => { setPickupDate(value) } }/>

            <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={()=>
                {addBooking(
                    pickupMassageshop,
                    dayjs(pickupDate).toDate(),
                    token,
                    uid
            )
                
            
            }}>
                Book Masssage
            </button>
        </main>
    )
}