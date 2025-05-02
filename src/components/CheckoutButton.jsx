import { useState } from "react";
import Link from 'next/link'
import { useShoppingCart } from "use-shopping-cart";

import localFont from 'next/font/local'
const bkBold = localFont({ src: '../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../fonts/FlameSans-Regular.ttf' })

export default function CheckoutButton() {
  const [status, setStatus] = useState("idle");
  const { redirectToCheckout, handleCartClick, cartCount, totalPrice } = useShoppingCart();

  async function handleClick(event) {
    event.preventDefault();
    if (cartCount > 0) {
      setStatus("loading");
      try {
        const result = await redirectToCheckout();
        if (result?.error) {
          console.error(result);
          setStatus("redirect-error");
        }
      } catch (error) {
        console.error(error);
        setStatus("redirect-error");
      }
    } else {
      setStatus("no-items");
    }
  }

  return (
    <article className={`mt-1 flex flex-col ${bkReg.className} md:text-lg`}>
        <div className={`${totalPrice && totalPrice < 30 ? `flex` : "hidden"} text-red-700 text-xs mb-3 h-5 text-center`}>
          {totalPrice && totalPrice < 30
            ? "You must have at least $0.30 in your basket"
            : cartCount && cartCount > 50
            ? "You cannot have more than 50 items"
            : status === "redirect-error"
            ? "Unable to redirect to Stripe checkout page"
            : status === "no-items"
            ? "Please add some items to your cart"
            : null}
        </div>

        <Link href="/checkout">
            <button
                // onClick={handleClick}
                onClick={() => handleCartClick()}
                
                className="bg-mainBG hover:bg-mainText hover:text-white transition-colors duration-500 text-mainText py-3 px-5 rounded-md w-full disabled:bg-slate-300 cursor-pointer disabled:cursor-not-allowed disabled:text-white"
                disabled={
                  (totalPrice && totalPrice < 30) ||
                  (cartCount && cartCount > 50) ||
                  status == "no-items"
                    ? true
                    : false
                }
              >
                {status !== "loading" ? "Proceed to checkout" : "Loading..."}
            </button>
        </Link>
    </article>
  );
}