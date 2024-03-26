'use client'
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
import DateReserve from "@/components/DateReserve";
import addBooking from "@/libs/addBooking";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import updateBookings from "@/libs/updateBooking";
export default function Update( { token, id } : {token: string, id: string} ) {

    const [ pickupDate, setPickupDate ] = useState<Dayjs>()
    return (
        <div className="flex justify-center">
            
            <DateReserve onDateChange={ (value: Dayjs) => { setPickupDate(value) } }/>
            <button name="edit" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" 
            onClick={ ( ) => updateBookings( token, id, dayjs(pickupDate).toDate() ) } >
                Submit
            </button>
        </div>
    )
}