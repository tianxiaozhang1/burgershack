"use client";
// import React, { createContext, useContext, useState, useEffect } from 'react';
import React, { Suspense } from 'react'; // Import Suspense
// import { UserContext } from '../../components/OrderContext';
// import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import { getTransactionById } from '../lib/actions';

import SuccessContent from '../../components/SuccessContent'

import localFont from 'next/font/local'
const bkBold = localFont({ src: '../../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../../fonts/FlameSans-Regular.ttf' })
const merchantCopy = localFont({ src: '../../fonts/MerchantCopy.ttf' })

// import { formatCurrencyString } from "use-shopping-cart";
import { useShoppingCart } from "use-shopping-cart";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import DoorDashIcon from '../../images/icons/DoorDashIcon'
import GrubHubIcon from '../../images/icons/GrubHubIcon'
import SkipDishesIcon from '../../images/icons/SkipDishesIcon'
import UberEatsIcon from '../../images/icons/UberEatsIcon'

// function CheckoutItem({ item }) {
//   const { name, price, image, quantity, formattedValue, value } = item;

//   return (
//     <div className={`flex justify-between text-base px-12 mt-0 text-stone-700 ${bkSans.className}`}>
//         <div className='flex'>
//             <div className='w-2'>{quantity}</div>
//             <div className='ml-2 uppercase'>{name}</div>
//         </div>
//         <div>
//             ${value/100}
//         </div>
//     </div>
//   );
// }
// 2. Modify the main Success page component (`page.js`)



// ... (other imports like Header, Footer, localFont are already here)

// Keep your main page component, but remove client-side logic
function SuccessPage() { // Renamed to avoid conflict if you had 'Success' elsewhere

    const categoryBanner = "h-14 lg:h-22 xl:h-32 2xl:h-42 text-lg lg:text-3xl xl:text-4xl flex justify-center items-center cursor-default"

    return (
        <div className='bg-[#f7f1e7] flex flex-col min-h-screen'> {/* Ensure min-h-screen */}
            <Header/> {/* Header remains */}

            <div className='flex-grow flex flex-col items-center'> {/* Use flex-grow to push footer down, center content */}

                {/* Thank You Banner remains */}
                <div className={`bg-[#4c2216] text-[#f7f1e7] ${categoryBanner} ${bkReg.className} w-full flex justify-center `}>
                    <div className=''>
                        <div className='text-[#f7f1e7] flex justify-center text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 lg:size-10">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='text-[#f7f1e7] flex justify-center text-center -mb-1'>Thank you for your order!</div>
                    </div>
                </div>

                {/* Main Content Area - Wrap the client component in Suspense */}
                <div className={"flex max-w-7xl mx-auto justify-center lg:py-6 h-full w-full"}> {/* This container might need adjustment based on desired layout */}

                     {/* This mobile view div looks like it was missing content */}
                    <div className='lg:hidden px-2 w-full mx-4 mt-2 overflow-auto bg-stone-50 rounded-xl'> {/* Added overflow-auto and rounded corners */}
                         {/* Place the client component inside Suspense here too */}
                         <Suspense fallback={<div className={`${bkReg.className} text-center py-4 text-stone-700`}>Loading receipt...</div>}>
                             <SuccessContent />
                         </Suspense>
                     </div>

                    {/* This is the larger screen view */}
                    <div className='hidden lg:flex w-1/2 min-h-220'>
                         {/* Content inside the brown border area */}
                         <div className='bg-[#c89e70] h-full w-full z-10 py-12 overflow-visible border-t-16 border-t-[#ae804f] flex justify-center'>
                             {/* Left color bar */}
                             <div className=' h-full w-1/6'>
                                <div className='w-full h-1/3'></div>
                                <div className='w-full h-1/3'>
                                    <div className='w-full h-1/3 bg-[#4c2216]'></div>
                                    <div className='w-full h-1/3 bg-[#cd2917]'></div>
                                    <div className='w-full h-1/3 bg-[#318636]'></div>
                                </div>
                                <div className='w-full h-1/3'></div>
                            </div>

                            {/* Receipt Content - Place the client component inside Suspense here */}
                            <div className='bg-stone-50 w-2/3 h-full pb-1 border-stone-300 border-8 cursor-default overflow-auto'> {/* Added overflow-auto */}
                                <Suspense fallback={<div className={`${bkReg.className} text-center py-4 text-stone-700`}>Loading receipt...</div>}>
                                     <SuccessContent /> {/* Render the client component */}
                                </Suspense>
                             </div>

                             {/* Right color bar */}
                             <div className='w-1/6 h-full '>
                                <div className='w-full h-1/3'></div>
                                <div className='w-full h-1/3'>
                                    <div className='w-full h-1/3 bg-[#4c2216]'></div>
                                    <div className='w-full h-1/3 bg-[#cd2917]'></div>
                                    <div className='w-full h-1/3 bg-[#318636]'></div>
                                </div>
                                <div className='w-full h-1/3'></div>
                            </div>
                         </div>
                     </div>
                     {/* The section below seems like duplicated/unused content, likely remove */}
                     {/* <div className='hidden' style={{ padding: '20px' }}>...</div> */}
                </div>
             </div>

            <Footer/> {/* Footer remains */}
        </div>
    )
}

// Export the main page component
export default SuccessPage;