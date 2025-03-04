import React from 'react'
import localFont from 'next/font/local'

const bkBold = localFont({ src: '../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../fonts/FlameSans-Regular.ttf' })

function PNGCOMP() {
    return (
        <div className='z-10 h-32 w-full lg:h-96 py-1 xl:py-1.5 2xl:py-2 bg-mainBG flex items-center border-b-2 border-stone-300 scale-150'>
            <div className='lg:max-w-7xl w-full px-6 mx-auto flex justify-between items-center scale-150 ml-200'>

                <div className='bg-mainBG p-3 rounded-full border-8 border-[#975030] my-8 scale-150'>

                    <div className={`${bkReg.className} cursor-default text-center text-xxs md:text-xs lg:text-base text-mainText flex justify-center items-center`}>
                        <div>
                            <div className='w-8 h-1.5 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-mainOrange -mb-0.5 lg:-mb-1.5 rounded-t-3xl'></div>
                            <div className='flex justify-center'>
                                <div>
                                    <div className='-mb-1.5 md:-mb-2 lg:-mb-2.5 lg:mt-0.5'>BURGER</div>
                                    <div>SHACK</div>
                                </div>
                            </div>
                            <div className='w-8 h-1.5 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-mainOrange -mt-0.5 lg:-mt-1 rounded-b-3xl'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PNGCOMP
