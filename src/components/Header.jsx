import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [showmenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="header w-full lg:py-4 py-3 flex justify-between items-center lg:px-0 px-4 lg:border-none border-b">
        {/* LOGO */}
        <div className="logo lg:tracking-wide">
          <span className="lg:text-2xl text-lg font-semibold">Anas..</span>
        </div>
        {/* NAVBAR */}
        {/* phone nav */}
        <div className="lg:hidden" onClick={(e) => setShowMenu((e) => !e)}>
          <RxHamburgerMenu />
        </div>

        {/* dektop nav */}
        <div className="nav lg:block hidden">
          <ul className="lg:flex hidden justify-center items-center lg:gap-4 gap-2 text-sm lg:text-lg">
            <li className="hover:translate-x-1 duration-300">
              <a href="#home">Home</a>
            </li>
            <li className="hover:translate-x-1 duration-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:translate-x-1 duration-300">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:translate-x-1 duration-300">
              <a href="#skill">Skills</a>
            </li>
            <li className="hover:translate-x-1 duration-300">
              <a href="#project">Projects</a>
            </li>
            <span>
              <a href="#">
                <button className="btn border-transparent px-4 py-1.5 rounded-md hover:translate-x-1 duration-300 font-medium text-sm flex justify-center items-center gap-2">
                  Resume
                </button>
              </a>
            </span>
          </ul>
        </div>
      </div>

      {/* OVERFLOW HEDAER FOR PHONE */}
      <div
        className={`overFlowHeader w-full h-full fixed bg-[#47404085] duration-700 ${
          !showmenu
            ? "hidden top-0 left-[1000px]"
            : "flex lg:hidden top-0 left-0"
        }`}
        onClick={(e) => setShowMenu((e) => !e)}
      >
        <div
          className="innerHeader w-[50%] bg-white h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="logoPhone">
            <h2
              className=" font-semibold text-2xl capitalize pt-4
   px-8"
            >
              anas
            </h2>
          </div>

          <div className="nav">
            <ul
              className="flex flex-col justify-center items-start gap-3 text-sm p-8 pt-6
    "
            >
              <li className="hover:translate-x-1 duration-300">
                <a href="#home">Home</a>
              </li>
              <li className="hover:translate-x-1 duration-300">
                <a href="#about">About</a>
              </li>
              <li className="hover:translate-x-1 duration-300">
                <a href="#contact">Contact</a>
              </li>
              <li className="hover:translate-x-1 duration-300">
                <a href="#skill">Skills</a>
              </li>
              <li className="hover:translate-x-1 duration-300">
                <a href="#project">Projects</a>
              </li>
              <span>
                <a href="#">
                  <button className="btn border-transparent px-4 py-1.5 rounded-md hover:translate-x-1 duration-300 font-medium text-sm flex justify-center items-center gap-2">
                    Resume
                  </button>
                </a>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
