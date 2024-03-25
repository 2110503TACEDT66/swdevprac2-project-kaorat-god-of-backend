'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Banner () {

    const covers = [ '/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg' ]
    const [ index, setIndex ] = useState(0)
    const router = useRouter()

    const { data: session } = useSession()

    return (
        <div className='block w-screen h-[80vh] relative m-0 p-[5px]' onClick={ () => { setIndex(index + 1) } }>
            <Image src={ covers[ index % 4 ] }
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className='relative z-20 text-center top-[100px]'>
                <h1 className='text-4xl font-medium'>Vaccine Service Center</h1>
                <h3 className='text-xl font-serif'>Get vaccine with us</h3>
            </div>
            {
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>Welcome {session.user?.name}</div> : null
            }
            <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={ (e) => { e.stopPropagation(); router.push('/hospital') } } >
                Select Hospital
            </button>
        </div>
    );
}