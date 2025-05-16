import postgres from 'postgres';
import { transactions } from '../../data/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedTransactions() {
  try {
    // Create the "transactions" table if it doesn't exist
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`; // Ensure uuid extension is available if you plan to use UUIDs later

    await sql`
      CREATE TABLE IF NOT EXISTS transactions (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        customer_id VARCHAR(255) NOT NULL,
        order_id INT UNIQUE NOT NULL,
        delivery_method INT,
        items TEXT[] NOT NULL,
        item_amounts INT[] NOT NULL, 
        item_prices INT[] NOT NULL, 
        total_amount INT NOT NULL, 
        tax INT NOT NULL,
        total_with_tax INT NOT NULL, 
        payment_method INT,
        date TIMESTAMP NOT NULL,
        location_add VARCHAR(255),
        location_tel VARCHAR(255),
        customer_add VARCHAR(255)
      );
    `;

    console.log('Created "transactions" table');

    // Insert data into the "transactions" table
    const insertedTransactions = await Promise.all(
            transactions.map(async (transaction, index) => { // Added index for easier tracking
      
                  console.log(`Processing transaction ${index}:`);
                  console.log('Value for payment_method:', transaction.payment_method);
                  console.log('Type of payment_method:', typeof transaction.payment_method);
                  // Log other potentially problematic values/types if needed
                  console.log('Value for order_id:', transaction.order_id, typeof transaction.order_id); // Check if it's still INT, not INT[]
      
      
              return sql`
                INSERT INTO transactions (
                  customer_id, order_id, delivery_method, items, item_amounts, item_prices,
                  total_amount, tax, total_with_tax, payment_method, date,
                  location_add, location_tel, customer_add
                )
                VALUES (
                  ${transaction.customer_id},
                  ${transaction.order_id},
                  ${transaction.delivery_method},
                  ${transaction.items},
                  ${transaction.item_amounts},
                  ${transaction.prices},
                  ${transaction.pretax},
                  ${transaction.tax},
                  ${transaction.total},
                  ${transaction.payment_method}, -- This is parameter $10
                  ${transaction.date},
                  ${transaction.location_add},
                  ${transaction.location_tel},
                  ${transaction.customer_add}
                )
                ON CONFLICT (order_id) DO NOTHING;
              `;
            }),
          );

    console.log(`Seeded ${insertedTransactions.length} transactions`);

    return {
      createTable: 'transactions',
      insertedTransactions: insertedTransactions.length,
    };
  } catch (error) {
    console.error('Error seeding transactions:', error);
    throw error;
  }
}

export async function GET() {
    try {
      const result = await sql.begin((sql) => [
        seedTransactions(),
      ]);
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }
  