import React from 'react';
import Image from "next/image";

import { Graduate, Patua_One, Inter } from 'next/font/google'
const graduate = Graduate({ subsets: ['latin'], weight: ['400'], })
const patua_one = Patua_One({ subsets: ['latin'], weight: ['400'], })
const inter = Inter({ subsets: ['latin'], weight: ['400'], })

import localFont from 'next/font/local'

const bkBold = localFont({ src: '../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../fonts/FlameSans-Regular.ttf' })

import DoubleCheese from '../images/burger21.png'
import PepperChicken from '../images/m05.png'

import HomeMenu1 from '../images/homemenu1.png'
import HomeMenu2 from '../images/homemenu2.png'
import HomeMenu3 from '../images/homemenu3.png'
import HomeMenu4 from '../images/homemenu4.png'
import HomeMenu5 from '../images/homemenu5.png'
import HomeMenu6 from '../images/homemenu6.png'
import HomeMenu7 from '../images/homemenu7.png'

import AppStore from '../images/App_Store_badge_EN.svg'
import GooglePlay from '../images/Google_Play_Store_badge_EN.svg'

function MainPageItem({ topClassName, btmClassName, topContent, btmContent }) {
    return (
        <div className='m-2 -mt-2 lg:mt-0  lg:m-2 cursor-pointer'>
            <div className={`${topClassName}
                                rounded-t-2xl shadow-x-md`}>
                {topContent}
            </div>
            <div className={`${btmClassName}
                                rounded-b-2xl shadow-md text-textBrown
                                px-0 py-2 pt-4`}>
                {btmContent}
            </div>
        </div>
    )
}

function MenuCategory({ topImage, btmContent }) {
    return (
        <div className='md:m-1 lg:m-0 cursor-pointer '>
            <div className={`rounded-t-2xl shadow-x-md xl:h-52 h-58 overflow-hidden`}>
                <Image
                    src={topImage}
                    alt="X"
                    className='w-full'
                />
            </div>
            <div className={`${bkReg.className}
                                rounded-b-2xl shadow-md text-textBrown
                                text-xl md:text-2xl lg:text-xl xl:text-2xl pb-2 pt-1 px-4 bg-white text-center`}>
                {btmContent}
            </div>
        </div>
    )
}

function MainItems() {
    return (
        <div className='mt-2'>
            <div className='lg:max-w-7xl mx-auto md:grid md:grid-cols-2 px-4 md:px-4 xl:px-2'>
                <MainPageItem
                    topClassName="bg-stone-200 lg:pb-2 rounded-t-xl overflow-hidden"
                    btmClassName="bg-white"
                    topContent={
                        <div className="py-0 xl:h-80">
                            <div className='xl:h-20 bg-red-600 pt-0.25 rounded-t-2xl overflow-hidden'>
                                <div className='bg-[#4c2216] h-3 w-full '></div>
                                <div className='h-14 w-full'>
                                    <div className='h-1/3 w-full bg-red-500 z-10'></div>
                                    <div className='h-1/3 w-full bg-orange-500 z-10 flex justify-center items-center'>
                                        <div className={`text-2xl text-white lg:text-4xl -mt-1.5 lg:-mt-2 lg:text-stone-50 ${bkReg.className} drop-shadow-[0_5px_1.2px_rgba(0,0,0,1)]`}>$1 Double Cheeseburger Week</div>
                                        {/* z-20  */}
                                    </div>
                                    <div className='h-1/3 w-full bg-yellow-500 z-10'></div>
                                    
                                </div>
                                <div className='bg-[#4c2216] h-3 w-full'></div>
                            </div>
                            <div className='flex justify-center item-center py-2 lg:h-60 h-52 lg:py-2'>
                                <div className={`-ml-2 lg:-ml-8 bg-red-600 text-6xl lg:text-8xl h-20 w-20 lg:h-32 lg:w-32 z-10  rounded-full border-8 border-white 
                                                    flex justify-center items-center text-white mt-4 ${bkBold.className}`}>
                                    <div className='text-3xl lg:text-5xl lg:-ml-4 -ml-2'>$</div>
                                    <div className='-mt-1 lg:-mt-2'>1</div>
                                </div>
                                
                                <div className='z-20 lg:-ml-16 -ml-12 '>
                                    <Image
                                        src={DoubleCheese}
                                        width={372}
                                        alt="X"
                                        className='lg:w-96 w-80'
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    btmContent={
                        <div className="font-bold text-lg flex leading-5 pr-4 mx:0 ml-4 lg:ml-6 h-26 md:h-28 lg:h-34">
                            <div>
                                <div className={`flex text-lg lg:-my-2 lg:text-2xl xl:text-3xl font-black ${patua_one.className}`}>
                                    $1 Double Cheeseburgers all week long!
                                </div>
                                <div className={`text-xxs md:text-xs lg:text-base lg:flex mt-1 mb-3 leading-tight lg:mt-3 ${patua_one.className}`}>
                                    <div>This week, we're serving up something bold! Get ready for $1 Double Cheeseburgers, available all week long.</div>
                                </div>

                                <div className="my-2">
                                    <a href='/menu'>
                                        <div className={`${bkSans.className} rounded-3xl text-base border-2 border-[#4c2216] hover:border-stone-500 w-36 py-2 flex justify-center text-center cursor-pointer `}>
                                            Order Now
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    }
                />
                <MainPageItem
                    topClassName="bg-[#f7f1e7] lg:pb-0 rounded-t-xl overflow-hidden mt-6 md:mt-0"
                    btmClassName="bg-white"
                    topContent={
                        <div className="py-0 h-72 lg:h-82 flex bg-orange-50">
                            <div className={`w-1/3 lg:-mr-4 ml-4 h-full text-xl lg:text-4xl flex items-center justify-end text-end ${bkBold.className}`}>
                                <div>
                                    <div className='text-orange-800'>Crunchy</div>
                                    <div className='-mt-3 lg:-mt-3 text-orange-400'>Pepper</div>
                                    <div className='-mt-3 lg:-mt-3 text-green-600'>Chicken</div>
                                    <div className='-mt-3 lg:-mt-3 text-red-500'>Sandwhich</div>
                                    <div className='-mt-3 lg:-mt-3 text-orange-800'>Combo</div>
                                </div>
                            </div>
                            <div className='w-2/3 h-full flex items-center'>
                                <div className='w-1/6 h-full overflow-visible z-20 flex items-center'>
                                    <Image
                                        src={PepperChicken}
                                        width={522}
                                        alt="X"
                                        className='lg:-ml-4 lg:max-w-112 -ml-5 max-w-78'
                                    />

                                </div>
                                <div className='w-1/12 bg-orange-400 h-full z-10 -skew-x-6'></div>
                                <div className='w-1/6 bg-orange-800 h-full z-10 -skew-x-6'></div>
                                <div className='w-1/12 bg-green-600 h-full z-10 -skew-x-6'></div>
                                <div className='w-1/12 bg-stone-50 h-full z-10 -skew-x-6'></div>
                                <div className='w-1/6 bg-red-500 h-full z-10 -skew-x-6'></div>
                                <div className='w-1/12 bg-orange-400 h-full z-10 -skew-x-6'></div>
                            </div>
                        </div>
                    }
                    btmContent={
                        <div className="font-bold text-lg flex leading-5 pr-4 mx:0 ml-4 lg:ml-6 h-26 md:h-28 lg:h-34">
                            <div>
                                <div className={`flex text-lg lg:-my-2  lg:text-2xl xl:text-3xl font-black ${patua_one.className}`}>
                                    <div className='text-red-600'>
                                        <div className='hidden md:flex'>NEW&nbsp;</div></div>
                                        Crunchy Pepper Chicken Sandwhich
                                    </div>
                                <div className={`text-xxs md:text-xs lg:text-base lg:flex mt-1 mb-3 leading-tight lg:mt-3 ${patua_one.className}`}>
                                    <div>Our Crunchy Pepper Chicken Sandwhich is refined with spicy yoghurt-pepper sauce, fried onions in a fluffy brioche bun.</div>
                                </div>

                                <div className="my-2">
                                    <a href='/menu'>
                                        <div className={`${bkSans.className} rounded-3xl text-base border-2 border-[#4c2216] hover:border-stone-500 w-36 py-2 flex justify-center text-center cursor-pointer `}>
                                            Order Now
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>

            <div className={`${bkReg.className} text-center text-2xl lg:text-4xl mt-4 mb-2 md:mt-2 lg:mb-6`}>What can we make for you today?</div>
            
            <a href='/menu'>
                <div className='px-6 lg:max-w-6xl lg:px-2 xl:px-0 xl:max-w-7xl mx-auto grid gap-y-2 md:gap-y-0 md:grid md:grid-cols-2 md:px-6 lg:grid lg:grid-cols-4 lg:gap-3 xl:gap-4 lg:mt-2'>
                    <div className='hidden lg:flex'>
                        <div className='w-full h-full'>
                            <MenuCategory
                                topImage={HomeMenu1}
                                btmContent="Meals"
                            />
                        </div>
                    </div>
                    <MenuCategory
                        topImage={HomeMenu2}
                        btmContent="Flame-grilled burgers"
                    />
                    <MenuCategory
                        topImage={HomeMenu3}
                        btmContent="Chicken & fish burgers"
                    />
                    <MenuCategory
                        topImage={HomeMenu4}
                        btmContent="Beverages"
                    />
                    <MenuCategory
                        topImage={HomeMenu5}
                        btmContent="Sides & snacks"
                    />
                    <MenuCategory
                        topImage={HomeMenu6}
                        btmContent="Plant-based & wraps"
                    />
                    <MenuCategory
                        topImage={HomeMenu7}
                        btmContent="Desserts"
                    />
                </div>
            </a>

            {/* BOTTOM PHONE PART */}
            <div>
                <div className='w-full h-18 md:h-24 lg:h-36'></div>
                <div className='w-full h-44 md:h-66 lg:h-88 flex'>
                    <div className='w-1/2 bg-[#ece0cb] flex justify-end pr-2 md:pr-6 lg:pr-8'>
                        <div className='w-40 md:w-60 lg:w-80 h-56 md:h-84 lg:h-112 bg:[#f7f1e7] -mt-12 md:-mt-18 lg:-mt-24 bg-[#f7f1e7][#ece0cb] border-t-8 border-x-8 border-[#4c2216] rounded-t-3xl overflow-hidden'>
                            <div className='h-6 md:h-8 lg:h-12 w-full rounded-t-xl mt-2'>
                                {/* LOGO */}
                                <div className={`${bkReg.className} cursor-default text-center text-xxs md:text-xs lg:text-base text-[#4c2216] flex justify-center items-center`}>
                                    <div>
                                        <div className='w-8 h-1.5 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-[#ec8740] -mb-0.5 lg:-mb-1.5 rounded-t-3xl'></div>
                                        <div className='flex justify-center'>
                                            <div>
                                                <div className='-mb-1.5 md:-mb-2 lg:-mb-2.5 lg:mt-0.5'>BURGER</div>
                                                <div>SHACK</div>
                                            </div>
                                        </div>
                                        <div className='w-8 h-1.5 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-[#ec8740] -mt-0.5 lg:-mt-1 rounded-b-3xl'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#f7f1e7] w-full h-fit mt-2 md:pt-2 lg:pt-2 grid gap-2 px-2'>
                                <div className='w-full h-16 md:h-24 lg:h-32 rounded-3xl overflow-hidden'>
                                    <Image
                                        src={HomeMenu1}
                                        alt="X"
                                    />
                                </div>   
                                <div className='w-full h-16 md:h-24 lg:h-32 rounded-3xl overflow-hidden'>
                                    <Image
                                        src={HomeMenu4}
                                        alt="X"
                                    />
                                </div> 
                                <div className='w-full h-16 md:h-24 lg:h-32 rounded-3xl overflow-hidden'>
                                    <Image
                                        src={HomeMenu2}
                                        alt="X"
                                    />
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 bg-[#ece0cb] pl-2 md:pl-2 lg:pl-8 md:pt-2 lg:pt-6 text-[#4c2216]'>
                        <div className='w-4/5 md:w-full'>
                            <div className={`${bkReg.className} text-sm mt-4 md:mt-4 md:text-3xl lg:text-5xl lg:w-1/2 lg:leading-[1]`}>Order now from the App!</div>
                            <div className='flex md:mt-2 lg:mt-6'>
                                <Image
                                    src={AppStore}
                                    alt="X"
                                    className='h-4 md:h-7 -ml-9 md:-ml-4 lg:h-9 xl:-ml-1 cursor-pointer'
                                />
                                <Image
                                    src={GooglePlay}
                                    alt="X"
                                    className='h-4 -ml-20 md:h-7 md:-ml-14 lg:h-9 lg:-ml-6 cursor-pointer'
                                />
                            </div>
                            <div className='md:mt-4'>
                                <div>
                                    <div className='text-xxs leading-3 md:text-sm font-semibold md:leading-4 md:w-3/4 lg:w-1/2 mt-1 md:mt-0 lg:mt-6'>Place your order with FREE shipping on orders over $20. Sign up, earn points, and order from the couch!</div>
                                    <div className='md:my-2 lg:my-6'></div>
                                    <div className='text-xxs leading-[1] mt-1 md:mt-0 md:text-xs md:leading-3 md:w-3/4 lg:w-1/2'>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainItems
