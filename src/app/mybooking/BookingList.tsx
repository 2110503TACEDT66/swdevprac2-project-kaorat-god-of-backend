import getBookings from '@/libs/getBookings'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { BookingItem } from '../../../interface';
import dayjs from 'dayjs';
import RemoveButton from './removebutton';
import UpdateButton from './updatebutton';

export default async function BookingList() {

    const session = await getServerSession(authOptions);

    console.log(session?.user.token)   
    
    if(!session || !session.user.token ) return null;

    const bookItems = await getBookings(session.user.token)

    
    
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
                bookItems.data.map((bookItem: BookingItem) => (
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookItem._id}>
                        <div className="text-sm">Massage shop: {bookItem.massageshop.name}</div>
                        <div className="text-sm">Booking Date: {dayjs(bookItem.apptDate).format('YYYY/MM/DD')}</div>
                        <div className='flex flex-row gap-2'>
                            <RemoveButton token={session.user.token} id={bookItem._id}/>
                            <UpdateButton id={bookItem._id}/>
                        </div>
                    </div>
                ))
            }
        </>
    )
}