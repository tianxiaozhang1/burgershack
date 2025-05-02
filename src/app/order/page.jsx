"use client"
import React, { useState } from "react";
import Image from "next/image";
import { formatCurrencyString } from "use-shopping-cart";
import { useShoppingCart } from "use-shopping-cart";
import localFont from 'next/font/local'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { burgers, chickens, desserts, drinks, salads, snacks } from '../../data/products'
import Product from '../../components/Product'

import { Graduate, Patua_One, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400'], })
const patua_one = Patua_One({ subsets: ['latin'], weight: ['400'], })

const bkBold = localFont({ src: '../../fonts/Flame-Bold.ttf' })
// const bkReg = localFont({ src: '../../fonts/Flame-Regular.ttf' })
// const bkSans = localFont({ src: '../../fonts/FlameSans-Regular.ttf' })

const categoryBanner = "h-18 lg:h-22 xl:h-32 2xl:h-42 text-2xl lg:text-3xl xl:text-4xl flex justify-center items-center cursor-default"
// const categoryGrid = "px-6 md:px-0 max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-10 mx-auto mt-12 md:mt-32 md:-mb-8 lg:mt-16 xl:mt-20 xl:mb-6 mb-12"
// const itemImage = "h-26 md:h-20 lg:h-42 flex items-end"
// const itemText = `leading-5 md:text-xl text-center mt-2 md:mt-4 md:mb-22 lg:mt-4 lg:mb-8 ${patua_one.className}`
// const categoryGallery = "max-w-56 md:max-w-72 lg:max-w-72 cursor-pointer bg-mainText rounded-3xl"
const orderGallery = "grid grid-cols-2 lg:grid-cols-4 lg:max-w-[1600px] place-center flex-wrap mt-10 lg:mt-12 mx-auto justify-center gap-4"

function Order() {

    return (
        <div className='bg-mainBG'>
            <Header/>
            
                {/* BURGERS */}
                <div className={`${bkBold.className}`}>
                    <div className={`bg-mainText ${categoryBanner} `}>
                        <div className='text-mainBG'>Flame-grilled burgers</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {burgers.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>

                {/* CHICKEN */}
                <div className={` ${bkBold.className}`}>
                    <div className={`bg-[#cc5d20] ${categoryBanner} `}>
                        <div className='text-mainBG'>Chicken burgers</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {chickens.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>

                {/* DRINKS */}
                <div className={` ${bkBold.className}`}>
                    <div className={`bg-[#ce2816] ${categoryBanner} `}>
                        <div className='text-mainBG'>Beverages</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {drinks.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>

                {/* SNACKS */}
                <div className={` ${bkBold.className}`}>
                    <div className={`bg-[#b13b2e] ${categoryBanner} `}>
                        <div className='text-mainBG'>Sides and snacks</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {snacks.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>

                {/* SALADS */}
                <div className={` ${bkBold.className}`}>
                    <div className={`bg-mainGreen ${categoryBanner} `}>
                        <div className='text-mainBG'>Plant-based, salads and wraps</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {salads.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>

                {/* DESSERTS */}
                <div className={` ${bkBold.className}`}>
                    <div className={`bg-mainYellow ${categoryBanner} `}>
                        <div className='text-mainBG'>Desserts</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {desserts.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>

            <div className="hidden lg:flex w-full h-12"></div>

            <Footer/>
        </div>
    )
}

export default Order
