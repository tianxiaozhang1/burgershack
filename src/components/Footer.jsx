import React from 'react';
import Link from 'next/link';
// import { patua_one } from '../fonts';

function Footer() {
    const iconData = [
        {
            id: 0, 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 xl:w-12 xl:h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>,
            name: "HOME",
            goingTo: "/",
        },
        {
            id: 1, 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 xl:w-12 xl:h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>,
            name: "MENU",
            goingTo: "/menu",
        },
        {
            id: 2, 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 xl:w-12 xl:h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>,
            name: "ORDER",
            goingTo: "/order",
        },
        {
            id: 3, 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 xl:w-11 xl:h-11 xl:mb-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                    </svg>,
            name: "LOCATIONS",
            goingTo: "/locations",
        },
    ]

    const IconList = () =>
        <div className='flex justify-between px-6 items-center max-w-screen-xl mx-auto font-bold text-xs md:text-base lg:text-xl text-textBrown space-x-12 md:space-x-16 w-full'>
            {iconData.map(({id, icon, name, goingTo}) => 
            <div key={id} className='w-1/4 hover:text-orange-800'>
                <Link href={goingTo}>
                    <div key={id} className='flex justify-center '>
                        {icon}
                    </div>
                    <div className={`flex justify-center -mt-0.5 `}>{name}</div>
                </Link>
            </div>)}
        </div>

    return (
        <div className='border-stone-300 border-t-2 lg:border-t-4 w-full bg-mainBG flex items-center justify-between h-20 md:h-24 lg:h-26 xl:h-32'>
            <IconList/>
        </div>
    )
}

export default Footer
