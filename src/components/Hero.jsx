import React from 'react'
import web1 from "../assets/a1.png"
import { FaGithub } from "react-icons/fa";

const Hero = () => { 
  return (
    <div className="hero w-full py-12 flex justify-between items-center">
    {/* LEFT - DESCRIPTION */}
    <div className="leftDes w-[70%]">
        <div className="title interFont">
            <h4 className='font-semibold text-xl'>Hi i am</h4>
            <h3 className='tracking-wide text-2xl font-semibold text-[#fd6f00] mb-1'>Anas A.</h3>

            <h2 className='w-[50%] flex justify-start items-center text-5xl font-bold tracking-wider'>Full-Stack</h2>
            <h2 className='w-[60%] flex justify-end items-center text-5xl font-bold tracking-wider'>Devloper</h2>

            <p className='tracking-widest my-4 pr-8'>
            Full-Stack Web Developer skilled in creating scalable, modern applications using the latest technologies. Expertise in delivering robust, high-performance solutions.</p>
            <a href="https://github.com/mohdanas86"><button className="btn capitalize border-transparent px-6 py-1.5 font-thin rounded-md hover:translate-x-1 duration-300  flex justify-center items-center gap-2">github <FaGithub /></button></a>
        </div>
    </div>
    {/* RIGHT - LOGO */}
    <div className="rightLogo flex flex-col justify-between items-center light w-[30%]">
        <img src={web1} alt="" className='w-[90%] drop-shadow rounded-3xl border rotate-3' />
        {/* <img src={web2} alt="" className='rotate-[-3deg] border border-gray-400 rounded-xl w-[70%]' /> */}
    </div>
    </div>
  )
}

export default Hero