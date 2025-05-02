import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import CartProviderTwo from './cart-provider'
import { GlobalProvider } from '../components/OrderContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Burger Shack",
  description: "World Famous Burgers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProviderTwo>
          <GlobalProvider>
            {children}
          </GlobalProvider>
        </CartProviderTwo>
      </body>
    </html>
  );
}
