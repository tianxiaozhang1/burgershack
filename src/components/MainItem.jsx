import React from 'react'
import Image from "next/image";
import Link from 'next/link';

import localFont from 'next/font/local'

const bkBold = localFont({ src: '../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../fonts/FlameSans-Regular.ttf' })

import { Patua_One, Inter, Fira_Mono } from 'next/font/google'
const patua_one = Patua_One({ subsets: ['latin'], weight: ['400'], })
const inter = Inter({ subsets: ['latin'], weight: ['400'], })

// import burgerMain from '../images/burger2.png'
// import MealMain from '../images/m05.png'

import MealMain1 from '../images/burger3.png'
import MealMain2 from '../images/burger4.png'
import MealMain3 from '../images/burger5.png'

const OrderButtons = () => {
    return (
        <div className="">
            <div className={` ${bkReg.className} text-[#4c2216] flex justify-center text-center
                                text-xl md:text-3xl lg:text-6xl xl:text-7xl
                                font-extrabold xl:font-black 
                                pt-4 cursor-default lg:text-end lg:pr-6 lg:leading-[1]`}>
                GET IT WHILE IT&apos;S HOT.  
            </div>

            <div className="">
                <a href='/menu'>
                <div className={`bg-[#318636] text-stone-100 hover:text-white
                                    py-2 lg:py-3 font-bold text-lg lg:text-2xl
                                flex justify-center mx-6 xl:mx-2 rounded-3xl my-2 xl:my-3 cursor-pointer
                                ${patua_one.className}`}>
                    <svg className="w-6 h-6 mt-0 lg:w-7 lg:h-7 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                        <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                        <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
                    </svg>

                    COME ON IN
                </div>
                </a>
                <a href='/menu'>
                <div className={`bg-red-600 text-stone-100 hover:text-white
                                    py-2 lg:py-3 px-4 font-bold text-lg lg:text-2xl
                                flex justify-center mx-6 xl:mx-2 rounded-3xl my-2 xl:my-3 cursor-pointer
                                ${patua_one.className}`}>
                    <svg className="w-6 h-6 mt-0 lg:w-7 lg:h-7 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                    </svg>

                    ORDER ONLINE
                </div>
                </a>
            </div>
        </div>
    )
}

const SmallMidOrderButtons = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-center text-center w-full'>
                <div className={`${bkReg.className} text-[#4c2216] flex justify-center text-center
                                    text-2xl md:text-3xl font-extrabold pt-0.5 md:pt-0 cursor-default `}>
                    GET IT WHILE IT&apos;S HOT.  
                </div>
            </div>
            <div className="md:flex w-full">
                <a href='/menu' className='md:w-1/2'>
                    <div className={` bg-[#318636] text-stone-100 hover:text-white
                                        py-2 font-bold text-lg
                                    flex justify-center mx-2 rounded-3xl my-2 cursor-pointer
                                    ${patua_one.className}`}>
                        <svg className="w-6 h-6 mt-0 lg:w-7 lg:h-7 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                            <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                            <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
                        </svg>

                        COME ON IN
                    </div>
                </a>
                <a href='/menu' className='md:w-1/2'>
                    <div className={` bg-red-600 text-stone-100 hover:text-white
                                        py-2 lg:py-3 px-4 font-bold text-lg lg:text-2xl
                                    flex justify-center mx-2 rounded-3xl my-2 cursor-pointer
                                    ${patua_one.className}`}>
                        <svg className="w-6 h-6 mt-0 lg:w-7 lg:h-7 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                        </svg>

                        ORDER ONLINE
                    </div>
                </a>
            </div>
        </div>
    )
}

function MainItem() {
    return (
        <div className='lg:max-w-7xl mx-auto'>
            <div className="lg:col-span-2">
                <div className="m-4 lg:m-1 lg:flex lg:-mb-1 lg:items-center">

                    <div className='hidden lg:flex lg:w-1/3'><OrderButtons/></div>
                    <div className='flex lg:hidden w-full'><SmallMidOrderButtons/></div>
                    <Link href='/menu' className='lg:w-2/3'>
                        <div className="bg-[#4c2216] m-2 mt-3 rounded-3xl justify-center items-center text-[#f7f1e7] text-3xl pb-3 md:pb-4 cursor-pointer pt-4">

                                <div className={`text-orange-200 lg:text-6xl flex justify-center items-center -mt-1 -mb-3 md:-mb-2 ${bkReg.className}`}>
                                    For the BBQ lo
                                    <div className='mt-3 md:mt-2 lg:mt-5 -mx-0.5 text-red-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="size-6 lg:size-9">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </div>
                                    ers
                                </div>

                                <div className={`pr-2 -mr-6 w-full grid grid-cols-3 ${bkReg.className} text-xs md:text-base text-center`}>
                                    <div className='z-10 mt-2 -mr-14 -ml-8'>
                                        <Image
                                            src={MealMain1}
                                            alt="X"
                                            className='w-full'
                                        />
                                        <div className='ml-8 md:ml-0 md:mr-6 lg:mr-0'>BBQ Steakhouse Crispy Chicken</div>
                                    </div>
                                    <div className='z-20 mt-2.5 -ml-12 -mr-12'>
                                        <Image
                                            src={MealMain2}
                                            alt="X"
                                            className='w-full'
                                        />
                                        <div className='mt-4 md:mt-2 lg:mt-0'>BBQ Smoked Cheddar & Bacon Angus</div>
                                    </div>
                                    <div className='z-10 mb-2 -mr-8 -ml-16'>
                                        <Image
                                            src={MealMain3}
                                            alt="X"
                                            className='w-full'
                                        />
                                        <div className='ml-6 lg:ml-0'>BBQ Steakhouse Angus</div>
                                        
                                    </div>
                                </div>

                                <div className={`flex px-4 py-1 justify-center text-center ${bkReg.className}`}>
                                    <div className={`text-xs leading-3 md:text-lg md:px-4 md:leading-5 lg:text-2xl xs:text-lime-800 text-orange-300 lg:px-6 lg:leading-6`}>If your New Year's resolution was to find a new lover, you've come to the right place. The year is starting off 100% BBQ.</div>
                                </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default MainItem
