import React from 'react';
import Image from "next/image";
import localFont from 'next/font/local';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Import the local fonts (assuming they are in '../../fonts/')
const bkBold = localFont({ src: '../../fonts/Flame-Bold.ttf' });
const bkReg = localFont({ src: '../../fonts/Flame-Regular.ttf' });
const bkSans = localFont({ src: '../../fonts/FlameSans-Regular.ttf' }); // Added bkSans for body text

// Assume this function exists to fetch user data
// You will need to implement this function in your actions file or elsewhere
// It should return an object like { name: '...', phone: '...', address: '...' }
import { getAllTransactions /* , getUserInfo */ } from '../lib/actions'; // Uncomment getUserInfo if it exists

// Define the payment method mapping
const paymentMethodMap = {
    0: "Default Card",
    1: "MasterCard",
    2: "American Express",
    3: "Visa",
    // Add other payment methods if needed
};

// Define the delivery method mapping and display logic
const renderDeliveryMethod = (method) => {
    // Adjusted to correctly apply bkReg.className
    const baseRightColClass = `w-full text-end font-semibold ${bkReg.className}`; // Class for cases 0, 1, 2, apply bkReg here
    const baseFlexLayoutClass = 'w-full flex justify-between'; // Class for cases 4-7 and default
    const baseLeftColClass = `w-6/12 ${bkReg.className}`; // Apply bkReg to left column text too
    const baseRightColFlexClass = `w-6/12 text-end font-semibold ${bkReg.className}`; // Apply bkReg to right column text too

    switch (method) {
        case 0:
            // Use the correct class name application
            return <div className={baseRightColClass}>Dine In</div>;
        case 1:
            return <div className={baseRightColClass}>Drive Thru</div>;
        case 2:
            return <div className={baseRightColClass}>Pick Up</div>;
        case 4: // UberEats
            return (
                <div className={baseFlexLayoutClass}>
                    <div className={baseLeftColClass}>Delivery</div>
                    <div className={baseRightColFlexClass}>
                        <span className="text-[#05c167]">Uber</span>
                        <span className="text-[#000]">Eats</span>
                    </div>
                </div>
            );
        case 5: // DoorDash
            return (
                <div className={baseFlexLayoutClass}>
                    <div className={baseLeftColClass}>Delivery</div>
                    <div className={baseRightColFlexClass}>
                        <span className="text-[#ff3008]">DoorDash</span>
                    </div>
                </div>
            );
        case 6: // SkipTheDishes
            return (
                 <div className={baseFlexLayoutClass}>
                    <div className={baseLeftColClass}>Delivery</div>
                    <div className={baseRightColFlexClass}>
                        <span className="text-[#FF8000]">SkipTheDishes</span>
                    </div>
                </div>
            );
        case 7: // GrubHub
             return (
                 <div className={baseFlexLayoutClass}>
                    <div className={baseLeftColClass}>Delivery</div>
                    <div className={baseRightColFlexClass}>
                         <span className="text-[#f63440]">GrubHub</span>
                     </div>
                 </div>
            );
        default:
            // Handle unknown delivery methods
            return (
                <div className={baseFlexLayoutClass}>
                    <div className={baseLeftColClass}>Delivery Method</div>
                    <div className={baseRightColFlexClass}>
                        Unknown ({method})
                    </div>
                </div>
            );
    }
};


export default async function Profile() {

    // --- Data Fetching ---
    // Assuming you have a way to get the logged-in user's ID or session
    // For demonstration, we'll fetch both transactions and user info concurrently
    // You might need to pass user identification (like user ID from a session) to these functions

    // Replace with actual user data fetching logic
    const fetchUserData = async () => {
        // In a real app, you would fetch the current user's data here
        // e.g., const userData = await getUserInfo(userId);
        // For this example, return specific placeholder data
        return {
            name: 'Ronald Sanders',
            phone: '416-432-5678',
            address: '21 Cluny Ave, Toronto, ON M4W 1S4'
        };
    };

    const [transactionsResult, userData] = await Promise.all([
        getAllTransactions(),
        fetchUserData() // Call your user data fetching function
    ]);

    // --- Error Handling ---
    if (transactionsResult?.message) {
        // Handle error case for transactions
        return <div className="text-red-600 text-center py-8">Error loading transactions: {transactionsResult.message}</div>;
    }
    // Add error handling for user data fetching if necessary
    // if (!userData || userData.error) { ... }


    const transactions = transactionsResult?.success || []; // Get the array of transactions

    // --- CSS Classes ---
    const categoryBanner = "h-18 lg:h-22 xl:h-32 2xl:h-42 text-2xl lg:text-3xl xl:text-4xl flex justify-center items-center cursor-default";
    const sectionHeaderCSS = `py-3 rounded-3xl flex justify-center items-center text-xl lg:text-2xl text-center uppercase`; // Generic header style
    const cardCSS = `mx-4 lg:mx-auto my-3 lg:max-w-[800px] bg-stone-50 shadow-md rounded-xl px-6 lg:px-8 py-4 text-base lg:text-xl ${bkReg.className}`; // Adjusted padding/rounding slightly, used bkReg
    const itemDetailCSS = `flex my-1 text-stone-800 ${bkSans.className}`; // Use bkSans for item details
    const totalCSS = `flex my-1 text-stone-800 justify-between font-bold ${bkReg.className}`; // Bold total


    return (
        // Use the light cream/tan background
        <div className={`bg-[#f7f1e7] min-h-screen`}>
            <Header/>

            <div className='w-full'>

                {/* Profile Banner */}
                <div className={`${bkReg.className}`}>
                    <div className={`bg-[#4c2216] ${categoryBanner} text-[#f7f1e7]`}>
                         My Profile
                    </div>
                </div>

                {/* Main content area, centered and limited width */}
                <div className='lg:max-w-[1600px] mx-auto mb-8 px-4 lg:px-0'> {/* Added horizontal padding for smaller screens */}

                    {/* --- User Information Section --- */}
                    <div className={`${bkReg.className} mt-6`}> {/* Added margin-top */}
                         <div className={`bg-[#4c2216] lg:w-[800px] my-4 mx-auto text-[#f7f1e7] cursor-default ${sectionHeaderCSS}`}> {/* Consistent header style */}
                             Account Information
                         </div>
                    </div>

                    {userData ? (
                        <div className={`${cardCSS} ${bkReg.className} space-y-2`}> {/* Reused card style, added vertical space */}
                            <p><span className="font-bold text-[#4c2216]">Name:</span> {userData.name}</p>
                            <p><span className="font-bold text-[#4c2216]">Phone:</span> {userData.phone}</p>
                            <p><span className="font-bold text-[#4c2216]">Address:</span> {userData.address}</p>
                        </div>
                    ) : (
                        // Handle case where user data is not available
                        <div className={`${cardCSS} text-stone-600`}>
                            <p>User information not available.</p>
                        </div>
                    )}


                    {/* --- Order History Section --- */}
                    <div className={`${bkReg.className}`}>
                        <div className={`bg-[#318636] lg:w-[800px] my-4 mx-auto text-white cursor-default ${sectionHeaderCSS}`}>
                            Order History
                        </div>
                    </div>

                    {transactions.length === 0 ? (
                        // Styled the 'no transactions' message
                        <div className={`${cardCSS} text-center text-stone-600 ${bkReg.className}`}>
                             No transactions found.
                        </div>
                        ) : (
                        <div>
                            {transactions.map(transaction => {
                                // --- Adjust transaction date/time by subtracting 4 hours ---
                                const orderDate = new Date(transaction.date);
                                orderDate.setTime(orderDate.getTime() - (4 * 60 * 60 * 1000)); // Subtract 4 hours
                                const formattedOrderTime = orderDate.toLocaleString();
                                // --------------------------------------------------------

                                return (
                                    <div key={transaction.order_id} className={`${cardCSS}`}>

                                        {/* Order Header */}
                                        <div className={`flex flex-col sm:flex-row justify-between text-stone-500 mb-2 pb-2 border-b border-stone-200 ${bkSans.className} text-sm sm:text-base`}> {/* Added small screen flex, border */}
                                            <h2>Order TXZ{transaction.order_id}</h2>
                                            {/* Display the adjusted and formatted time */}
                                            <p>{formattedOrderTime}</p>
                                        </div>

                                        {/* Items Header */}
                                        <div className={`flex text-[#4c2216] ${bkSans.className} font-semibold mb-1`}> {/* Used bkSans, added bottom margin/weight */}
                                            <div className='w-1/12 '>Qty</div>
                                            <div className='w-8/12'>Item</div> {/* Changed from empty div */}
                                            <div className='w-3/12 text-end'>Amount</div>
                                        </div>

                                        {/* Items List */}
                                        {transaction.items.map((item, index) => (
                                            <div key={`${transaction.order_id}-${index}`} className={`${itemDetailCSS}`}> {/* Added compound key for safety */}
                                                <div className='w-1/12 '>{transaction.item_amounts[index]}</div>
                                                <div className='w-8/12'>{item}</div>
                                                <div className='w-3/12 text-end'>${(transaction.item_prices[index] / 100).toFixed(2)}</div>
                                            </div>
                                        ))}

                                        {/* Totals and Payment */}
                                        <div className="mt-4 pt-2 border-t border-stone-200 space-y-1"> {/* Added top border and spacing */}
                                            <div className={totalCSS}>
                                                <div className='w-6/12 '>Total</div>
                                                <div className='w-6/12 text-end'>${(transaction.total_with_tax / 100).toFixed(2)}</div>
                                            </div>

                                            <div className={`${itemDetailCSS} justify-between`}> {/* Reused itemDetailCSS */}
                                                <div className='w-6/12 '>Payment Method</div>
                                                {/* Use the map to display the payment method string */}
                                                <div className='w-6/12 text-end font-semibold'>
                                                    {paymentMethodMap[transaction.payment_method] || `Unknown (${transaction.payment_method})`}
                                                </div>
                                            </div>

                                            {/* Display Delivery Method using the new rendering function */}
                                            {/* Only render if delivery_method is defined (covers 0, 1, 2, 4-7 and others) */}
                                            {transaction.delivery_method !== undefined && (
                                                 <div className={`${itemDetailCSS}`}> {/* Use itemDetailCSS for baseline, renderDeliveryMethod handles internal layout */}
                                                     {renderDeliveryMethod(transaction.delivery_method)}
                                                 </div>
                                            )}

                                            {/* Display Address/Location details conditionally */}
                                            {/* Assumes address/location is relevant for methods > 2 (4-7) */}
                                            {transaction.delivery_method > 2 && (
                                                <> {/* Use a fragment to group conditional items */}
                                                    {transaction.customer_add && (
                                                        <div className={`${itemDetailCSS} justify-between`}>
                                                            <div className='w-6/12'>Delivery Address</div>
                                                            <div className='w-6/12 text-end'>{transaction.customer_add}</div>
                                                        </div>
                                                    )}
                                                    {transaction.location_add && (
                                                        <div className={`${itemDetailCSS} justify-between`}>
                                                            {/* Change label based on delivery method type */}
                                                            <div className='w-6/12'>
                                                                {transaction.delivery_method >= 4 && transaction.delivery_method <= 7
                                                                    ? 'Restaurant Location'
                                                                    : 'Pickup Location'} {/* Fallback to Pickup Location for any other method > 2 */}
                                                            </div>
                                                            <div className='w-6/12 text-end'>{transaction.location_add}</div>
                                                        </div>
                                                    )}
                                                    {transaction.location_tel && (
                                                        <div className={`${itemDetailCSS} justify-between`}>
                                                            <div className='w-6/12'>Location Phone</div>
                                                            <div className='w-6/12 text-end'>{transaction.location_tel}</div>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </div>


                                    </div>
                                ); // End of transaction map return
                            })}
                        </div>
                    )}
                </div>

                 {/* Removed the hidden div with inline styles */}

            </div>

            <Footer/>

        </div>
    )
}