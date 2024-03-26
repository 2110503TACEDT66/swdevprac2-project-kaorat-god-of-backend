import Image from "next/image"
import InteractiveCard from "./InteractiveCard"
import Rating from '@mui/material/Rating';
import React from 'react';
import { useState } from 'react';
import Link from "next/link";

export default function CardM( {cardName , imgSrc , nextTo } : {cardName : string, imgSrc : string , nextTo: string} ) { 

    return (
        <InteractiveCard>
            <div className='w-full h-[100%] relative'>
                <Image src={imgSrc}
                alt='data'
                fill={true}
                className='object-cover' 
                />
                <div className='absolute inset-0 bg-black opacity-50 hover:opacity-20'></div>
                <div className='bottom-0 text-white w-full absolute p-[10px]'>
                    <div className="font-sans text-2xl py-2 font-bold hover:py-6 transition-all duration-700">{cardName}</div>
                    <Link href={nextTo}>
                    <button className="font-sans font-light hover:underline hover:decoration-2">
                        See more &#8594; 
                    </button>
                    </Link>
                </div>
            </div>
        </InteractiveCard>
    )
}