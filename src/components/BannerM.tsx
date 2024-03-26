'use client'
import styles from "./banner.module.css"
import Image  from "next/image"
import { useState } from "react"
import {useRouter} from "next/navigation"
import { useSession } from "next-auth/react"
// import getUserProfile from "@/libs/getUserProfile"

export default function Banner() {
  const covers = ['/img/cover1.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
  const [ index, setIndex ] = useState(0)
  const router = useRouter()

  const { data: session } = useSession()
  // const profile = session ? getUserProfile(session.user.token) : null;
  // console.log(session?.user.token)

  return (
    <div className="block p-1.25 w-screen h-[70vh] relative mb-7" onClick={ ()=>setIndex(index+1) }>
      <Image src={covers[index % covers.length]} alt='cover' fill={true} priority objectFit='cover'/>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative top-25 z-20 text-center text-blue-900">
        <div> <br /> <br /></div>
          <h1 className='text-4xl font-bold	bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white'>Massage Service</h1>
          <h3 className='text-2xl font-sans antialiased text-amber-100'>stairway to heaven</h3>
      </div>

    

        {session ? 
        <div className="flex justify-center items-center text-center relative h-2/5 px-3 text-white text-2xl z-30 font-black ">
           Hope You Enjoy {session.user.name || ""}
        </div> 
        : 
        <div className="flex justify-center">

        
        <button className="bg-transparent text-white border border-white font-sans py-2 px-2 m-2 absolute bottom-0 
        hover:bg-gray-100 hover:backdrop-blur-xl hover:bg-opacity-30  hover:text-gray-100 z-30 mr-10 rounded-md transition-all mx-auto w-1/5" 
        onClick={(e)=> {e.stopPropagation(); router.push('/auth/register') } }>
          Register
        </button>
        </div>
        }

      {/* <button className="bg-cyan-500 text-white border border-transparent font-semibold py-2 px-2 m-2 absolute bottom-0 right-0
      hover:bg-white hover:text-cyan-600 border-cyan-600 z-30 rounded-md shadow-lg shadow-blue-500/50" 
      onClick={(e)=> {e.stopPropagation(); router.push('/hospital') }}>
          Select Hospital
      </button> */}
    </div>
  )
}