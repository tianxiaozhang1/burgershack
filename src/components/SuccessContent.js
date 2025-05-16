"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getTransactionById } from '../app/lib/actions'; // Assume this server action exists
import { useShoppingCart } from "use-shopping-cart";


import localFont from 'next/font/local'
// Re-import fonts used in this component
const bkBold = localFont({ src: '../fonts/Flame-Bold.ttf' });
const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' });
const bkSans = localFont({ src: '../fonts/FlameSans-Regular.ttf' });
const merchantCopy = localFont({ src: '../fonts/MerchantCopy.ttf' });

// Define the DeliveryLine component (kept as before)
const DeliveryLine = ({deliveryOption}) => {
    const baseRightColClass = `w-full text-center font-semibold ${merchantCopy.className}`;
    const baseFlexLayoutClass = 'w-full flex justify-between ';
    // const baseLeftColClass = `w-6/12 ${merchantCopy.className}`;
    const baseRightColFlexClass = `w-12/12 text-center font-semibold ${merchantCopy.className}`;

    switch (deliveryOption) {
        case 0: return <div className={baseRightColClass}>Dine In</div>;
        case 1: return <div className={baseRightColClass}>Drive Thru</div>;
        case 2: return <div className={baseRightColClass}>Pick Up</div>;
        case 4: return (
            <div className={baseFlexLayoutClass}>
                {/* <div className={baseLeftColClass}>Delivery</div> */}
                <div className={baseRightColFlexClass}>
                     <span className="text-stone-600">Uber</span>
                     <span className="text-stone-600">Eats</span>
                </div>
            </div>
        );
        case 5: return (
            <div className={baseFlexLayoutClass}>
                {/* <div className={baseLeftColClass}>Delivery</div> */}
                <div className={baseRightColFlexClass}>
                     <span className="text-stone-600">DoorDash</span>
                </div>
            </div>
        );
        case 6: return (
             <div className={baseFlexLayoutClass}>
                {/* <div className={baseLeftColClass}>Delivery</div> */}
                <div className={baseRightColFlexClass}>
                    <span className="text-stone-600">SkipTheDishes</span>
                </div>
            </div>
        );
        case 7: return (
             <div className={baseFlexLayoutClass}>
                {/* <div className={baseLeftColClass}>Delivery</div> */}
                <div className={baseRightColFlexClass}>
                         <span className="text-stone-600">GrubHub</span>
                     </div>
                 </div>
            );
        default: return (
            <div className={baseFlexLayoutClass}>
                <div className={baseLeftColClass}>Delivery Method</div>
                <div className={baseRightColFlexClass}>Unknown ({deliveryOption})</div>
            </div>
        );
    }
};

// Define the PaymentMethod component (kept as before)
const paymentMethodMap = {
    0: "Default Card",
    1: "MasterCard",
    2: "American Express",
    3: "Visa",
};
const PaymentMethod = ({ paymentMethod }) => {
    const paymentInfo = paymentMethodMap[paymentMethod] || "Unknown Payment Method";
    return (
        <div className={`text-xl text-center uppercase ${merchantCopy.className}`}>
            Payment Method {paymentInfo}
        </div>
    );
};

// Define the CustomerAddress component (kept as before)
const CustomerAddress = ({deliveryOption, userAddress}) => {
    // Added check for userAddress existence and deliveryOption > 3
    if (deliveryOption > 3 && userAddress) {
        return (
            <div className={`${bkSans.className} text-stone-800`}>
                 <div className='text-base -mt-1 text-stone-600 '>CUSTOMER ADDRESS</div>
                 <div className='text-base -mt-2'>{userAddress}</div>
            </div>
        );
    }
    return null; // Don't render if condition not met
}


// Define the ReceiptContent component (kept as before, but uses passed props)
function ReceiptContent({ id, orderID, deliveryOption, items, itemAmounts, itemPrices, totalPreTax, tax, totalWithTax, locationAddress,
    locationTel, paymentMethod, dateValue, userAddress // dateValue is the prop containing transactionData.orderDate
}) {

    let formattedOrderTime = 'Date Not Available'; // Default fallback value

    // --- Safely handle and adjust transaction date/time ---
    // Check if dateValue exists and is not null/undefined/empty
    if (dateValue) {
        try {
            const orderDate = new Date(dateValue);

            // Check if the created Date object is valid
            // new Date('invalid string').getTime() returns NaN
            if (!isNaN(orderDate.getTime())) {
                 // Subtract 4 hours (in milliseconds)
                orderDate.setTime(orderDate.getTime() - (4 * 60 * 60 * 1000));
                 // Format the adjusted date using the user's locale
                formattedOrderTime = orderDate.toLocaleString();
            } else {
                // Date object is invalid after trying to parse dateValue
                console.error("Failed to parse dateValue into a valid Date object:", dateValue); // Log to help debug the format issue
                formattedOrderTime = 'Invalid Date Format'; // More specific fallback
            }
        } catch (e) {
             // Catch any errors during date processing
             console.error("Error processing dateValue:", dateValue, e); // Log the error
             formattedOrderTime = 'Date Processing Error'; // Fallback for exceptions
        }
    } else {
        // dateValue was null, undefined, or empty
        console.warn("dateValue was empty or null:", dateValue); // Log missing date value
        // formattedOrderTime is already 'Date Not Available'
    }
    // --------------------------------------------------------


    return (
        <div className={`bg-stone-50 h-full`}>
            {/* Burger Shack Logo/Text */}
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

                {/* Display adjusted order time */}
                {/* This line now uses the safely processed formattedOrderTime */}
                <div className='text-xl -mt-0'>{formattedOrderTime}</div>

                {/* Location Address and Tel */}
                {locationAddress && <div className='text-xl -mt-0'>{locationAddress}</div>}
                {locationTel && <div className='text-xl -mt-3'>{locationTel}</div>}

                {/* Order ID */}
                <div className='text-base text-white flex justify-center mt-0.5 mb-1'>
                    <div className={`bg-stone-700 px-3 py-1 ${bkSans.className}`}>ORDER TXZ{orderID}</div>
                </div>

                {/* Delivery and Customer Address */}
                <div className='text-2xl uppercase mt-1 -mb-1'>
                    {deliveryOption !== undefined && <DeliveryLine deliveryOption={deliveryOption} />}
                </div>
                <CustomerAddress deliveryOption={deliveryOption} userAddress={userAddress} />
            </div>

            {/* Separator Line */}
            <div className='flex justify-center mb-1'>
                <div className='hidden lg:flex mx-auto text-center text-sm mt-1'>===============================================</div>
                <div className='lg:hidden text-center text-sm mt-1'>=======================================</div>
            </div>

            {/* Items List */}
            <ul className={`text-base px-12 ${bkSans.className}`}>
                {items && items.map((item, index) => (
                    <li key={index} className='flex justify-between mb-0 py-0'>
                        <div className='flex mr-2'>
                            <div className='-ml-2 w-3'>{itemAmounts && itemAmounts[index]}</div>
                            <div className='ml-3 uppercase'>{item}</div>
                        </div>
                        <div>
                            {(itemPrices && itemPrices[index] !== undefined) ? `$${(itemPrices[index] / 100).toFixed(2)}` : 'N/A'}
                        </div>
                    </li>
                ))}
            </ul>

            {/* Totals */}
            <div className={`flex justify-between pl-16 pr-12 text-base uppercase ${bkSans.className}`}>
                <div className='ml-0'>Subtotal</div>
                <div>{(totalPreTax !== undefined && totalPreTax !== null) ? `$${(totalPreTax/100).toFixed(2)}` : 'N/A'}</div>
            </div>
            <div className={`flex justify-between pl-16 pr-12 text-base uppercase ${bkSans.className}`}>
                <div className='ml-0'>Tax</div>
                 <div>{(tax !== undefined && tax !== null) ? `$${(tax/100).toFixed(2)}` : 'N/A'}</div>
            </div>
            <div className={`flex justify-between pl-16 pr-12 text-base uppercase font-semibold ${bkSans.className}`}>
                <div className='ml-0'>Total</div>
                <div>{(totalWithTax !== undefined && totalWithTax !== null) ? `$${(totalWithTax/100).toFixed(2)}` : 'N/A'}</div>
            </div>

            {/* Payment Method */}
            {paymentMethod !== undefined && <PaymentMethod paymentMethod={paymentMethod}/>}

            {/* Separator Line */}
            <div className='flex justify-center'>
                <div className='hidden lg:flex mx-auto text-center text-sm mt-1'>===============================================</div>
                <div className='lg:hidden text-center text-sm mt-1'>=====================================</div>
            </div>

            <div className={`text-sm uppercase text-center mt-1 ${bkSans.className}`}>
                Join our team! Visit joinbs.ca today!
            </div>
        </div>
    );
}


// This component will fetch the data based on URL search params
const SuccessContent = () => {
    // console.log('SuccessContent rendering...'); // Diagnostic log
    const searchParams = useSearchParams();
    const transactionId = searchParams.get('id');

    const [transactionData, setTransactionData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { clearCart } = useShoppingCart();

    useEffect(() => {
        // console.log('useEffect in SuccessContent running for ID:', transactionId); // Diagnostic log
        // console.log('clearCart reference:', clearCart); // Diagnostic log

        const fetchTransaction = async () => {
            // console.log('Attempting to fetch transaction with ID:', transactionId); // Diagnostic log
            if (!transactionId) {
                // console.log('No transaction ID found in useEffect.'); // Diagnostic log
                setError('Transaction ID not found in URL.');
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            setError(null); // Clear previous errors on new fetch attempt

            try {
                const result = await getTransactionById(transactionId);

                // console.log('Fetch result:', result); // Diagnostic log

                if (result?.message) {
                    setError(result.message);
                    setTransactionData(null);
                } else if (result?.success) {
                    setTransactionData(result.success);
                    // Clear cart only AFTER successfully getting the transaction data
                    // console.log('Transaction data fetched successfully. Clearing cart.'); // Diagnostic log
                    
                    // --- ADD THIS LOG ---
                    // console.log("Fetched transactionData.orderDate:", result.success.orderDate);
                    // console.log("Full fetched data:", result.success); // Also log the whole object
                    // --------------------

                    clearCart();
                    setError(null); // Ensure error is null on success
                } else {
                     // Handle case where success is true but data is null/undefined or empty array
                     setError('Transaction data not found or is empty.');
                     setTransactionData(null);
                }
            } catch (err) {
                console.error("Client-side fetch error:", err);
                setError('An error occurred while fetching transaction data.');
                setTransactionData(null);
            } finally {
                setIsLoading(false);
                // console.log('Fetch process finished.'); // Diagnostic log
            }
        };

        fetchTransaction();

    // MOST LIKELY FIX: Change dependency array.
    // Rely only on transactionId, as it's the stable input for the fetch.
    // Removing clearCart prevents clearCart state updates from triggering re-fetches.
    }, [transactionId]); // <-- Dependency array changed

    // console.log('Current state:', { transactionData, isLoading, error }); // Diagnostic log outside effect


    if (isLoading) {
        return <div className={`${bkReg.className} text-center py-8 text-stone-700`}>Loading transaction details...</div>;
    }

    if (error) {
        return <div className={`${bkReg.className} text-red-600 text-center py-8`}>Error: {error}</div>;
    }

    // Check transactionData before destructuring and rendering
    if (!transactionData) {
        // This case might be hit if error is null but data is also null/undefined
        return <div className={`${bkReg.className} text-stone-600 text-center py-8`}>Transaction details not available.</div>;
    }

    // Render the ReceiptContent component with fetched data
    // Destructure data safely
    const { id, order_id, delivery_method, items, item_amounts, item_prices, total_amount, tax, total_with_tax, date: orderDate, payment_method, customer_add, location_add, location_tel } = transactionData;

    return (
        <ReceiptContent
            id={id}
            orderID={order_id}
            deliveryOption={delivery_method}
            items={items}
            itemAmounts={item_amounts}
            itemPrices={item_prices}
            totalPreTax={total_amount}
            tax={tax}
            totalWithTax={total_with_tax}
            locationAddress={location_add}
            locationTel={location_tel}
            paymentMethod={payment_method}
            dateValue={orderDate}
            userAddress={customer_add} // Pass the customer address string
        />
    );
};

export default SuccessContent;