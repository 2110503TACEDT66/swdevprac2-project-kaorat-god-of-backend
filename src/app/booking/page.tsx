import { authOptions } from "../api/auth/[...nextauth]/route";
import DateReserve from "@/components/DateReserve";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import addBooking from "@/libs/addBooking";
import getUserProfile from "@/libs/getUserProfile";
import { useSession } from "next-auth/react";
import ReservationPage from "./reservationPage";
import { getServerSession } from "next-auth";
import getMassageshops from "@/libs/getMassageshops";

export default async function Booking () {

    const session = await getServerSession(authOptions);

    console.log(session?.user.token)   
    
    if(!session || !session.user.token ) return null;

    const profile = await getUserProfile(session.user.token);

    const shops = await getMassageshops();

    // const makeReservation = async () => {
    //   await addBooking(pickupMassageshop,dayjs(pickupDate).toDate(),profile.token,profile._id)
    // }

    return (
        <ReservationPage shops={shops} token={session.user.token} uid={session.user._id}/>
    );
}