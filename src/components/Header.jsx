'use client'
import React from 'react'

import localFont from 'next/font/local' 
import { usePathname } from 'next/navigation'

import { useShoppingCart } from "use-shopping-cart";
// import Image from "next/image";
// import Link from "next/link";
import ShoppingCart from "./ShoppingCart";

const bkBold = localFont({ src: '../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../fonts/FlameSans-Regular.ttf' })

// import CartSVG from './cart.svg'

// const CartIcon = () => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart"
//   width="32" height="32" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none"
//   stroke-linecap="round" stroke-linejoin="round">
//   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
//   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
//   <path d="M17 17h-11v-14h-2"></path>
//   <path d="M6 5l14 1l-1 7h-13"></path>
// </svg>
//     )
// }

function Header() {
    const { handleCartClick, cartCount } = useShoppingCart();
    const pathname = usePathname()

    return (
        <div className='z-10 sticky top-0 h-20 w-full lg:h-24 py-1 xl:py-1.5 2xl:py-2 bg-[#f7f1e7] flex items-center border-b-2 border-stone-300'>
            <div className='lg:max-w-7xl w-full px-6 mx-auto flex justify-between items-center'>

                <div className='w-60'></div>

                <a href='/'>
                    <div className={`${bkReg.className} text-center text-base lg:text-xl text-[#4c2216] flex justify-center items-center`}>
                        <div>
                            <div className='w-16 h-3 lg:w-20 lg:h-4 bg-[#ec8740] -mb-1 lg:-mb-1.5 rounded-t-3xl'></div>
                            <div className='flex justify-center'>
                                <div className='my-0.25'>
                                    <div className='-mb-2.5'>BURGER</div>
                                    <div className='mt-0.5'>SHACK</div>
                                </div>
                            </div>
                            <div className='w-16 h-3 lg:w-20 lg:h-4 bg-[#ec8740] -mt-1 lg:-mt-1 rounded-b-3xl'></div>
                        </div>
                    </div>
                </a>

                <div className='flex justify-end gap-2 w-60'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 lg:size-7 cursor-pointer hidden ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                    {pathname === "/success" ? (<div></div>) : 
                    (
                        <div className='flex bg-[#cd2917] hover:bg-[#cd2917]Darker cursor-pointer rounded-3xl px-6 py-2 text-stone-50 items-center z-10 ' onClick={() => handleCartClick()}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 lg:size-7 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg> */}

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 lg:size-6 cursor-pointer">
                                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                            </svg>

                            <div className={`${bkReg.className} ml-1 text-base flex`}> 
                                <div className='hidden lg:flex'>View Order</div> ({cartCount})</div>

                        </div>
                    )}
                    
                    {pathname === "/checkout" || pathname === "/locations" || pathname === "/success" ? (<div></div>) : (<ShoppingCart />)}
                    {/* <p className='text-red-500'></p> */}

                    {/* <button className="relative hidden " onClick={() => handleCartClick()}>
                        <Image src={CartSVG} width={40} height={40} alt="shopping cart icon" />
                        <div className="rounded-full flex justify-center items-center bg-[#4c2216] text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
                            {cartCount}
                        </div>
                    </button>
                    <ShoppingCart /> */}
                    

                </div>
            </div>
        </div>
    )
}

export default Header
