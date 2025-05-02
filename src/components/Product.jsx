"use client"
import { useState } from "react";
import { formatCurrencyString } from "use-shopping-cart";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

import localFont from 'next/font/local'

import { Graduate, Patua_One, Inter } from 'next/font/google'
const patua_one = Patua_One({ subsets: ['latin'], weight: ['400'], })
// const inter = Inter({ subsets: ['latin'], weight: ['400'], })

const bkBold = localFont({ src: '../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../fonts/FlameSans-Regular.ttf' })

const categoryBanner = "h-18 lg:h-22 xl:h-32 2xl:h-42 text-2xl lg:text-3xl xl:text-4xl flex justify-center items-center cursor-default"
const categoryGrid = "px-6 md:px-0 max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-10 mx-auto mt-12 md:mt-32 md:-mb-8 lg:mt-16 xl:mt-20 xl:mb-6 mb-12"
const itemImage = "h-26 md:h-20 lg:h-42 flex items-end"
const itemText = `leading-5 md:text-xl text-center mt-2 md:mt-4 md:mb-22 lg:mt-4 lg:mb-8 ${patua_one.className}`
const categoryGallery = "max-w-56 md:max-w-72 lg:max-w-72 cursor-pointer"

const PlusIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 lg:size-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

const MinusIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 lg:size-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

export default function Product({ product }) {
    const { name, price, image, cals } = product;
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useShoppingCart();

    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };

    const addToCart = () => {
      addItem(product, { count: quantity });
      setQuantity(1);
    };

    return (
        <div className={`${categoryGallery} text-mainText my-2 lg:my-8 scale-90 lg:scale-100`} >
            <div className={`${itemImage}`}>
                <Image
                    src={image}
                    alt="X"
                    className='w-full'
                />
            </div>
            
            <div className={`${itemText} `}>
                <div className="text-2xl">
                    {name}
                </div>
            </div>

            <div className="flex lg:-mt-6 justify-center">
                <div className="flex items-center space-x-2">
                    <div className={`md:text-xl text-center  ${patua_one.className}`}>
                        {formatCurrencyString({ value: price, currency: "CAD" })}
                    </div>
                    <div className="mt-0.5 pt-0.25 text-sm lg:mt-0 md:text-lg font-semibold">
                        {cals} Cals
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-1 mb-2 lg:text-xl text-stone-400">
                <div className="flex">
                  <div className="hover:text-mainText" onClick={decreaseQuantity}><MinusIcon /></div>
                  <span className={`w-2 text-center rounded-md mx-3 text-mainText ${bkSans.className}`}>{quantity}</span>
                  <div className="hover:text-mainText" onClick={increaseQuantity}><PlusIcon  /></div>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <button onClick={() => addToCart()} className={`lg:text-lg mx-auto bg-mainRed hover:bg-mainRedDarker text-stone-50 transition-colors duration-500 cursor-pointer rounded-3xl px-8 lg:px-16 py-2 ${bkReg.className}`}>
                  Add - {formatCurrencyString({ value: price*quantity, currency: "CAD" })}
                </button>
            </div>

            <article className="hidden flex-col justify-center items-center gap-3 bg-white p-8 rounded-xl shadow-md text-center mb-6 border-2 border-slate-300 mt-2">
                <div className="w-80">
                  <Image
                    src={image}
                    alt="X"
                    className='w-full'
                  >
                  </Image>
                </div>
                <div className="text-lg">{name}</div>
                <div className="text-2xl font-semibold mt-auto">{formatCurrencyString({ value: price, currency: "CAD" })}</div>
                <div className="flex justify-around items-center mt-4 mb-2 ">
                  <button
                    onClick={decreaseQuantity}
                    className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
                  >
                    -
                  </button>
                  <span className="w-10 text-center rounded-md mx-3">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
                  >
                    +
                  </button>
                </div>
                <button onClick={() => addToCart()} className="bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 rounded-md px-5 py-2">
                  Add to cart
                </button>
            </article>

        </div> 

      
    );
}


