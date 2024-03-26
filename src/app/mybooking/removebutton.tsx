'use client'
import deleteBooking from "@/libs/deleteBooking"

    

export default function RemoveButton( 
    { token, id } : { token: string, id: string } ) {

    return (
        <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" 
            onClick={(e) => { e.preventDefault(); deleteBooking(token,id) }}>
            Remove
        </button>
    )
}
