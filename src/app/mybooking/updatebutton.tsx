'use client'
import updateBookings from "@/libs/updateBooking"

    

export default function UpdateButton( 
    { token, id } : { token: string, id: string } ) {

    return (
        <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" 
            onClick={() => { updateBookings(token,id) }} >
            Edit
        </button>
    )
} 