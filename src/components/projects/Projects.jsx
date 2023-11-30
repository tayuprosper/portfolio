import { Montserrat } from 'next/font/google';
import React from 'react'

const monteserat = Montserrat({weight: '600',subsets: ['cyrillic']})
function Projects() {
  return (
    <div className={`${monteserat} mx-[3rem] lg:mx-[6rem]`} id='projects'>
        <div className="line bg-[#4020d2] h-3 rounded-lg w-1/12 "></div>
        <h1 className='text-4xl my-6 font-extrabold'>My Projects</h1>
        <div className="flex-col lg:flex-row projects flex lg:justify-evenly gap-4  items-center">
            <div className="rounded-lg h-fit flex flex-col shadow-xl w-full bg-white pb-4 ">
                <div className="imgh mb-1">
                    <img src="mkmny.jpg" className='w-full max-h-[17rem] rounded-t-lg' alt="" />
                </div>
                <div className="tags m-2 flex">
                    <span className='bg-blue-300 p-2 m-1 rounded-xl text-blue-600 font-extrabold'>Web Dev</span>
                    <span className='bg-blue-300 p-2 m-1 rounded-xl text-blue-600 font-extrabold'>Graphic Design</span>
                </div>
                <div className="desc p-3">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore adipisci delectus eius aliquam dolorem aut culpa maxime nostrum a laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio facilis labore quae? Accusantium voluptatem laboriosam voluptatum. Voluptatum, illo! Asperiores.
                    </p>
                </div>
                <div className="check p-3">
                    <span className='bg-blue-300 p-3 m-2 rounded-xl text-blue-600 font-extrabold'>Try it </span>
                </div>
            </div>
            <div className="rounded-lg h-fit flex flex-col shadow-md w-full bg-white pb-4">
                <div className="imgh mb-1">
                    <img src="mkmny.jpg" className='w-full  max-h-[17rem] rounded-t-lg' alt="" />
                </div>
                <div className="tags m-2 flex">
                    <span className='bg-blue-300 p-2 m-1 rounded-xl text-blue-600 font-extrabold'>Web Dev</span>
                    <span className='bg-blue-300 p-2 m-1 rounded-xl text-blue-600 font-extrabold'>Graphic Design</span>
                </div>
                <div className="desc p-3">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore adipisci delectus eius aliquam dolorem aut culpa maxime nostrum a laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio facilis labore quae? Accusantium voluptatem laboriosam voluptatum. Voluptatum, illo! Asperiores.
                    </p>
                </div>
                <div className="check p-3">
                    <span className='bg-blue-300 p-3 m-2 rounded-xl text-blue-600 font-extrabold'>Try it </span>
                </div>
            </div>
            <div className="rounded-lg h-fit flex flex-col shadow-md w-full bg-white pb-4">
                <div className="imgh mb-1">
                    <img src="mkmny.jpg" className='max-h-[17rem] w-full rounded-t-lg' alt="" />
                </div>
                <div className="tags m-2 flex">
                    <span className='bg-blue-300 p-2 m-1 rounded-xl text-blue-600 font-extrabold'>Web Dev</span>
                    <span className='bg-blue-300 p-2 m-1 rounded-xl text-blue-600 font-extrabold'>Graphic Design</span>
                </div>
                <div className="desc p-3">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore adipisci delectus eius aliquam dolorem aut culpa maxime nostrum a laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio facilis labore quae? Accusantium voluptatem laboriosam voluptatum. Voluptatum, illo! Asperiores.
                    </p>
                </div>
                <div className="check p-3">
                    <span className='bg-blue-300 p-3 m-2 rounded-xl text-blue-600 font-extrabold'>Try it </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
