import Image from 'next/image'
import styles from './page.module.css'
import {Monteserat} from 'next/fonts/google'
const monteserat = Montserrat({weight: '200',subsets: ['cyrillic']})
export default function Home() {
  return (
    <div className='h-screen flex flex-col lg:flex-row gap-[1rem] lg:justify-between items-center lg:gap-[5rem] px-[2rem] lg:px-[7rem] '>
      <div className="intro">

        <div className="line w-1/4 bg-[#4020d2] h-3  rounded-lg"></div>

        <h1 className='font-extrabold my-6 text-4xl'><span className=' text-[#4020d2] '>Hi</span>, i'm Tayu Prosper</h1>
        <p className='font-bold'>A full stack developer with expirence in <span className="text-[#4020d2] font-bold">React</span>,<span className="text-[#4020d2] font-bold"> Next.js</span>, <span className="text-[#4020d2] font-bold">Python</span> and <span className="text-[#4020d2] font-bold">C programing</span> I am willing to take free internship in other to gather experience from experts in the feild and get better at what i do.</p>
      </div>
      <div className="img overflow-hidden flex shadow-2xl justify-center w-full p-10 rounded bg-[#4020d2] h-1/2">
        <img className='rounded-full border-4' src='myimg.png'/>
      </div>
    </div>
  )
}
