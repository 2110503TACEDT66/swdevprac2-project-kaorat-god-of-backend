'use client'
import React from "react"

export default function Card( { children } : {children : React.ReactNode} ) {

    function onCardMouseACtion(event: React.SyntheticEvent) {
        if (event.type === 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('shadow-2xl');
        } else {
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.add('shadow-lg');
        }
    }

    return (
        <div className='w-full h-[500px] shadow-lg bg-white bg-neutral-200' 
            onMouseOver={(e)=>onCardMouseACtion(e)}
            onMouseOut={(e)=>onCardMouseACtion(e)}>
                {children}

        </div>
    )
}