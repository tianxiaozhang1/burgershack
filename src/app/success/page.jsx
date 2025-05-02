"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
// import { UserContext } from '../../components/OrderContext';

import localFont from 'next/font/local'
const bkBold = localFont({ src: '../../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../../fonts/FlameSans-Regular.ttf' })
const merchantCopy = localFont({ src: '../../fonts/MerchantCopy.ttf' })

import { formatCurrencyString } from "use-shopping-cart";
import { useShoppingCart } from "use-shopping-cart";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import DoorDashIcon from '../../images/icons/DoorDashIcon'
import GrubHubIcon from '../../images/icons/GrubHubIcon'
import SkipDishesIcon from '../../images/icons/SkipDishesIcon'
import UberEatsIcon from '../../images/icons/UberEatsIcon'

function CheckoutItem({ item }) {
  const { name, price, image, quantity, formattedValue, value } = item;

  return (
    <div className={`flex justify-between text-base px-12 mt-0 text-stone-700 ${bkSans.className}`}>
        <div className='flex'>
            <div className='w-2'>{quantity}</div>
            <div className='ml-2 uppercase'>{name}</div>
        </div>
        <div>
            ${value/100}
        </div>
    </div>
  );
}

const DeliveryLine = ({deliveryOption}) => {
    if (deliveryOption === "0") {
        return (
            <div className='text-2xl mt-1'>DINE IN</div>
        );
    }
    else if (deliveryOption === "1") {
        return (
            <div className='text-2xl mt-1'>DRIVE THRU</div>
        );
    }
    else if (deliveryOption === "2") {
        return (
            <div className='text-2xl mt-1'>PICK UP</div>
        );
    }
    else if (deliveryOption === "4") {
        return (
            <div className='-mt-4 flex justify-center -mb-10'>
                <div>
                    <div className='text-2xl mt-6 -mb-12'>DELIVERY BY</div>
                    <div className='scale-75'><UberEatsIcon colour1={"oklch(44.6% 0.043 257.281)"} colour2={"oklch(44.6% 0.043 257.281)"}/></div>
                </div>
            </div>
        );
    }
    else if (deliveryOption === "5") {
        return (
            <div className='-mt-4 flex justify-center -mb-10'>
                <div>
                    <div className='text-2xl mt-6 -mb-12'>DELIVERY BY</div>
                    <div className='mt-0.5'><DoorDashIcon colour={"oklch(44.6% 0.043 257.281)"}/></div>
                </div>
            </div>
        );
    }
    else if (deliveryOption === "6") {
        return (
            <div className='-mt-4 flex justify-center -mb-10'>
                <div>
                    <div className='text-2xl mt-6 -mb-12'>DELIVERY BY</div>
                    <div className='scale-75 mt-1'><SkipDishesIcon colour={"oklch(44.6% 0.043 257.281)"}/></div>
                </div>
            </div>
        );
    }
    else if (deliveryOption === "7") {
        return (
            <div className='-mt-4 flex justify-center -mb-10'>
                <div>
                    <div className='text-2xl mt-6 -mb-12'>DELIVERY BY</div>
                    <div className='scale-75 mt-0.5'><GrubHubIcon colour={"oklch(44.6% 0.043 257.281)"}/></div>
                </div>
            </div>
        );
    }

    
    
}

const CustomerAddress = ({deliveryOption, userAddress, userCity, userPostalCode}) => {
    if (deliveryOption > 3) {
        return (
            <div>
                <div className='text-2xl -mt-4 text-slate-600'>CUSTOMER ADDRESS</div>
                <div className='-mt-4 text-2xl'>{userAddress}, {userCity}, {userPostalCode}</div>
            </div>
            
        );
    }
}

function ReceiptContent({ cartDetails, totalPrice, locationAddress, deliveryOption, userAddress, userCity, userPostalCode }) {
    
    return (
        <div className={`bg-stone-50 `}>
            <div className={`${bkReg.className} cursor-default text-center text-xxs md:text-xs lg:text-base text-[#4c2216] flex justify-center items-center scale-100 lg:scale-75 mt-2 lg:mt-1`}>
                <div>
                    <div className='w-8 h-1.5 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-[#ec8740] -mb-0.5 lg:-mb-1.5 rounded-t-3xl'></div>
                    <div className='flex justify-center'>
                        <div>
                            <div className='mt-0.5 -mb-0.5 md:-mb-2 lg:-mb-2.5 lg:mt-0.5'>BURGER</div>
                            <div>SHACK</div>
                        </div>
                    </div>
                    <div className='w-8 h-1.5 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-[#ec8740] -mt-0.5 lg:-mt-1 rounded-b-3xl'></div>
                </div>
            </div>

            <div className={`${merchantCopy.className} text-center text-stone-600`}>
                <div className={`text-xl -mt-1 ${bkReg.className}`}>Burger Shack</div>

                <div className='text-xl -mt-0'>{locationAddress}</div>
                
                <div className='text-xl -mt-3'>4169876532</div>
                <div className='text-base text-white flex justify-center mt-0.5'>
                    <div className={`bg-stone-700 px-3 py-1 ${bkSans.className}`}>ORDER YUB7852</div>
                </div>

                <DeliveryLine deliveryOption={deliveryOption} />
                <CustomerAddress deliveryOption={deliveryOption} userAddress={userAddress} userCity={userCity} userPostalCode={userPostalCode} />
            </div>

            <div className='flex justify-center mb-1'>
                <div className='hidden lg:flex mx-auto text-center text-sm mt-1'>==================================================</div>
                <div className='lg:hidden text-center text-sm mt-1'>=======================================</div>
            </div>

            <div className=''>
                {Object.values(cartDetails ?? {}).map((entry) => (
                    <CheckoutItem key={entry.id} item={entry} />
                ))}

                <div className={`flex justify-between text-base px-12 mt-0 text-stone-700 ${bkSans.className}`}>
                    <div className='flex'>
                        <div className='uppercase ml-4'>subtotal</div>
                    </div>
                    <div>
                        CA${totalPrice/100}
                    </div>
                </div>

                <div className={`flex justify-between text-base px-12 mt-0 text-stone-700 ${bkSans.className}`}>
                    <div className='flex'>
                        <div className='uppercase ml-4'>tax</div>
                    </div>
                    <div>
                        {formatCurrencyString({ value: totalPrice*0.13, currency: "CAD" })}
                    </div>
                </div>

                <div className={`flex justify-between text-base px-12 mt-0 text-stone-700 font-semibold ${bkSans.className}`}>
                    <div className='flex'>
                        <div className='uppercase ml-4'>total</div>
                    </div>
                    <div>
                        {formatCurrencyString({ value: totalPrice*1.13, currency: "CAD" })}
                    </div>
                </div>
            </div>
            
            <div className={`text-xl text-center mt-1 ${merchantCopy.className}`}>
            Transaction ID: 7897-7893-1254-9572-8767
            </div>

            <div className='flex justify-center'>
                <div className='hidden lg:flex mx-auto text-center text-sm mt-1'>==================================================</div>
                <div className='lg:hidden text-center text-sm mt-1'>=======================================</div>
            </div>
            

            <div className='text-sm uppercase text-center mt-1'>
            Join our team! Visit joinbs.ca today!
            </div>
        </div>
    );
}

function Success() {

    const { shouldDisplayCart, cartCount, cartDetails, totalPrice, clearCart } = useShoppingCart();

    const [deliveryOption, setDeliveryOption] = useState(null);
    const [deliveryTime, setDeliveryTime] = useState(null);
    const [paymentOption, setPaymentOption] = useState(null);
    const [userAddress, setUserAddress] = useState(null);
    const [userCity, setUserCity] = useState(null);
    const [userPostalCode, setUserPostalCode] = useState(null);
    const [locationAddress, setLocationAddress] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {

            const localDeliveryOption = localStorage.getItem('deliveryOption'); 
            const localDeliveryTime = localStorage.getItem('deliveryTime'); 
            const localPaymentOption = localStorage.getItem('paymentOption'); 
            const localUserAddress = localStorage.getItem('userAddress'); 
            const localUserCity = localStorage.getItem('userCity'); 
            const localUserPostalCode = localStorage.getItem('userPostalCode');
            const localLocationAddress = localStorage.getItem('locationAddress');

            setDeliveryOption(localDeliveryOption);
            setDeliveryTime(localDeliveryTime);
            setPaymentOption(localPaymentOption);
            setUserAddress(localUserAddress.replace(/['"]+/g, ''));
            setUserCity(localUserCity.replace(/['"]+/g, ''));
            setUserPostalCode(localUserPostalCode.replace(/['"]+/g, ''));
            setLocationAddress(localLocationAddress.replace(/['"]+/g, ''));
        }

    }, []);

    useEffect(() => {
        console.log("DONE HERE")
    }, []);

    const categoryBanner = "h-14 lg:h-22 xl:h-32 2xl:h-42 text-lg lg:text-3xl xl:text-4xl flex justify-center items-center cursor-default"
  
    return (
      <div className='bg-[#f7f1e7]  flex flex-col'>
          <div className='flex-1'><Header/></div>

          <div className='justify-center text-3xl h-full flex flex-col bg-[#f7f1e7]Darker'>

              <div className={`bg-[#4c2216] text-[#f7f1e7] ${categoryBanner} ${bkReg.className} flex justify-center `}>
                  <div className=''>
                      <div className='text-[#f7f1e7] flex justify-center text-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 lg:size-10">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                          </svg>
                      </div>
                      <div className='text-[#f7f1e7] flex justify-center text-center -mb-1'>Thank you for your order!</div>
                  </div>

              </div>

              <div className={"flex max-w-7xl mx-auto justify-center lg:py-6 h-full w-full"}>

                  <div className='lg:hidden px-2 w-full mx-4 mt-2 overflow-scroll bg-stone-50'>
                        <ReceiptContent cartDetails={cartDetails} totalPrice={totalPrice} locationAddress={locationAddress} />
                  </div>

                  <div className='hidden lg:flex w-1/2 min-h-220'>
                        <div className='bg-[#c89e70]  h-full w-full z-10 py-12 overflow-visible border-t-16 border-t-[#ae804f] flex justify-center'>

                            {/* <div className='w-full h-1/2 flex'>
                                <div className='w-1/2 h-full flex justify-center items-center'>                          
                                    <div className='bg-[#4c2216] p-6 rounded-2xl -ml-16'>
                                        <div className={`${bkReg.className} cursor-default text-center text-xxs md:text-xs lg:text-base text-stone-200 flex justify-center items-center scale-125`}>
                                            <div>
                                                <div className='w-8 h-1.5 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-[#ec8740] -mb-0.5 lg:-mb-1.5 rounded-t-3xl'></div>
                                                <div className='flex justify-center'>
                                                    <div>
                                                        <div className='-mb-1.5 md:-mb-2 lg:-mb-2.5 lg:mt-0.5'>BURGER</div>
                                                        <div className='mb-0.25'>SHACK</div>
                                                    </div>
                                                </div>
                                                <div className='w-8 h-1.5 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-[#ec8740] -mt-0 lg:-mt-1 rounded-b-3xl'></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='w-full h-1/2'>
                                <div className='w-full h-1/3'></div>
                                <div className='w-full h-1/3'>
                                    <div className='w-full h-1/3 bg-[#4c2216]'></div>
                                    <div className='w-full h-1/3 bg-[#cd2917]'></div>
                                    <div className='w-full h-1/3 bg-[#318636]'></div>
                                </div>
                                <div className='w-full h-1/3'></div>
                            </div> */}


                            <div className='w-full h-full '>
                                <div className='w-full h-1/3'></div>
                                <div className='w-full h-1/3'>
                                    <div className='w-full h-1/3 bg-[#4c2216]'></div>
                                    <div className='w-full h-1/3 bg-[#cd2917]'></div>
                                    <div className='w-full h-1/3 bg-[#318636]'></div>
                                </div>
                                <div className='w-full h-1/3'></div>
                            </div>

                            <div className='bg-stone-50 w-2/3 h-full pb-1 border-stone-300 border-8 cursor-default '>
                                    <ReceiptContent cartDetails={cartDetails} totalPrice={totalPrice} locationAddress={locationAddress} deliveryOption={deliveryOption} userAddress={userAddress} 
                                                    userCity={userCity} userPostalCode={userPostalCode}
                                    />

                            </div>

                            <div className='w-full h-full '>
                                <div className='w-full h-1/3'></div>
                                <div className='w-full h-1/3'>
                                    <div className='w-full h-1/3 bg-[#4c2216]'></div>
                                    <div className='w-full h-1/3 bg-[#cd2917]'></div>
                                    <div className='w-full h-1/3 bg-[#318636]'></div>
                                </div>
                                <div className='w-full h-1/3'></div>
                            </div>

                        </div>
                  </div>
              </div>
          </div>
          
          <div className='flex-1'><Footer/></div>
      </div>
    )
}

export default Success
