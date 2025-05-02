// import CartItem from "./CartItem";
// import CheckoutItem from "./CheckoutItem";

// import CheckoutButton from "./CheckoutButton";
// import { useShoppingCart } from "use-shopping-cart";

// import localFont from 'next/font/local'
// const bkReg = localFont({ src: '../fonts/Flame-Regular.ttf' })

// const items = [];

// export default function CheckoutPart() {
//   const { shouldDisplayCart, cartCount, cartDetails, totalPrice } = useShoppingCart();
//   return (
//     <div
//       className={`bg-white border-4 border-slate-100 rounded-3xl flex flex-col md:w-full py-4 px-4 rounded-md opacity-100`}
//     >
//       {cartCount && cartCount > 0 ? (
//         <>
//           {Object.values(cartDetails ?? {}).map((entry) => (
//             <CheckoutItem key={entry.id} item={entry} />
//           ))}
//           {/* <CheckoutButton /> */}
//         </>
//       ) : (
//         <div className={`text-center cursor-default ${bkReg.className}`}>You have no items in your cart</div>
//       )}
//     </div>
//   );
// }