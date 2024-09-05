import React from 'react'

const Header = () => {
  return (
    <>
<div className="header light w-full py-4 flex justify-between items-center">
    {/* LOGO */}
<div className="logo tracking-wide">
   <span className='text-2xl font-semibold'>A</span>nas
</div>
{/* NAVBAR */}
<div className="nav">
    <ul className='flex justify-center items-center gap-4 text-lg'>
        <li className='hover:translate-x-1 duration-300'><a href="#home">Home</a></li>
        <li className='hover:translate-x-1 duration-300'><a href="#about">About</a></li>
        <li className='hover:translate-x-1 duration-300'><a href="#contact">Contact</a></li>
        <li className='hover:translate-x-1 duration-300'><a href="#skill">Skills</a></li>
        <li className='hover:translate-x-1 duration-300'><a href="#project">Projects</a></li>
        <span><a href="#"><button className="btn border-transparent px-4 py-1.5 rounded-md hover:translate-x-1 duration-300 font-medium text-sm flex justify-center items-center gap-2">Resume</button></a></span>
    </ul>
</div>
</div>
    </>
  )
}

export default Header