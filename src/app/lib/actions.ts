'use server';
import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function addSingleTransaction(transactionData) {
  console.log("REACHED addSingleTransaction function");
  // Note: We no longer log transactionData.order_id here as it's generated on the server
  console.log("Received transaction data (excluding server-generated order_id):", transactionData);


  // Remove validation for order_id as it's generated on the server
  if (!transactionData || !transactionData.customer_id) {
      console.error("Validation failed: Missing required transaction data (customer_id).");
      return { message: 'Validation Error: Missing required transaction data (customer_id).' };
  }


  try {
    // Use a database transaction to safely get the max ID and insert
    const result = await sql.begin(async (sql) => {

        // 1. Find the current maximum order_id
        const maxOrderIdResult = await sql`
            SELECT MAX(order_id) FROM transactions;
        `;

        // 2. Calculate the new order_id
        const maxOrderId = maxOrderIdResult[0].max;
        const newOrderId = maxOrderId === null ? 1 : maxOrderId + 1; // Start at 1 if table is empty

        console.log(`Calculated new order_id: ${newOrderId}`);

        // 3. Insert the new transaction with the calculated order_id
        //    Make sure property names match what you pass in transactionData
        const insertResult = await sql`
          INSERT INTO transactions (
            customer_id,
            order_id,
            delivery_method,
            items,
            item_amounts,
            item_prices,
            total_amount,
            tax,
            total_with_tax,
            date,
            payment_method,
            location_add,
            location_tel,
            customer_add
          )
          VALUES (
            ${transactionData.customer_id},
            ${newOrderId}, 
            ${transactionData.delivery_method},
            ${transactionData.items},
            ${transactionData.item_amounts},
            ${transactionData.item_prices},
            ${transactionData.total_amount},
            ${transactionData.tax},
            ${transactionData.total_with_tax},
            ${transactionData.date},
            ${transactionData.payment_method},
            ${transactionData.location_add},
            ${transactionData.location_tel},
            ${transactionData.customer_add}
          )
          -- You can keep ON CONFLICT (order_id) DO NOTHING here as a safeguard
          -- although with the transaction and incrementing ID, conflicts should be rare
          ON CONFLICT (order_id) DO NOTHING
          RETURNING *; -- Add RETURNING * to get the inserted row back
        `;

        // Return the result of the insert query from the transaction
        return insertResult;
    });

    // After the transaction, check the result
    if (result && result.length > 0) {
      console.log("Single transaction inserted successfully:", result[0]);
      return { success: result[0] }; // Return the inserted transaction data
    } else {
       console.log("Transaction already exists (due to ON CONFLICT) or insert failed silently.");
       // This case is less likely with the incrementing ID but still possible with ON CONFLICT
       return { message: 'Transaction already exists or could not be inserted.' };
    }


  } catch (error) {
    console.error('Error adding single transaction:', error);
    // Check for specific constraint violation errors if order_id should be unique
    if (error.code === '23505') { // PostgreSQL unique_violation error code
         console.error("Unique constraint violation for order_id.");
         return { message: `Database Error: A transaction with this order ID might already exist.` };
     }
    return { message: 'Database Error: Failed to add transaction.' };
  }
}

export async function getTransactionById(id) {
  console.log(`REACHED getTransactionById function with ID: ${id}`);

  if (!id || typeof id !== 'string') {
      console.error("Validation failed: Invalid transaction ID.");
      return { message: 'Validation Error: Invalid transaction ID.' };
  }

  try {
      const result = await sql`
          SELECT * FROM transactions WHERE id = ${id};
      `;

      if (result && result.length > 0) {
          console.log("Transaction found:", result[0]);
          return { success: result[0] }; // Return the found transaction data
      } else {
          console.log(`Transaction with ID ${id} not found.`);
          return { message: 'Transaction not found.' };
      }

  } catch (error) {
      console.error('Error fetching transaction by ID:', error);
      return { message: 'Database Error: Failed to fetch transaction.' };
  }
}

export async function getAllTransactions() {
  console.log("REACHED getAllTransactions function");

  try {
      // Fetch all transactions, ordered by date descending (most recent first)
      const transactions = await sql`
          SELECT * FROM transactions ORDER BY date DESC;
      `;

      console.log(`Fetched ${transactions.length} transactions`);

      // The 'postgres' library returns an array of row objects directly
      return { success: transactions };

  } catch (error) {
      console.error('Error fetching all transactions:', error);
      return { message: 'Database Error: Failed to fetch transactions.' };
  }
}
