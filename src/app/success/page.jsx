"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
// import { UserContext } from '../../components/OrderContext';

// import { useRouter } from 'next/navigation';

import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import { getTransactionById } from '../lib/actions';

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

// function CheckoutItem({ item }) {
//   const { name, price, image, quantity, formattedValue, value } = item;

//   return (
//     <div className={`flex justify-between text-base px-12 mt-0 text-stone-700 ${bkSans.className}`}>
//         <div className='flex'>
//             <div className='w-2'>{quantity}</div>
//             <div className='ml-2 uppercase'>{name}</div>
//         </div>
//         <div>
//             ${value/100}
//         </div>
//     </div>
//   );
// }

const DeliveryLine = ({deliveryOption}) => {
    if (deliveryOption === 0) {
        return (
            <div className='text-2xl mt-1'>DINE IN</div>
        );
    }
    else if (deliveryOption === 1) {
        return (
            <div className='text-2xl mt-1'>DRIVE THRU</div>
        );
    }
    else if (deliveryOption === 2) {
        return (
            <div className='text-2xl mt-1'>PICK UP</div>
        );
    }
    else if (deliveryOption === 4) {
        return (
            <div className='-mt-4 flex justify-center -mb-10'>
                <div>
                    <div className='text-2xl mt-6 -mb-12'>DELIVERY BY</div>
                    <div className='scale-75'><UberEatsIcon colour1={"oklch(44.6% 0.043 257.281)"} colour2={"oklch(44.6% 0.043 257.281)"}/></div>
                </div>
            </div>
        );
    }
    else if (deliveryOption === 5) {
        return (
            <div className='-mt-4 flex justify-center -mb-10'>
                <div>
                    <div className='text-2xl mt-6 -mb-12'>DELIVERY BY</div>
                    <div className='mt-0.5'><DoorDashIcon colour={"oklch(44.6% 0.043 257.281)"}/></div>
                </div>
            </div>
        );
    }
    else if (deliveryOption === 6) {
        return (
            <div className='-mt-4 flex justify-center -mb-10'>
                <div>
                    <div className='text-2xl mt-6 -mb-12'>DELIVERY BY</div>
                    <div className='scale-75 mt-1'><SkipDishesIcon colour={"oklch(44.6% 0.043 257.281)"}/></div>
                </div>
            </div>
        );
    }
    else if (deliveryOption === 7) {
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

// const PaymentMethod = ({paymentMethod}) => {
//     const paymentInfo = ""
//     if (paymentMethod === 0) {
//         paymentInfo = "Default Card"
//     }
//     else if (paymentMethod === 1) {
//         paymentInfo = "MasterCard"
//     }
//     else if (paymentMethod === 2) {
//         paymentInfo = "AMERICAN EXPRESS"
//     }
//     else if (paymentMethod === 3) {
//         paymentInfo = "Visa"
//     }

//     return (
//         <div className={`text-base mt-1 uppercase`}>Payment Method {paymentInfo}</div>
//     );
// }

const paymentMethodMap = {
    0: "Default Card",
    1: "MasterCard",
    2: "American Express",
    3: "Visa",
    // Add a default or handle other cases if necessary
};

const PaymentMethod = ({ paymentMethod }) => {
    // Look up the display string using the numerical paymentMethod
    // Use a default value if the number doesn't match any key in the map
    const paymentInfo = paymentMethodMap[paymentMethod] || "Unknown Payment Method";
  
    return (
      <div className={`text-xl text-center uppercase ${merchantCopy.className}`}>
        Payment Method {paymentInfo}
      </div>
    );
  };

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

function ReceiptContent({ id, orderID, deliveryOption, items, itemAmounts, itemPrices, totalPreTax, tax, totalWithTax, locationAddress, 
                            locationTel, paymentMethod, dateValue, userAddress
        }) {

    return (
        <div className={`bg-stone-50`}>
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

                <div className='text-xl -mt-0'>{dateValue}</div>

                <div className='text-xl -mt-0'>{locationAddress}</div>
                
                <div className='text-xl -mt-3'>{locationTel}</div>
                <div className='text-base text-white flex justify-center mt-0.5 mb-1'>
                    <div className={`bg-stone-700 px-3 py-1 ${bkSans.className}`}>ORDER TXZ{orderID}</div>
                </div>

                <DeliveryLine deliveryOption={deliveryOption} />
                <CustomerAddress deliveryOption={deliveryOption} userAddress={userAddress} />

            </div>

            <div className='flex justify-center mb-1'>
                <div className='hidden lg:flex mx-auto text-center text-sm mt-1'>===============================================</div>
                <div className='lg:hidden text-center text-sm mt-1'>=======================================</div>
            </div>

            <ul className={`text-base px-12 ${bkSans.className}`}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            display: 'flex', // Use Flexbox for layout
                            justifyContent: 'space-between', // Push content to ends
                            marginBottom: '0px', // Add some space between items
                            paddingBottom: '0px',
                            // borderBottom: '1px dashed #ccc' // Optional: add a separator line
                        }}
                    >
                        {/* Left side: Quantity and Item Name */}
                        <div style={{ marginRight: '10px' }}> {/* Add space between item info and price */}
                            <span style={{ marginRight: '5px' }}>{itemAmounts[index]}</span> {/* Item Amount */}
                            <span className='uppercase'>{item}</span> {/* Item Name */}
                        </div>

                        {/* Right side: Item Price */}
                        <div style={{  }}>
                            ${(itemPrices[index] / 100).toFixed(2)} {/* Item Price (divided by 100) */}
                        </div>
                    </li>
                ))}
            </ul>

            <div className={`flex justify-between pl-16 pr-12 text-base uppercase ${bkSans.className}`}>
                <div>Subtotal</div>
                <div>${(totalPreTax/100).toFixed(2)}</div>
            </div>
            <div className={`flex justify-between pl-16 pr-12 text-base uppercase ${bkSans.className}`}>
                <div>Tax</div>
                <div>${(tax/100).toFixed(2)}</div>
            </div>
            <div className={`flex justify-between pl-16 pr-12 text-base uppercase font-semibold ${bkSans.className}`}>
                <div>Total</div>
                <div>${(totalWithTax/100).toFixed(2)}</div>
            </div>


            

            <div className={`text-lg text-center mt-3 ${merchantCopy.className}`}>Transaction ID {id}</div>
            {/* <div className={`text-xl text-center -mt-0 ${merchantCopy.className}`}>Payment Method: {paymentMethod}</div> */}
            <PaymentMethod paymentMethod={paymentMethod}/>

            <div className='flex justify-center'>
                <div className='hidden lg:flex mx-auto text-center text-sm mt-1'>===============================================</div>
                <div className='lg:hidden text-center text-sm mt-1'>=====================================</div>
            </div>
            

            <div className='text-sm uppercase text-center mt-1'>
            Join our team! Visit joinbs.ca today!
            </div>
        </div>
    );
}

function Success() {

    const searchParams = useSearchParams(); // Get search parameters from the URL
    const transactionId = searchParams.get('id'); // Get the 'id' query parameter

    const [transactionData, setTransactionData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { shouldDisplayCart, cartCount, cartDetails, totalPrice, clearCart } = useShoppingCart();
  
    useEffect(() => {
      const fetchTransaction = async () => {
        if (!transactionId) {
          // No ID in the URL, show an error or redirect
          setError('Transaction ID not found in URL.');
          setIsLoading(false);
          console.warn("Transaction ID not found in URL.");
          return;
        }
  
        setIsLoading(true);
        setError(null);
  
        try {
          // Call the server action to fetch data by ID
          const result = await getTransactionById(transactionId);
  
          if (result?.message) {
            // Handle error from the server action
            setError(result.message);
            setTransactionData(null);
          } else if (result?.success) {
            // Data fetched successfully
            setTransactionData(result.success);
            clearCart()
            setError(null);
          }
        } catch (err) {
          console.error("Client-side fetch error:", err);
          setError('An error occurred while fetching transaction data.');
          setTransactionData(null);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchTransaction();
  
    }, [transactionId]); // Re-run effect if transactionId changes (though it shouldn't on this page)
  
  
    if (isLoading) {
      return <div>Loading transaction details...</div>;
    }
  
    if (error) {
      return <div style={{ color: 'red' }}>Error: {error}</div>;
    }
  
    if (!transactionData) {
        // This case might be hit if error is null but data is also null (e.g., ID not found)
        return <div>Transaction details not available.</div>;
    }
  
    // Destructure data for easier access
    const { id, order_id, delivery_method, items, item_amounts, item_prices, total_amount, tax, total_with_tax, orderDate, payment_method, customer_add, location_add, location_tel } = transactionData;
  

    // const { shouldDisplayCart, cartCount, cartDetails, totalPrice, clearCart } = useShoppingCart();

    // const [deliveryOption, setDeliveryOption] = useState(null);
    // const [deliveryTime, setDeliveryTime] = useState(null);
    // const [paymentOption, setPaymentOption] = useState(null);
    // const [userAddress, setUserAddress] = useState(null);
    // const [userCity, setUserCity] = useState(null);
    // const [userPostalCode, setUserPostalCode] = useState(null);
    // const [locationAddress, setLocationAddress] = useState(null);

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {

    //         const localDeliveryOption = localStorage.getItem('deliveryOption'); 
    //         const localDeliveryTime = localStorage.getItem('deliveryTime'); 
    //         const localPaymentOption = localStorage.getItem('paymentOption'); 
    //         const localUserAddress = localStorage.getItem('userAddress'); 
    //         const localUserCity = localStorage.getItem('userCity'); 
    //         const localUserPostalCode = localStorage.getItem('userPostalCode');
    //         const localLocationAddress = localStorage.getItem('locationAddress');

    //         setDeliveryOption(localDeliveryOption);
    //         setDeliveryTime(localDeliveryTime);
    //         setPaymentOption(localPaymentOption);
    //         setUserAddress(localUserAddress.replace(/['"]+/g, ''));
    //         setUserCity(localUserCity.replace(/['"]+/g, ''));
    //         setUserPostalCode(localUserPostalCode.replace(/['"]+/g, ''));
    //         setLocationAddress(localLocationAddress.replace(/['"]+/g, ''));
    //     }

    // }, []);

    // useEffect(() => {
    //     console.log("DONE HERE")
    // }, []);

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
                    
                        {/* <ReceiptContent cartDetails={cartDetails} totalPrice={totalPrice} locationAddress={locationAddress} /> */}
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


                            <div className=' h-full w-1/6'>
                                <div className='w-full h-1/3'></div>
                                <div className='w-full h-1/3'>
                                    <div className='w-full h-1/3 bg-[#4c2216]'></div>
                                    <div className='w-full h-1/3 bg-[#cd2917]'></div>
                                    <div className='w-full h-1/3 bg-[#318636]'></div>
                                </div>
                                <div className='w-full h-1/3'></div>
                            </div>

                            <div className='bg-stone-50 w-2/3 h-full pb-1 border-stone-300 border-8 cursor-default '>
                                    <ReceiptContent id={id} orderID={order_id} deliveryOption={delivery_method} 
                                                    items={items} itemAmounts={item_amounts} itemPrices={item_prices}
                                                    totalPreTax={total_amount} tax={tax}
                                                    totalWithTax={total_with_tax}
                                                    locationAddress={location_add} locationTel={location_tel} 
                                                    paymentMethod={payment_method} dateValue={orderDate}
                                                    userAddress={customer_add} 
                                    />

                                    <div>




                                    <div className='hidden text-base'>

                                    <h2>Transaction Details:</h2>
                                    <p><strong>Transaction ID (DB):</strong> {}</p> {/* The unique database ID */}
                                    <p><strong>Order ID:</strong> {order_id}</p> {/* Your sequential order ID */}
                                    <p><strong>Date:</strong> {new Date(orderDate).toLocaleString()}</p> {/* Format date */}
                                    <p><strong>Total Amount:</strong> ${total_with_tax.toFixed(2)}</p> {/* Format currency */}

                                    <h3>Items:</h3>
                                    {/* Check if items and item_amounts are arrays before mapping */}
                                    {Array.isArray(items) && Array.isArray(item_amounts) && items.length === item_amounts.length && (
                                        <ul>
                                            {items.map((item, index) => (
                                                <li key={index}>
                                                    {item} (Quantity: {item_amounts[index]}, Price: ${item_prices && item_prices[index] ? item_prices[index].toFixed(2) : 'N/A'}) {/* Add check for item_prices */}
                                                </li>
                                            ))}
                                        </ul>
                                    )}


                                    {/* Display other details */}
                                    <p><strong>Delivery Method:</strong> {delivery_method}</p> {/* Map this to a human-readable string */}
                                    <p><strong>Payment Method:</strong> {payment_method}</p> {/* Map this to a human-readable string */}
                                    <p><strong>Your Address:</strong> {customer_add}</p>
                                    <p><strong>Pickup Location:</strong> {location_add} (Tel: {location_tel})</p>


                                    {/* Add a button to go back to shopping or home */}
                                    {/* Import useRouter if you need client-side navigation */}
                                    {/* <button onClick={() => router.push('/')}>Continue Shopping</button> */}
                                    {/* Or use a standard anchor tag for full page reload if preferred */}
                                    <a href="/">Continue Shopping</a>
                                    </div>








                                    </div>

                            </div>

                            <div className='w-1/6 h-full '>
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
