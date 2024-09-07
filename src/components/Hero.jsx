import React from 'react'
import web1 from "../assets/a1.png"
import { FaGithub } from "react-icons/fa";

const Hero = () => { 
  return (
    <div className="hero w-full py-12 lg:px-0 px-4 flex lg:flex-row flex-col justify-between items-center lg:bottom-0 border-b">
    {/* LEFT - DESCRIPTION */}
    <div className="leftDes lg:w-[70%] w-full order-1">
        <div className="title interFont">
            <h4 className='font-semibold text-xl'>Hi i am</h4>
            <h3 className='tracking-wide text-2xl font-semibold text-[#fd6f00] mb-1'>Anas A.</h3>

            <h2 className='lg:w-[50%] w-[70%] flex justify-start items-center lg:text-5xl text-3xl font-bold tracking-wider'>Full-Stack</h2>
            <h2 className='lg:w-[60%] w-[70%] flex justify-end items-center lg:text-5xl text-3xl font-bold tracking-wider'>Devloper</h2>

            <p className='tracking-widest my-4 pr-8 sm:text-lg'>
            Full-Stack Web Developer skilled in creating scalable, modern applications using the latest technologies. Expertise in delivering robust, high-performance solutions.</p>
            <a href="https://github.com/mohdanas86"><button className="btn capitalize border-transparent px-6 py-1.5 font-thin rounded-md hover:translate-x-1 duration-300  flex justify-center items-center gap-2">github <FaGithub /></button></a>
        </div>
    </div>
    {/* RIGHT - LOGO */}
    <div className="rightLogo flex flex-col justify-between items-center light lg:w-[30%] w-full lg:mb-0 mb-12 lg:order-2">
        <img src={web1} alt="" className='lg:w-[90%] w-[60%] drop-shadow rounded-3xl border rotate-3' />
        {/* <img src={web2} alt="" className='rotate-[-3deg] border border-gray-400 rounded-xl w-[70%]' /> */}
    </div>
    </div>
  )
}

export default Hero
