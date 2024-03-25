import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";
import getUserProfile from "@/libs/getUserProfile";

export default async function TopMenuM() {

  const session = await getServerSession(authOptions)
    if (!session || !session.user.token) {
        return null
    }

  const profile = await getUserProfile(session.user.token)

  return (
    <div className="flex fixed top-0 left-0 justify-between right-0 flex-row px-5 py-1.25 m-0 bg-white bg-opacity-50 h-12 z-50 shadow-lg w-full backdrop-blur-xl">
        
        <div className="flex flex-row align-center">
          <Link href="/"> <Image src="/img/logo1.png" className="h-full w-auto mx-1.25 p-1" alt="logo" width={0} height={0} sizes="100vh"/> </Link>
          <div className="font-serif font-light text-lg align-center mt-auto mb-auto ml-2">kaoratposidon</div>
        </div>
        

        <div className="flex flex-row align-center mt-auto mb-auto gap-x-10 hover:gap-x-16 transition-all">
          <TopMenuItem title="Reservation" pageRef="/booking" />
          <TopMenuItem title="Massager" pageRef="/massager" />
          <TopMenuItem title="Shop" pageRef="/massageshop" />
        </div>
        

        <div className="flex flex-row items-center h-full top-0 font-sans">
          <Link href={"/mybooking"} ><Image src="/img/chart.png" className="h-full w-auto mx-1.25 p-1" alt="myBooking" width={0} height={0} sizes="100vh"/></Link>
          {
            session ? (<Link href="/api/auth/signout" underline="none">
                <div className="flex items-center h-full px-3 text-black text-sm ">
                  Logout of {profile.data.name || "Unknown User"}
                </div>
              </Link>)
              : (<Link href="/api/auth/signin" underline="none">
                  <div className="flex items-center h-full px-3 text-black text-md">
                    Login
                  </div>
                </Link>)
          }
        </div>
    </div>
  );
}