import React from "react";

import { IoIosLink } from "react-icons/io";

// Correctly import all image assets
import port1 from "../assets/port.jpg";
import port2 from "../assets/port2.jpg";
import business from "../assets/business.jpg";
import nature from "../assets/nature.jpg";
import realstate from "../assets/realstate.jpg";
import movie from "../assets/movie.jpg";
import swiggy from "../assets/swiggy.jpg";
import chat from "../assets/chat.jpg";

const Projects = () => {
  // Define the Web array with the correct image imports
  const Web = [
    {
      name: "portfolio",
      img: port1,
      url: "https://anas-frkr.onrender.com/",
    },
    {
      name: "portfolio",
      img: port2,
      url: "https://web-devloper-portfolio.onrender.com/",
    },
    {
      name: "business",
      img: business,
      url: "https://stomilar.onrender.com/",
    },
    {
      name: "nature",
      img: nature,
      url: "https://stafilar.onrender.com/",
    },
    {
      name: "real state",
      img: realstate,
      url: "https://realstate-w9fx.onrender.com/",
    },
    {
      name: "movie",
      img: movie,
      url: "https://stomilar-movies.onrender.com/",
    },
    {
      name: "swiggy",
      img: swiggy,
      url: "https://swiggy-clone-kr01.onrender.com/",
    },
    {
      name: "stomChat",
      img: chat,
      url: "https://stomchat.netlify.app/",
    },
  ];
  return (
    <>
      <div
        className="project w-full flex-col flex justify-center items-center py-4 mb-6"
        id="project"
      >
        <div className="proDes">
          <h4 className="font-semibold text-2xl">Projects</h4>
          <p className="tracking-widest my-4">
            I possess strong skills in React for front-end development, Node.js
            and Express.js for back-end development, along with proficiency in
            MongoDB for database management. Additionally, I have experience in
            front-end frameworks like Bootstrap and Tailwind CSS, as well as
            expertise in HTML and CSS for web design.
          </p>
        </div>

        <div className="proCon grid grid-cols-4 gap-4 mt-6">
          {Web &&
            Web.map((v, i) => {
              return (
                <div
                  className="proItem w-full gap-4 duration-300 relative overflow-hidden rounded-lg drop-shadow-lgshadow"
                  key={i}
                >
                  <img src={v.img} alt={v.name} className="" />

                  <div className="proOverplay w-full h-full"></div>
                  <div className="proItemHover w-full text-white bg-[#2f3542]">
                    <a href={v.url} className="font-semibold text-xl">
                      <IoIosLink />
                    </a>
                    <span className=" capitalize">{v.name}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Projects;
