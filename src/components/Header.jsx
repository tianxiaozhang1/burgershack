import React from 'react'
import localFont from 'next/font/local'

const bkBold = localFont({ src: '../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../fonts/FlameSans-Regular.ttf' })

function Header() {
    return (
        <div className='z-10 sticky top-0 h-20 w-full lg:h-24 py-1 xl:py-1.5 2xl:py-2 bg-mainBG flex items-center border-b-2 border-stone-300'>
            <div className='lg:max-w-7xl w-full px-6 mx-auto flex justify-between items-center'>

                <div className='w-24'></div>

                <a href='/'>
                    <div className={`${bkReg.className} text-center text-base lg:text-xl text-mainText flex justify-center items-center`}>
                        <div>
                            <div className='w-16 h-3 lg:w-20 lg:h-4 bg-mainOrange -mb-1 lg:-mb-1.5 rounded-t-3xl'></div>
                            <div className='flex justify-center'>
                                <div>
                                    <div className='-mb-2.5'>BURGER</div>
                                    <div>SHACK</div>
                                </div>
                            </div>
                            <div className='w-16 h-3 lg:w-20 lg:h-4 bg-mainOrange -mt-1 lg:-mt-1 rounded-b-3xl'></div>
                        </div>
                    </div>
                </a>

                <div className='flex justify-end gap-2 w-24'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 lg:size-7 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 lg:size-7 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default Header
