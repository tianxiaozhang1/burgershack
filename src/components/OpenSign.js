import React from 'react'
import { Graduate, Patua_One, Inter, Tilt_Neon } from 'next/font/google'

const tilt_neon = Tilt_Neon({ subsets: ['latin'], weight: ['400'], })

const OpenSign = ({status}) => {
  if (status === "open") {
    return (
        <div className={`border-4 border-sky-600 text-red-700 py-4 px-10 rounded-3xl ${tilt_neon.className}`}>
            <div className='text-2xl -mb-2 font-bold'>
                COME IN! WE&apos;RE
            </div>
            <div className={`text-7xl font-black`}>
                OPEN
            </div>
        </div>
      )
  } else if (status === "soon") {
    return (
        <div className={`border-4 border-sky-600 text-red-700 py-4 px-6 rounded-3xl ${tilt_neon.className}`}>
            <div className={`text-7xl font-black `}>
                OPEN
            </div>
            <div className='text-2xl font-bold'>
                CLOSING SOON!
            </div>
        </div>
      )
  }
  else if (status === "tomorrow") {
    return (
        <div className={`border-4 border-stone-500 py-4 px-6 rounded-3xl ${tilt_neon.className}`}>
            <div className={`text-7xl text-stone-500 font-black `}>
                CLOSED
            </div>
            <div className='text-2xl text-red-700 font-black'>
                SEE YOU TOMORROW!
            </div>
        </div>
      )
  }
  else if (status === "tuesday") {
    return (
        <div className={`border-4 border-stone-500 py-4 px-6 rounded-3xl ${tilt_neon.className}`}>
        <div className={`text-7xl text-stone-500 font-black `}>
            CLOSED
        </div>
        <div className='text-2xl text-red-700 font-black'>
        SEE YOU TUESDAY!
        </div>
    </div>
      )
  }
}

export default OpenSign
