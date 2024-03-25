import Link from 'next/link';

export default function TopMenuItem ({title, pageRef} : {title:string, pageRef:string}) {
    return (
        <Link href={pageRef} className='w-[120px] text-center text-[10pt] text-[gray] my-auto font-sans'>
            {title}
        </Link>
    );
}