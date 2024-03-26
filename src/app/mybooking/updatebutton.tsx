'use client'
import Link from "next/link"

    

export default function UpdateButton( 
    { id } : { id: string } ) {

    return (
        <Link href={`mybooking/${id}`}>
            <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" >
                Edit
            </button>
        </Link>
    )
} 