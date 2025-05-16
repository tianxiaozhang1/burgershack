// actions.ts
'use server';

import postgres from 'postgres';
// You might need a library to generate UUIDs, e.g., 'uuid'
// npm install uuid / yarn add uuid
import { v4 as uuidv4 } from 'uuid'; // Import uuid

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function addSingleTransaction(transactionData) {
  console.log("REACHED addSingleTransaction function");

  try {
    // Generate a unique order_id if not already present or is a placeholder
    const finalOrderId = transactionData.order_id === 'TXZ888' || !transactionData.order_id
      ? uuidv4() // Generate a new UUID
      : transactionData.order_id; // Use provided order_id if it's dynamic

    const datePart = new Date().toISOString().split('T')[0];
    const timePart = new Date().toISOString().split('T')[1].split('.')[0];
    const currentDateTime = datePart + ' ' + timePart;

    console.log("Inserting with customerId:", transactionData.customer_id, "and generated order_id:", finalOrderId);

    const result = await sql`
      INSERT INTO transactions (
        customer_id, order_id, delivery_method, items, item_amounts, item_prices,
        total_amount, tax, total_with_tax, date, payment_method,
        location_add, location_tel, customer_add
      )
      VALUES (
        ${transactionData.customer_id},
        ${finalOrderId}, -- Use the dynamically generated/provided order_id
        ${transactionData.delivery_method},
        ${transactionData.items},
        ${transactionData.item_amounts},
        ${transactionData.item_prices},
        ${transactionData.total_amount},
        ${transactionData.tax},
        ${transactionData.total_with_tax},
        ${currentDateTime}, -- Using the calculated date
        ${transactionData.payment_method},
        ${transactionData.location_add},
        ${transactionData.location_tel},
        ${transactionData.customer_add}
      )
      -- Keep ON CONFLICT if order_id has a unique constraint and you want silent failure on accidental duplicates
      ON CONFLICT (order_id) DO NOTHING
      RETURNING *;
    `;

    if (result && result.length > 0) {
      console.log("Single transaction inserted successfully:", result[0]);
      return { success: result[0] };
    } else {
       console.log("Transaction already exists (due to ON CONFLICT) or insert failed silently with order_id:", finalOrderId);
       // You might return a specific error or success message for this case
       return { message: `Transaction with order ID ${finalOrderId} already exists or could not be inserted.` };
    }

  } catch (error) {
    console.error('Error adding single transaction:', error);
    return { message: 'Database Error: Failed to add transaction.' };
  }
}