import React from 'react'
import Image from "next/image";
import localFont from 'next/font/local'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Graduate, Patua_One, Inter } from 'next/font/google'

// const graduate = Graduate({ subsets: ['latin'], weight: ['400'], })
const patua_one = Patua_One({ subsets: ['latin'], weight: ['400'], })
// const inter = Inter({ subsets: ['latin'], weight: ['400'], })

const bkBold = localFont({ src: '../../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../../fonts/FlameSans-Regular.ttf' })

import Burger1 from '../../images/burgers/burgers1.png'
import Burger2 from '../../images/burgers/burgers2.png'
import Burger3 from '../../images/burgers/burgers3.png'
import Burger4 from '../../images/burgers/burgers4.png'
import Burger5 from '../../images/burgers/burgers5.png'
import Burger6 from '../../images/burgers/burgers6.png'
import Burger7 from '../../images/burgers/burgers7.png'
import Burger8 from '../../images/burgers/burgers8.png'
import Burger9 from '../../images/burgers/burgers9.png'
import Burger10 from '../../images/burgers/burgers10.png'
import Burger11 from '../../images/burgers/burgers11.png'
import Burger12 from '../../images/burgers/burgers12.png'

import Chicken7 from '../../images/chicken/chicken1.png'
import Chicken6 from '../../images/chicken/chicken2.png'
import Chicken3 from '../../images/chicken/chicken3.png'
import Chicken4 from '../../images/chicken/chicken4.png'
import Chicken5 from '../../images/chicken/chicken5.png'
import Chicken1 from '../../images/chicken/chicken6.png'
import Chicken2 from '../../images/chicken/chicken7.png'

import Drink8 from '../../images/drinks/drink9.png'
import Drink5 from '../../images/drinks/drink2.png'
import Drink3 from '../../images/drinks/drink3.png'
import Drink4 from '../../images/drinks/drink4.png'
import Drink2 from '../../images/drinks/drink5.png'
import Drink6 from '../../images/drinks/drink6.png'
import Drink7 from '../../images/drinks/drink7.png'
import Drink1 from '../../images/drinks/drink8.png'

import Snack5 from '../../images/snacks/snacks1.png'
import Snack7 from '../../images/snacks/snacks2.png'
import Snack3 from '../../images/snacks/snacks3.png'
import Snack4 from '../../images/snacks/snacks4.png'
import Snack1 from '../../images/snacks/snacks5.png'
import Snack6 from '../../images/snacks/snacks6.png'
import Snack2 from '../../images/snacks/snacks7.png'

import Salad1 from '../../images/salads/salad1.png'
import Salad5 from '../../images/salads/salad2.png'
import Salad3 from '../../images/salads/salad3.png'
import Salad4 from '../../images/salads/salad4.png'
import Salad2 from '../../images/salads/salad5.png'
import Salad6 from '../../images/salads/salad6.png'
import Salad7 from '../../images/salads/salad7.png'
import Salad8 from '../../images/salads/salad8.png'

import Dessert1 from '../../images/desserts/dessert1.png'
import Dessert2 from '../../images/desserts/dessert2.png'
import Dessert3 from '../../images/desserts/dessert3.png'
import Dessert4 from '../../images/desserts/dessert4.png'
import Dessert5 from '../../images/desserts/dessert5.png'
import Dessert6 from '../../images/desserts/dessert6.png'
import Dessert7 from '../../images/desserts/dessert7.png'
import Dessert8 from '../../images/desserts/dessert8.png'

const burgerCategories = [
    {
        image: Burger1,
        name: "Double Cheeseburger"
    },
    {
        image: Burger2,
        name: "Double Cheese Burger"
    },
    {
        image: Burger3,
        name: "Big Monster"
    },
    {
        image: Burger4,
        name: "Monster Cheese"
    },
    {
        image: Burger5,
        name: "Long Bacon Sandwich"
    },
    {
        image: Burger6,
        name: "Long Cheeseburger"
    },
    {
        image: Burger7,
        name: "Steakhouse"
    },
    {
        image: Burger8,
        name: "Double Monster"
    },
    {
        image: Burger9,
        name: "Monster"
    },
    {
        image: Burger10,
        name: "Monster Jr Cheese"
    },
    {
        image: Burger11,
        name: "Monster Jr Gluten Free"
    },
    {
        image: Burger12,
        name: "Bacon Monster"
    },
]

const chickenCategories = [
    {
        image: Chicken1,
        name: "Crispy Chicken Cheese"
    },
    {
        image: Chicken2,
        name: "Crispy Chicken"
    },
    {
        image: Chicken3,
        name: "Chicken Tendercrisp Cheese"
    },
    {
        image: Chicken4,
        name: "Chicken Tendercrisp"
    },
    {
        image: Chicken5,
        name: "Chili Cheese Chicken"
    },
    {
        image: Chicken6,
        name: "Texas Chicken"
    },
    {
        image: Chicken7,
        name: "Long Chicken"
    },
]

const drinkCategories = [
    {
        image: Drink1,
        name: "Soft Drink"
    },
    {
        image: Drink2,
        name: "Fuzetea"
    },
    {
        image: Drink3,
        name: "Coffee"
    },
    {
        image: Drink4,
        name: "Flat White"
    },
    {
        image: Drink5,
        name: "Cappuccino"
    },
    {
        image: Drink6,
        name: "Hot Chocolate"
    },
    {
        image: Drink7,
        name: "Latte"
    },
    {
        image: Drink8,
        name: "Tea"
    },
]

const snackCategories = [
    {
        image: Snack1,
        name: "Cheesy Onion Fries"
    },
    {
        image: Snack2,
        name: "Chili Cheese Fries"
    },
    {
        image: Snack3,
        name: "Mozzarella sticks"
    },
    {
        image: Snack4,
        name: "Onion Rings"
    },
    {
        image: Snack5,
        name: "Chicken Nuggets + Dip"
    },
    {
        image: Snack6,
        name: "Plant-based Nuggets + Dip"
    },
    {
        image: Snack7,
        name: "Chilli Cheese Bites"
    },
]

const saladCategories = [
    {
        image: Salad1,
        name: "Beef wrap"
    },
    {
        image: Salad2,
        name: "Vege wrap"
    },
    {
        image: Salad3,
        name: "Halloumi wrap"
    },
    {
        image: Salad4,
        name: "BBQ chicken wrap"
    },
    {
        image: Salad5,
        name: "BBQ Plant-Based Long Chicken Wrap"
    },
    {
        image: Salad6,
        name: "Chicken Salad"
    },
    {
        image: Salad7,
        name: "Delight Salad"
    },
    {
        image: Salad8,
        name: "Halloumi Salad"
    },
]

const dessertCategories = [
    {
        image: Dessert1,
        name: "Mini Churros with Caramel Sauce"
    },
    {
        image: Dessert2,
        name: "Mini Churros with Strawberry Sauce"
    },
    {
        image: Dessert3,
        name: "Mini Churros with Chocolate Sauce"
    },
    {
        image: Dessert4,
        name: "Caramel Sundae"
    },
    {
        image: Dessert5,
        name: "Chocolate Sundae"
    },
    {
        image: Dessert6,
        name: "Sundae"
    },
    {
        image: Dessert7,
        name: "Milkshake Nesquik®"
    },
    {
        image: Dessert8,
        name: "Strawberry Milkshake"
    },
]

const categoryBanner = "h-18 lg:h-22 xl:h-32 2xl:h-42 text-2xl lg:text-3xl xl:text-4xl flex justify-center items-center cursor-default"
const categoryGrid = "px-6 md:px-0 max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-10 mx-auto mt-12 md:mt-32 md:-mb-8 lg:mt-16 xl:mt-20 xl:mb-6 mb-12"
const itemImage = "h-26 md:h-20 lg:h-42 flex items-end"
const itemText = `leading-5 md:text-xl text-center mt-2 md:mt-4 md:mb-22 lg:mt-4 lg:mb-8 ${patua_one.className}`
const categoryGallery = "max-w-56 md:max-w-72 lg:max-w-72 cursor-pointer"

function Menu() {
    return (
        <div className={`bg-mainBG`}>
            <div className="z-40 sticky top-0"><Header/></div>

            <div className={` ${bkBold.className}`}>

                <div className='bg-mainBG h-18 md:h-20 lg:h-20 xl:h-32 flex justify-center items-center'>
                    <div className='text-mainText text-3xl lg:text-4xl xl:text-6xl cursor-default'>Menu</div>
                </div>

                {/* BURGERS */}
                <div className={`bg-mainText ${categoryBanner}`}>
                    <div className='text-mainBG'>Flame-grilled burgers</div>
                </div>

                <div className={`${categoryGrid}`}>
                    {burgerCategories.map((burger, i) => {
                        return (
                            <div className={`${categoryGallery}`} key={i} >
                                <div className={`${itemImage}`}>
                                    <Image
                                        src={burger.image}
                                        alt="X"
                                        className='w-full'
                                    />
                                </div>
                                
                                <div className={`${itemText}`}>
                                    {burger.name}
                                </div>
                            </div> 
                        )
                    })}  
                </div>

                {/* CHICKEN */}
                <div className={`bg-[#cc5d20] ${categoryBanner}`}>
                
                    <div className=' text-mainBG text-4xl'>Chicken burgers</div>
                </div>
                <div className={`${categoryGrid}`}>
                    {chickenCategories.map((chicken, i) => {
                        return (
                            <div className={`${categoryGallery}`} key={i} >
                                <div className={`${itemImage}`}>
                                    <Image
                                        src={chicken.image}
                                        alt="X"
                                        className='w-full'
                                    />
                                </div>
                                
                                <div className={`${itemText}`}>
                                    {chicken.name}
                                </div>
                            </div> 
                        )
                    })}  
                </div>

                {/* DRINKS */}
                <div className={`bg-[#ce2816] ${categoryBanner}`}>
                    <div className=' text-mainBG text-4xl'>Beverages</div>
                </div>
                <div className={`${categoryGrid}`}>
                    {drinkCategories.map((drink, i) => {
                        return (
                            <div className={`${categoryGallery}`} key={i} >
                                <div className={`${itemImage}`}>
                                    <Image
                                        src={drink.image}
                                        alt="X"
                                        className='w-full'
                                    />
                                </div>
                                
                                <div className={`${itemText}`}>
                                    {drink.name}
                                </div>
                            </div> 
                        )
                    })}  
                </div>

                {/* SIDES */}
                <div className={`bg-[#b13b2e] ${categoryBanner}`}>
                    <div className=' text-mainBG'>Sides and snacks</div>
                </div>

                <div className={`${categoryGrid}`}>
                    {snackCategories.map((snack, i) => {
                        return (
                            <div className={`${categoryGallery}`} key={i} >
                                <div className={`${itemImage}`}>
                                    <Image
                                        src={snack.image}
                                        alt="X"
                                        className='w-full'
                                    />
                                </div>
                                
                                <div className={`${itemText}`}>
                                    {snack.name}
                                </div>
                            </div> 
                        )
                    })}  
                </div>

                {/* SALADS */}
                <div className={`bg-mainGreen ${categoryBanner}`}>
                    <div className=' text-mainBG'>Plant-based, salads and wraps</div>
                </div>

                <div className={`${categoryGrid}`}>
                    {saladCategories.map((salad, i) => {
                        return (
                            <div className={`${categoryGallery}`} key={i} >
                                <div className={`${itemImage}`}>
                                    <Image
                                        src={salad.image}
                                        alt="X"
                                        className='w-full'
                                    />
                                </div>
                                
                                <div className={`${itemText}`}>
                                    {salad.name}
                                </div>
                            </div> 
                        )
                    })}  
                </div>

                {/* DESSERTS */} 
                <div className={`bg-mainYellow ${categoryBanner}`}>
                    <div className=' text-mainText'>Desserts</div>
                </div>

                <div className={`${categoryGrid}`}>
                    {dessertCategories.map((dessert, i) => {
                        return (
                            <div className={`${categoryGallery}`} key={i} >
                                <div className={`${itemImage}`}>
                                    <Image
                                        src={dessert.image}
                                        alt="X"
                                        className='w-full'
                                    />
                                </div>
                                
                                <div className={`${itemText}`}>
                                    {dessert.name}
                                </div>
                            </div> 
                        )
                    })}  
                </div>

                <div className='w-full h-6 xl:h-16'></div>
            </div>

            <div className="z-40 sticky bottom-0"><Footer/></div>            
        </div>
    )
}

export default Menu
