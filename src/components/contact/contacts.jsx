import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAmbulance} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { Montserrat } from 'next/font/google'
import { Facebook } from 'fontawesome';
const monteserat = Montserrat({weight: '600',subsets: ['cyrillic']})
export default function Contacts() {
    const phoneNumber = '+237673290032'; // Replace with the recipient's phone number
    const message = "Hello, Tayu, i've seen your'e portfolio and i would like to work with you on my next project"; // Replace with the pre-filled message
    
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const encodedMessage = encodeURIComponent(message);
    const facebookLink = "https://www.facebook.com/profile.php?id=100070099698949"
    const whatsappLink = `https://wa.me/${encodedPhoneNumber}?text=${encodedMessage}`;
  return (
    <div className='mx-[3rem] lg:mx-[7rem] my-20' id='contact'>
        <div className="line bg-[#4020d2] h-3 rounded-lg w-1/12 "></div>
        <h1 className={`${monteserat.className} text-4xl my-6 font-extrabold`}>Contact Me</h1>
        <div className="projects flex  justify-evenly gap-4">
            <div className="rounded-lg h-fit flex flex-col lg:flex-row shadow-xl w-full gap-7 bg-white p-4 lg:justify-between">
                <div className="x flex flex-col items-center hover:cursor-pointer hover:scale-110">
                    <div className="logo">
                        <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                    </div>
                    <div className="name">
                        <h1 className='text-3xl font-extrabold'>X (Twitter)</h1>
                    </div>
                </div>
                <div className="wha flex flex-col items-center hover:cursor-pointer hover:scale-110">
                <div className="logo"><FontAwesomeIcon icon="fa-brands fa-square-whatsapp" /></div>
                    <div className="name">
                        <Link href={whatsappLink} className='text-3xl font-extrabold'>WhatsApp</Link>
                    </div>
                </div>
                <div className="facebk flex flex-col items-center hover:cursor-pointer hover:scale-110">
                <div className="logo"><FontAwesomeIcon icon="fa-brands fa-facebook" /></div>
                    <div className="name">
                        <Link href={facebookLink} className='text-3xl font-bold'>Facebook</Link>
                    </div>
                </div>
                <div className="insta flex flex-col items-center hover:cursor-pointer hover:scale-110">
                <div className="logo"><FontAwesomeIcon icon="fa-brands fa-instagram" /></div>
                    <div className="name">
                        <h1 className='text-3xl font-bold'>Instagram</h1>
                    </div>
                </div>
                <div className="insta flex flex-col items-center hover:cursor-pointer hover:scale-110">
                <div className="logo"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></div>
                    <div className="name">
                        <h1 className='text-3xl font-bold'>LinkedIn</h1>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}
