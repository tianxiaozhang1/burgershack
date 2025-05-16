'use client';

import { useTransition, useState } from 'react';
// Import the new function name
import { addSingleTransaction } from '../lib/actions'; // Adjust the import path as needed

export default function CheckoutPage() {
  const [isPending, startTransition] = useTransition();
  const [statusMessage, setStatusMessage] = useState(null);
  // State to hold the data for the single transaction you want to save
  const [singleTransactionData, setSingleTransactionData] = useState({
      customer_id: 'some-customer-id', // Replace with actual data source
      
      delivery_method: 8, // Replace with actual data
      items: ["Double Monster", "Chicken Tendercrisp", "Flat White", "Mozzarella Sticks"], // Replace with actual data
      item_amounts: [8, 8, 8, 8], // Replace with actual data
      item_prices: [888, 888, 888, 888], // Replace with actual data
      total_amount: 8888, // Replace with actual data
      tax: 888, // Replace with actual data
      total_with_tax: 9776, // Replace with actual data
      delivery_method: 8,
      // Generate date here or in the Server Action, but pass it consistently
      date: new Date().toISOString(), // Example: using ISO string
      location_add: "22 Dundas St E Toronto, ON M5B 2G9", // Replace with actual data
      location_tel: "4168888888", // Replace with actual data
      customer_add: "88 Cluny Ave, Toronto, ON M4W 1S4", // Replace with actual data
      order_id: 888, // Replace with actual data
  });


  const handleCheckout = async () => {
    setStatusMessage(null);

    // You need to get the actual transaction data here from your component's state, props, or other source
    const transactionToSave = {
        ...singleTransactionData, // Use the data from your state
        // You might dynamically generate/get some fields here before saving
        date: new Date().toISOString(), // Ensure date is current if needed
        customer_id: '8888', // Example of dynamic data
        order_id: 888, // Example of dynamic data
        // ... other dynamic data
    };


    startTransition(async () => {
      // Call the new function and pass the single transaction object
      const result = await addSingleTransaction(transactionToSave);

      if (result?.message) {
        setStatusMessage({ type: 'error', text: result.message });
      } else if (result?.success) {
        setStatusMessage({ type: 'success', text: `Transaction recorded successfully! ID: ${result.success.id}` });
        // You might want to clear the transaction data state or redirect
      }
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      {/* Display or input fields for your transaction data */}
      {/* For this example, the data is hardcoded in useState */}

      <button
        onClick={handleCheckout}
        disabled={isPending}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: isPending ? 'not-allowed' : 'pointer' }}
      >
        {isPending ? 'Processing...' : 'Complete Purchase'}
      </button>

      {statusMessage && (
        <p style={{ color: statusMessage.type === 'error' ? 'red' : 'green' }}>
          {statusMessage.text}
        </p>
      )}

      {/* ... rest of your component */}
    </div>
  );
}

// 'use client';

// import { useTransition, useState } from 'react';
// import { addTransactions } from '../lib/actions'

// const singleTransaction = [
//     {
//         customer_id: "8888",
//         order_id: "TXZ8888",
//         delivery_method: 8,
//         items: ["Beef Wrap", "Vege Wrap", "Strawberry Milkshake"],
//         item_amounts: [1, 1, 1],
//         prices: [888, 888, 888],
//         pretax: 8888,
//         tax: 286,
//         total: 2483,
//         date: '2025-05-06 19:25:10',
//         location_add: "10 Dundas St E Toronto, ON M5B 2G9",
//         location_tel: "4169876532",
//         customer_add: "21 Cluny Ave, Toronto, ON M4W 1S4"
//     }
// ]

// export default function CheckoutPage() {
//   // useTransition hook to handle pending state for server actions
//   const [isPending, startTransition] = useTransition();
//   const [statusMessage, setStatusMessage] = useState(null); // State to show feedback

//   const handleCheckout = async () => {
//     setStatusMessage(null);
//     // const customerId = '1234'; // Get actual customer ID

//     startTransition(async () => {
//       const result = await addTransactions(singleTransaction); 

//       if (result?.message) {
//         setStatusMessage({ type: 'error', text: result.message });
//       } else if (result?.success) {
//         setStatusMessage({ type: 'success', text: 'Transaction recorded successfully!' });
//         // Handle success (e.g., redirect)
//       }
//     });

    
// };

// //   const handleCheckout = async () => {
// //     setStatusMessage(null); // Clear previous messages

// //     // startTransition allows the UI to remain responsive while the action is pending
// //     startTransition(async () => {
// //       // Call your server action directly
// //       // Your createTransaction function currently doesn't accept arguments,
// //       // but if it did, you would pass them here: await createTransaction(data);
// //       const result = await createTransaction();

// //       // Handle the result returned by the server action
// //       if (result?.message) {
// //         // Assuming your server action returns { message: '...' } on error
// //         setStatusMessage({ type: 'error', text: result.message });
// //       } else {
// //         setStatusMessage({ type: 'success', text: 'Transaction recorded successfully!' });
// //         // You might want to do something else on success, like redirect or clear cart
// //       }
// //     });
// //   };

//   return (
//     <div>
//       <h1>Checkout</h1>
//       {/* Your other checkout content */}

//       <button
//         onClick={handleCheckout}
//         disabled={isPending} // Disable the button while the action is running
//         style={{ padding: '10px 20px', fontSize: '16px', cursor: isPending ? 'not-allowed' : 'pointer' }}
//       >
//         {isPending ? 'Processing...' : 'Complete Purchase'}
//       </button>

//       {/* Display feedback messages */}
//       {statusMessage && (
//         <p style={{ color: statusMessage.type === 'error' ? 'red' : 'green' }}>
//           {statusMessage.text}
//         </p>
//       )}

//       {/* ... rest of your component */}
//     </div>
//   );
// }