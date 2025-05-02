import { useShoppingCart } from "use-shopping-cart";
import { formatCurrencyString } from "use-shopping-cart";
import Image from "next/image";

import localFont from 'next/font/local'
const bkBold = localFont({ src: '../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../fonts/FlameSans-Regular.ttf' })
// import TrashSVG from '../components/trash.svg'

const TrashIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash mt-0.25" width="26"
          height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentcolor" fill="none"
          strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 7l16 0"></path>
          <path d="M10 11l0 6"></path>
          <path d="M14 11l0 6"></path>
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
      </svg>
    )
}

export default function CartItem({ item }) {
  const { name, emoji, quantity, price, image } = item;
  const { removeItem } = useShoppingCart();

  const removeItemFromCart = () => {
    removeItem(item.id);
  };

  return (
    <div className={`flex items-center gap-4 mb-3 `}>
      {/* <p className="text-4xl">{emoji}</p> */}
      <Image alt="delete icon" src={image} className="w-1/6" />
      {/* width={40} height={40} */}
      <div className="flex items-center">
        <div className={`${bkReg.className}`}>{name}</div>
        <span className="text-xs mt-1">&nbsp;({quantity})</span>
      </div>
      <div className="ml-auto text-sm font-semibold text-mainText mt-1.5">
        {formatCurrencyString({ value: price, currency: "CAD" })}
      </div>
      <button
        onClick={() => removeItemFromCart()}
        className=" transition-colors rounded-full duration-500 pr-1 text-stone-400 hover:text-[#4d2316] hover:#fff"
      >
        <TrashIcon alt="delete icon" className="w-4 mt-2" />
        {/* width={20} height={20} */}
      </button>
    </div>
  );
}