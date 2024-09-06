import React from 'react'

import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
    const social = [
        {
            icon: <TiSocialLinkedin />,
            url : "https://www.linkedin.com/in/anas86/"
        },
        {
            icon: <TiSocialTwitter />,
            url : "https://x.com/anas_86?t=Hbm3E5oRxRpsQBgGvChIYA&s=09"
        },
        {
            icon: <FaGithub />,
            url : "https://github.com/mohdanas86/"
        },
        {
            icon: <FaInstagram />,
            url : "https://www.instagram.com/_anas__86"
        },
        {
            icon: <TiSocialYoutube />,
            url : "https://www.youtube.com/c/AG4444YT"
        },
        {
            icon: <TiSocialFacebook />,
            url : "https://www.facebook.com/Anas725"
        },
    ]
  return (
    <>
    <div className="footer w-full bg-[#F8F8F8]">
<div className="subFooterCon w-full py-12 lg:w-[80%] mx-auto flex flex-col justify-center items-center">
<ul className='flex justify-center items-center gap-6 text-lg font-semibold text-gray-800'>
        <li className='hover:translate-x-1 duration-300 hover:text-[#fd6f00]'><a href="#home">Home</a></li>
        <li className='hover:translate-x-1 duration-300 hover:text-[#fd6f00]'><a href="#about">About</a></li>
        <li className='hover:translate-x-1 duration-300 hover:text-[#fd6f00]'><a href="#contact">Contact</a></li>
        <li className='hover:translate-x-1 duration-300 hover:text-[#fd6f00]'><a href="#skill">Skills</a></li>
        <li className='hover:translate-x-1 duration-300 hover:text-[#fd6f00]'><a href="#project">Projects</a></li>
    </ul>

{/* SOCIAL MEDIA */}
    <div className="social py-6">
        <ul className='flex justify-center items-center gap-6 text-lg font-semibold text-gray-800'>
            {social && social.map((v, i)=>{
                return(
                    <li className='hover:translate-x-1 duration-300 hover:text-[#fd6f00]'>
                    <a href={v.url}>
                      {v.icon} {/* Render the icon component or element here */}
                    </a>
                  </li>
                  
                )
            })}
        </ul>
    </div>
</div>
 {/* FOOTER CRADIT */}
 <div className="cradit bg-slate-600 py-4 flex justify-center items-center">
        <p className='text-white capitalize'>&copy; 2024 Anas all rights reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer