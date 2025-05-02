import Image from "next/image";

// import { CartProvider } from "use-shopping-cart";

import { Graduate, Patua_One, Inter } from 'next/font/google'
const graduate = Graduate({ subsets: ['latin'], weight: ['400'], })
const patua_one = Patua_One({ subsets: ['latin'], weight: ['400'], })
const inter = Inter({ subsets: ['latin'], weight: ['400'], })

import Header from '../components/Header';
import MainItem from '../components/MainItem';
import MainItems from '../components/MainItems';
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="bg-[#f7f1e7]">
            <div className="z-40 sticky top-0"><Header/></div>

            <MainItem/>

            <div className="z-30"><MainItems/></div>

            <div className="z-40 sticky bottom-0"><Footer/></div>            
        </div>
    );
}
