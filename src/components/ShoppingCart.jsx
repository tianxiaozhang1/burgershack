import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";
import { useShoppingCart } from "use-shopping-cart";

import localFont from 'next/font/local'
const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' })

const items = [];

export default function ShoppingCart() {
  const { shouldDisplayCart, cartCount, cartDetails, totalPrice } = useShoppingCart();
  return (
    <div
      className={`z-50 bg-white border-4 border-slate-100 flex flex-col absolute mr-0 ml-1 md:mr-9 mt-12 w-88 md:w-108 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md transition-opacity duration-500 ${
        shouldDisplayCart ? "opacity-100" : "opacity-0"
      }`}
    >
      {cartCount && cartCount > 0 ? (
        <>
          {Object.values(cartDetails ?? {}).map((entry) => (
            <CartItem key={entry.id} item={entry} />
          ))}
          <CheckoutButton />
        </>
      ) : (
        <div className={`text-center cursor-default ${bkReg.className}`}>You have no items in your cart</div>
      )}
    </div>
  );
}