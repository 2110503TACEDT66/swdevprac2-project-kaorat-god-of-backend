'use client'
import { useAppselector, AppDispatch } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"

export default function BookingList() {

    const bookItems = useAppselector((state) => state.reduxPersistedReducer.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    if (bookItems.length === 0) {
        return (
            <>
                No Vaccine Booking
            </>
        )
    }

    return (
        <>
            {
                bookItems.map((bookItem) => (
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookItem.id}>
                        <div className="text-sm">Name: {bookItem.name}</div>
                        <div className="text-sm">Lastname: {bookItem.surname}</div>
                        <div className="text-sm">Citizen ID: {bookItem.id}</div>
                        <div className="text-sm">Hospital: {bookItem.hospital}</div>
                        <div className="text-sm">Booking Date: {bookItem.bookDate}</div>
                        <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={ () => dispatch(removeBooking(bookItem.id)) }>
                            Remove
                        </button>
                    </div>
                ))
            }
        </>
    )
}