"use client"
import DateReserve from "@/components/DateReserve";
import { TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";
import getMassageshops from "@/libs/getMassageshops";

export default function Booking() {
  const [massageShop, setMassageShop] = useState<string[]>([]);
  const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
  const [pickupHospital, setPickupHospital] = useState<string>();

  const dispatch = useDispatch<AppDispatch>();


  const makeBooking = () => {
    // Handle booking logic here
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-5 m-5 p-5">
      <div className="text-xl font-md">Massage Appointment</div>

      <div className="text-md text-left text-gray-600">Choose Massageshop</div>
      <Select
        variant="standard"
        id="hospital"
        className="h-[2em] w-[200px]"
        onChange={(e) => {
          setPickupHospital(e.target.value as string);
        }}
        value={pickupHospital}
      >
        {massageShop.map((shop, index) => (
          <MenuItem key={index} value={shop}>
            {shop}
          </MenuItem>
        ))}
      </Select>

      <div className="text-md text-left text-gray-600">Pick Date</div>
      <DateReserve onDateChange={(value: Dayjs) => setPickupDate(value)} />

      <button
        name="Book Vaccine"
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={makeBooking}
      >
        Book Massage
      </button>
    </main>
  );
}
