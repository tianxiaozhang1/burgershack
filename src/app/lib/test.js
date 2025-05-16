<div style={{ padding: '20px' }}>
      <h1>Your Transaction History</h1>

      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {transactions.map(transaction => (
            <li
              key={transaction.id} // Use the unique transaction ID as the key
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                marginBottom: '20px',
                padding: '15px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <h2>Order #{transaction.order_id}</h2>
              <p><strong>Transaction ID (DB):</strong> {transaction.id}</p>
              {/* Format date and time */}
              <p><strong>Date:</strong> {new Date(transaction.date).toLocaleString()}</p>
              {/* Format total amount */}
              <p><strong>Total Amount:</strong> ${(transaction.total_with_tax / 100).toFixed(2)}</p>

              {/* Use the PaymentMethod component */}
              <PaymentMethod paymentMethod={transaction.payment_method} />

              <h3>Items:</h3>
              {/* Reuse the item display logic from the success page */}
              {Array.isArray(transaction.items) && Array.isArray(transaction.item_amounts) && Array.isArray(transaction.item_prices) && transaction.items.length === transaction.item_amounts.length && transaction.items.length === transaction.item_prices.length ? (
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
                    {transaction.items.map((item, index) => (
                        <li
                            key={index} // Using index as key within the inner list is acceptable here
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '5px',
                                paddingBottom: '5px',
                                borderBottom: '1px dashed #ccc',
                                fontSize: '0.9em' // Make item details slightly smaller
                            }}
                        >
                            {/* Left side: Quantity and Item Name */}
                            <div style={{ marginRight: '10px' }}>
                                 <span style={{ fontWeight: 'bold', marginRight: '5px' }}>{transaction.item_amounts[index]}</span>
                                 <span>{item}</span>
                            </div>

                            {/* Right side: Item Price */}
                            <div style={{ fontWeight: 'bold' }}>
                                ${(transaction.item_prices[index] / 100).toFixed(2)} {/* Divide by 100 */}
                            </div>
                        </li>
                    ))}
                </ul>
              ) : (
                  <p style={{ fontSize: '0.9em', color: '#666' }}>Item details not available or incomplete for this transaction.</p>
              )}

              {/* Display other details */}
              <p><strong>Delivery Method:</strong> {transaction.delivery_method}</p> {/* Map this to a human-readable string */}
              <p><strong>Your Address:</strong> {transaction.customer_add}</p>
              <p><strong>Pickup Location:</strong> {transaction.location_add} (Tel: {transaction.location_tel})</p>

            </li>
          ))}
        </ul>
      )}
    </div>