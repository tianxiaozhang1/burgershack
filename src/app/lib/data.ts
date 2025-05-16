import postgres from 'postgres';

import {
    Transactions
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchTransactions() {
    try {
    //   console.log('Fetching revenue data...');
        const data = await sql<Transactions[]>`SELECT * FROM transactions`;
    
        return data;
    }   catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
  }