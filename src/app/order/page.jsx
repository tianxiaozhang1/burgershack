"use client"
import React, { useState } from "react";
import Image from "next/image";
import { formatCurrencyString } from "use-shopping-cart";
import { useShoppingCart } from "use-shopping-cart";
import localFont from 'next/font/local'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { products } from '../../data/products'
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
// const categoryGallery = "max-w-56 md:max-w-72 lg:max-w-72 cursor-pointer bg-[#4c2216] rounded-3xl"
const orderGallery = "grid grid-cols-2 lg:grid-cols-4 lg:max-w-[1600px] place-center flex-wrap mt-10 lg:mt-12 mx-auto justify-center gap-4 lg:mb-12"

function Order() {

    return (
        <div className='bg-[#f7f1e7]'>
            <Header/>
            
                {/* BURGERS */}
                <div className={`${bkBold.className}`}>
                    <div className={`bg-[#4c2216] ${categoryBanner} `}>
                        <div className='text-[#f7f1e7]'>Flame-grilled burgers</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {products.slice(0,12).map((product) => (
                        <Product product={product} key={product.id} displayOrderOptions={true} />
                    ))}
                </div>

                {/* CHICKEN */}
                <div className={` ${bkBold.className}`}>
                    <div className={`bg-[#cc5d20] ${categoryBanner} `}>
                        <div className='text-[#f7f1e7]'>Chicken burgers</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {products.slice(12,19).map((product) => (
                        <Product product={product} key={product.id} displayOrderOptions={true} />
                    ))}
                </div>

                {/* DRINKS */}
                <div className={` ${bkBold.className}`}>
                    <div className={`bg-[#ce2816] ${categoryBanner} `}>
                        <div className='text-[#f7f1e7]'>Beverages</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {products.slice(19,27).map((product) => (
                        <Product product={product} key={product.id} displayOrderOptions={true} />
                    ))}
                </div>

                {/* SNACKS */}
                <div className={` ${bkBold.className}`}>
                    <div className={`bg-[#b13b2e] ${categoryBanner} `}>
                        <div className='text-[#f7f1e7]'>Sides and snacks</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {products.slice(27,34).map((product) => (
                        <Product product={product} key={product.id} displayOrderOptions={true} />
                    ))}
                </div>

                {/* SALADS */}
                <div className={` ${bkBold.className}`}>
                    <div className={`bg-[#318636] ${categoryBanner} `}>
                        <div className='text-[#f7f1e7]'>Plant-based, salads and wraps</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {products.slice(34,42).map((product) => (
                        <Product product={product} key={product.id} displayOrderOptions={true} />
                    ))}
                </div>

                {/* DESSERTS */}
                <div className={` ${bkBold.className}`}>
                    <div className={`bg-[#f6a91a] ${categoryBanner} `}>
                        <div className='text-[#f7f1e7]'>Desserts</div>
                    </div>
                </div>

                <div className={`${orderGallery}`}>
                    {products.slice(42,50).map((product) => (
                        <Product product={product} key={product.id} displayOrderOptions={true} />
                    ))}
                </div>

            <div className="hidden lg:flex w-full h-12"></div>

            <Footer/>
        </div>
    )
}

export default Order
