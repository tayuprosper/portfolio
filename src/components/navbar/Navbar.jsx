"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Inter,Poppins,Montserrat } from 'next/font/google'

const monteserat = Montserrat({weight: '800',subsets: ['cyrillic']})
const navbar = function () {
 const [navbarvisible, setNavbarVisible] = useState(false)
 const handleNav = ()=>{
    if (navbarvisible){
      setNavbarVisible(false)
    }else{
      setNavbarVisible(true)
    }
    console.log('clicked');
 }
  return (
    <div className={`${monteserat.className} text-slate-950 py-3 text-2xl px-[3rem] lg:px-[7rem] flex justify-between items-center mb-[4rem] lg:mb-0`}>
      <div><Link href='/'>Portfolio<span className='text-[#2030d2] text-5xl'>.</span></Link></div>
     { navbarvisible ? (
    <div>
      <HoriontalNavbar/>
     <div className="menu flex flex-col gap-1 lg:hidden" onClick={handleNav}>
     <div className="line bg-[#2030d2] w-10 h-2 rounded-lg transform rotate-45"></div>
     <div className="line bg-[#2030d2] w-10 h-2 rounded-lg transform -rotate-45"></div>
   </div>
    </div>
    
     )
     :(
     <>
      <div className='hidden lg:block'>
     <ul className='gap-5 flex'>
       <li>
         <Link href='/about'>About</Link>
       </li>
       <li>
         <Link href='/#projects'>Projects</Link>
       </li>
       <li>
         <Link href='/blog'>Blog</Link>
       </li>
       <li>
         <Link href='/#contact'>Contact</Link>
       </li>
     </ul>
   </div>
      <div className="menu flex flex-col gap-1 lg:hidden" onClick={handleNav}>
     <div className="line bg-[#2030d2] w-10 h-2 rounded-lg"></div>
     <div className="line bg-[#2030d2] w-10 h-2 rounded-lg"></div>
     <div className="line bg-[#2030d2] w-10 h-2 rounded-lg"></div>
   </div>
     </>
  )
     }
     
    </div>
  )
}

const HoriontalNavbar = ()=>{

 const component =
    <div className='font-extrabold absolute left-auto right-4 mt-[3rem] bg-white p-5 rounded-xl'>
    <ul>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/#projects'>Projects</Link>
      </li>
      <li>
        <Link href='/blog'>Blog</Link>
      </li>
      <li>
        <Link href='/#contact'>Contact</Link>
      </li>
    </ul>
  </div>
  return component
}

export default navbar