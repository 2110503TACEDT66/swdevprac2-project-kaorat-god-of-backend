'use client'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function Card ({massageshopName, imgSrc, onRating} : {massageshopName:string, imgSrc:string, onRating?:Function}) {
    
    const [rating, setRating] = useState<number | null>(5)
    
    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                    alt='Card Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[10px]'>{massageshopName}</div>
            {
                onRating? <Rating id={`${massageshopName} Rating`} name={`${massageshopName} Rating`} data-testid={`${massageshopName} Rating`} value={rating}
                onChange={ (_, value) => { setRating(value); onRating(`${massageshopName} Rating`, value) } }/> : ''
            }
            
        </InteractiveCard>
    );
}