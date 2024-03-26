import DateReserve from "@/components/DateReserve"
import Dayjs from "dayjs";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import updateBookings from "@/libs/updateBooking";
import Update from "./update";
import getUserProfile from "@/libs/getUserProfile";

export default async function UpdatePage( {params} : {params : { bid : string}} ) {
    const session = await getServerSession(authOptions);
    if(!session || !session.user.token ) return null;

    const profile = await getUserProfile(session.user.token);

    return (
        <main>
            <Update token={session.user.token} id={params.bid}/>
        </main>
    )
}