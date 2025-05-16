import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// async function listTransactions() {
// 	const data = await sql`
//     SELECT transactions.total_with_tax
//     FROM transactions
//     WHERE transactions.total_with_tax = 3836;
//   `;

// 	return data;
// }

async function listTransactions() {
    try {
      const data = await sql`
        SELECT
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
          location_add,
          location_tel,
          customer_add
        FROM transactions
        WHERE customer_id = '1234';
      `;
  
      console.log(`Found ${data.length} transactions with total_with_tax = 3836`);
      // You can also log the data itself if needed
      // console.log(data);
  
  
      return data; // This will be an array of transaction objects
    } catch (error) {
      console.error('Error listing transactions:', error);
      throw error; // Or handle the error as appropriate for your application
    }
  }

export async function GET() {
  try {
  	return Response.json(await listTransactions());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
