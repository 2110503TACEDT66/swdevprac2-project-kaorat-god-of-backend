import { authOptions } from "../api/auth/[...nextauth]/route";
import ReservationPage from "./reservationPage";
import { getServerSession } from "next-auth";
import getMassageshops from "@/libs/getMassageshops";

export default async function Booking () {

    const session = await getServerSession(authOptions);

    console.log(session?.user.token)   
    
    if(!session || !session.user.token ) return null;

    const shops = await getMassageshops();

    return (
        <ReservationPage shops={shops} token={session.user.token} uid={session.user._id}/>
    );
}