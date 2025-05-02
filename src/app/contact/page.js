// "use client"
// // import Link from "next/link"

// import React, { useEffect, useState } from 'react';// useContext
// import localFont from 'next/font/local'

// import { Graduate, Patua_One, Inter } from 'next/font/google'
// const patua_one = Patua_One({ subsets: ['latin'], weight: ['400'], })

// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// // import OpenSign from '../../components/OpenSign';

// function Contact() {
//     const middle = "flex justify-center text-center"
//     const inputLabel = "ml-1 font-semibold text-textBrown mt-2 text-lg"
//     const inputLine = "bg-white focus:bg-white border border-gray-300 text-textBrown text-2xl rounded-xl font-bold px-3 py-1.5 w-full"

//     const scheduleData = [
//         {
//             id: 1,
//             day: "Monday",
//             hours: "CLOSED"
//         },
//         {
//             id: 2,
//             day: "Tuesday",
//             hours: "12PM - 9PM"
//         },
//         {
//             id: 3,
//             day: "Wednesday",
//             hours: "12PM - 9PM"
//         },
//         {
//             id: 4,
//             day: "Thursday",
//             hours: "12PM - 9PM"
//         },
//         {
//             id: 5,
//             day: "Friday",
//             hours: "11AM - 10PM"
//         },
//         {
//             id: 6,
//             day: "Saturday",
//             hours: "11AM - 10PM"
//         },
//         {
//             id: 7,
//             day: "Sunday",
//             hours: "12PM - 9PM"
//         }
//     ]

//     let dayToday = new Date().getDay();
//     let hourToday = new Date().getHours();

//     const ScheduleList = () =>
//         <div className="w-full mt-4">
//             {scheduleData.map(({id, day, hours}) => 
//             <div key={id} className={id===dayToday ? "font-black" : "font-bold text-stone-500"}>
//                 <div className='flex'>
//                     <div className='w-1/2 md:text-xl flex justify-end text-end'>
//                         <div>
//                             <div className={`mr-2`}>{day}</div>
//                         </div>
//                     </div>
//                     <div className='w-1/2 md:text-xl mt-0 xl:-mr-8'>
//                         <div>
//                             <div className='ml-2'>{hours}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>)}
//         </div>
    
//     const [openStatus, setOpenStatus] = useState("tomorrow")
    
//     useEffect(()=>{
//         if (dayToday != 1) {
//             // FRIDAY OR SATURDAY
//             if (dayToday === 5 | dayToday === 6) {
//                 //OPENING HOURS EXCEPT LAST HOUR
//                 if (hourToday >= 11 && hourToday < 21) {
//                     setOpenStatus("open")
//                 //LAST HOUR
//                 } else if (hourToday === 21) {
//                     setOpenStatus("soon")
//                 }
//             } else {
//                 //OPENING HOURS EXCEPT LAST HOUR
//                 if (hourToday >= 12 && hourToday < 20) {
//                     setOpenStatus("open")
//                 //LAST HOUR
//                 } else if (hourToday === 20) {
//                     setOpenStatus("soon")
//                 }
//                 //SUNDAY AFTER CLOSING - NOT OPENING THE NEXT DAY
//                 if (dayToday === 7 && hourToday >= 21) {
//                     setOpenStatus("tuesday")
//                 }
//             }
//         } 
//     })

//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const [emailSent, setEmailSent] = useState(false);
//     const [emailSentMsg, setEmailSentMsg] = useState("");

//     const sendMail = async (e) => {
//         e.preventDefault();
    
//         const response = await fetch('/api/contact', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name, phone, email, message
//             })
//         })

//         setEmailSent(true)
//         if (response.status === 200) {
//             setEmailSentMsg("Thank you! Email sent.")
//         } else {
//             setEmailSentMsg("Please try again later.")
//         }
//     }

//     return (
//         <div className='bg-mainBG'>
//             <Header/>

//             <div className='lg:max-w-5xl lg:flex xl:max-w-6xl mx-auto xl:py-6'>
                
//                 <div className='lg:w-1/2 text-textBrown md:flex md:items-center flex justify-center cursor-default'>
//                     <div>
//                         <div className={`text-3xl md:text-4xl md:mb-1 font-extrabold mt-5 md:-mt-3 ${middle} ${patua_one.className}`}>
//                             <OpenSign status={openStatus} />
//                         </div>

//                         <div className='flex px-2 md:mb-2'>
//                             <ScheduleList/>
//                         </div>

//                         <div className={`text-xl md:text-3xl md:mb-0 -mb-4 font-bold mt-3 ${middle} ${patua_one.className}`}>
//                             638 Concession Street
//                         </div>
//                         <div className={`text-xl md:text-3xl md:mb-0 font-bold mt-3 lg:mt-0 ${middle} ${patua_one.className}`}>
//                             Hamilton, ON L8V 1B5
//                         </div>

//                         <div className={`text-xl md:text-3xl md:mb-1 -mb-4 font-bold mt-3 ${middle} ${patua_one.className}`}>
//                             (905)574-6996
//                         </div>
//                         <div className={`text-lg md:text-2xl md:mb-1 font-bold mt-3 xl:mt-0 ${middle} ${patua_one.className}`}>
//                             <div>
//                                 bringmesomevegan@gmail.com
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <form onSubmit={sendMail} className='lg:w-1/2 flex justify-center px-6'>
//                     <div>
//                         <div className={`text-lg md:text-2xl md:mb-1 font-bold mt-8 xl:mt-8 ${middle} ${patua_one.className}`}>
//                             How can we help you?
//                         </div>
//                         <div className={`${inputLabel} ${patua_one.className} mt-0`}>
//                             Name
//                         </div>
//                         <input
//                             type="text" id="name" name="name" 
//                             value={name}
//                             onChange={(e) => {
//                                 setName(e.target.value)
//                                 setEmailSent(false)
//                             }}
//                             className={`${inputLine}`}
//                         >
//                         </input>

//                         <div className={`${inputLabel} ${patua_one.className}`}>
//                             Phone
//                         </div>
//                         <input type="tel" id="phone" name="phone" value={phone}
//                                 onChange={(e) => {
//                                     setPhone(e.target.value)
//                                     setEmailSent(false)
//                                 }}
//                                 className={`${inputLine}`}>
//                         </input>

//                         <div className={`${inputLabel} ${patua_one.className}`}>
//                             Email
//                         </div>
//                         <input 
//                                 type="email" id="email" name="email" value={email}
//                                 onChange={(e) => {
//                                     setEmail(e.target.value)
//                                     setEmailSent(false)
//                                 }}
//                                 className={`${inputLine}`}>
//                         </input>

//                         <div
//                             className={`${inputLabel} ${patua_one.className}`}
//                         >
//                             Leave us a message...
//                         </div>
//                         <textarea type="text" id="message" name="message"
//                                     value={message}
//                                     onChange={(e) => {
//                                         setMessage(e.target.value)
//                                         setEmailSent(false)
//                                     }}
//                                     className={`${inputLine} resize-y w-full h-40`}
//                         >
//                         </textarea>

//                         <button
//                             type="submit"
//                             className={`font-semibold text-xl text-slate-100 bg-stone-600 border-2 border-stone-500
//                                         hover:bg-textBrown focus:text-white px-1 py-2 rounded-xl mt-2 w-full mb-2 
//                                         ${patua_one.className}`}>
//                             Send
//                         </button>

//                         <div className="mb-12 flex justify-center font-bold text-stone-500">
//                             {emailSent 
//                                 ? <div>{emailSentMsg}</div>
//                                 : <div className="h-6 w-8"></div>
//                             }
//                         </div>
//                     </div>
//                 </form>

//             </div>
            
//             <Footer/>
//         </div>
//     )
// }

// export default Contact
