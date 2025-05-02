'use client'

import { CartProvider } from "use-shopping-cart";
 
export default function CartProviderTwo({ children }) {
    return (
        <CartProvider
            mode="payment"
            // cartMode="client-only"
            // Connects to your Stripe account
            // stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
            // Redirected here after successful payments
            successUrl={`/success`}
            // Redirected here when you click back on Stripe Checkout
            cancelUrl={`/?success=false`}
            currency="CAD"
            // Only customers from UK will be able to purchase
            // Having this setting means that we will capture shipping address
            allowedCountries={["CA"]}
            // Enables local storage
            shouldPersist={true}
            >

            {children}

        </CartProvider>
    )
}