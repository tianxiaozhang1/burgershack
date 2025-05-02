"use client"
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { formatCurrencyString, addItem } from "use-shopping-cart";
import Image from "next/image";

import localFont from 'next/font/local'
const bkBold = localFont({ src: '../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../fonts/FlameSans-Regular.ttf' })

const TrashIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash mt-0.25" width="26"
          height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentcolor" fill="none"
          strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 7l16 0"></path>
          <path d="M10 11l0 6"></path>
          <path d="M14 11l0 6"></path>
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
      </svg>
    )
}

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

export default function CheckoutItem({ item }) {
  const { name, price, image } = item;
  const { removeItem, addItem } = useShoppingCart();
  // const [newQuantity, setNewQuantity] = useState(quantity);
  // const [quantity, setQuantity] = useState(item.quantity);

  const removeItemFromCart = () => {
    removeItem(item.id);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      addItem(item, { count: -1 });
    }
  };

  const increaseQuantity = () => {
    addItem(item, { count: 1 });
  };

  return (
    <div className={`flex items-center gap-2 lg:gap-4 mb-3 bg-white rounded-3xl lg:pr-2 lg:pl-3 pl-3 pr-2`}>
        <Image alt="BURGER" src={image} className="w-1/6 my-4 lg:my-6" />

        <div className="flex items-center w-1/3">
            <div className={`${bkReg.className} leading-3.5 lg:text-xl lg:leading-5 cursor-default`}>{name}</div>
            <div className="hidden justify-center mt-3 mb-2 ml-3 lg:text-xl text-stone-400">
                <div className="flex">
                  <div className="hover:text-mainText cursor-pointer" onClick={decreaseQuantity}><MinusIcon /></div>
                  <div className="px-2 text-xl text-center font-semibold text-mainText mt-0.25">{item.quantity}</div>
                  <div className="hover:text-mainText cursor-pointer" onClick={increaseQuantity}><PlusIcon  /></div>
                </div>
            </div>
            
        </div>

        <div className="flex w-1/2 justify-between ">
            <div className="flex justify-center mt-3 pt-0.25 mb-2 ml-0 lg:text-xl text-stone-400 ">
                <div className="flex">
                  <div className="hover:text-mainText cursor-pointer scale-90 lg:scale-100" onClick={decreaseQuantity}><MinusIcon /></div>
                  <div className="px-0.5 lg:px-2 lg:text-xl text-center font-semibold text-mainText mt-0.25 cursor-default">{item.quantity}</div>
                  <div className="hover:text-mainText cursor-pointer scale-90 lg:scale-100" onClick={increaseQuantity}><PlusIcon  /></div>
                </div>
            </div>
            <div className="flex">
              <div className="lg:text-xl font-semibold text-mainText mt-3.5 cursor-default">
                  {formatCurrencyString({ value: price * item.quantity, currency: "CAD" })}
              </div>

              <button
                  onClick={() => removeItemFromCart()}
                  className="rounded-full p-1.5 lg:p-2 text-stone-400 hover:text-[#4d2316] cursor-pointer"
              >
                  <TrashIcon alt="delete icon" className="w-3 lg:w-4 mt-2" />
              </button>
            </div>
        </div>

        
    </div>
  );
}