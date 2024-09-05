import React from 'react'
import web1 from "../assets/a1.png"

const About = () => {
  return (
    <>
    <div className="about w-full py-12 flex justify-between items-center">
        {/* LEFT - LOGO */}
    <div className="leftLogo flex flex-col justify-between items-center light w-[30%]">
        <img src={web1} alt="" className='w-[90%] drop-shadow' />
        {/* <img src={web2} alt="" className='rotate-[-3deg] border border-gray-400 rounded-xl w-[70%]' /> */}
    </div>
    {/* RIGTH - DESCRIPTION */}
    <div className="rightDes w-[70%]">
        <div className="title interFont">
            <h4 className='font-semibold text-2xl'>About Me</h4>
            {/* <h3 className='tracking-wide text-2xl font-semibold text-[#fd6f00] mb-1'>Anas A.</h3> */}


            <p className='tracking-widest my-4'>
Anas A. | BCA, DS | Full-Stack Web Developer specializing in MERN stack. Expert in crafting scalable, modern applications with cutting-edge technologies.
           </p>
        </div>

        <div className="skills">
    <div class="container">
        <div class="skill-box">
            <span class="title">REACT</span>

            <div class="skill-bar">
                <span class="skill-per">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>

        <div class="skill-box">
            <span class="title">CSS</span>

            <div class="skill-bar">
                <span class="skill-per css">
                    <span class="tooltip">70%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">JavaScript</span>

            <div class="skill-bar">
                <span class="skill-per javascript">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">NodeJS</span>

            <div class="skill-bar">
                <span class="skill-per nodejs">
                    <span class="tooltip">30%</span>
                </span>
            </div>
        </div>
    </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default About