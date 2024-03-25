'use client'
import DateReserve from "@/components/DateReserve";
import { TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking () {

    const [ name, setName ] = useState<string>()
    const [ lastname, setLastname ] = useState<string>()
    const [ citizenID, setCitizenID ] = useState<string>()
    const [ pickupDate, setPickupDate ] = useState<Dayjs|null>(null)
    const [ pickupHospital, setPickupHospital ] = useState<string>()

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if (name && lastname && citizenID && pickupDate && pickupHospital) {
            const item: BookingItem = {
                name: name,
                surname: lastname,
                id: citizenID,
                hospital: pickupHospital,
                bookDate: dayjs(pickupDate).format('YYYY/MM/DD'),
            }
            dispatch(addBooking(item))
        }
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-5 m-5 p-5">       
            <div className="text-xl font-md">Vaccine Booking</div>

            <TextField name="Name" label="Name" onChange={ (e) => { setName(e.target.value) } }/>
            <TextField name="Lastname" label="Lastname" onChange={ (e) => { setLastname(e.target.value) } }/>
            <TextField name="Citizen ID" label="Citizen ID" onChange={ (e) => { setCitizenID(e.target.value) } }/>

            <div className="text-md text-left text-gray-600">Pick-Up Hospital</div>
            <Select variant="standard" id="hospital" className="h-[2em] w-[200px]" onChange={ (e) => { setPickupHospital(e.target.value as string) } }>
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>
            
            <div className="text-md text-left text-gray-600">Pick-Up Date</div>
            <DateReserve onDateChange={ (value: Dayjs) => { setPickupDate(value) } }/>

            <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={makeBooking}>
                Book Vaccine
            </button>
        </main>
    );
}