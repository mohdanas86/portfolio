import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import node from "../assets/nodejs.png";
import ex from "../assets/ex.png";
import mongo from "../assets/mongoose.png";
import tail from "../assets/tailwindcss.png";
import boot from "../assets/bootstrap.png";
import git from "../assets/social.png";
import react from "../assets/react.png";
import postman from "../assets/postman.svg";

const About = () => {
  return (
    <>
      <div
        className="about w-full lg:py-12 py-0 mt-6 flex justify-between items-center lg:px-0 px-4"
        id="about"
      >
        {/* RIGTH - DESCRIPTION */}
        <div className="rightDes w-[100%]">
          <div className="title interFont">
            <h4 className="font-semibold text-2xl">About Me</h4>
            <p className="lg:tracking-widest tracking-wider my-4 sm:text-lg">
              I am Anas, a seasoned MERN stack developer professional experience
              in developing, maintaining, redesigning, and optimizing websites.
              My expertise lies in utilizing MongoDB, Express.js, React, and
              Node.js to create high-performance web applications. I am
              dedicated to delivering superior user experiences and ensuring
              efficient functionality in all my projects.
            </p>
          </div>

          {/* SKILL CONTAINER */}
          <div className="skills grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 lg:mt-6 mt-8" id="skills">
            <div className="frontend">
              <h2 className="border-b-2 mb-6 border-[#fd6f00] font-semibold text-xl inline-block tracking-wider">
                Frontend
              </h2>
              <div className="frontSkillImg grid grid-cols-5 justify-center items-center">
                <img src={html} alt="HTML" />
                <img src={css} alt="CSS" />
                <img src={js} alt="js" className="p-4 mx-auto" />
                <img src={react} alt="React" />
                <img src={tail} alt="Tailwind CSS" />
                <img src={boot} alt="Bootstrap" />
                <img src={git} alt="Bootstrap" className="p-4 mx-auto" />
              </div>
            </div>
            <div className="backend">
              <h2 className="border-b-2 mb-6 border-[#fd6f00] font-semibold text-xl inline-block tracking-wider">
                Backend
              </h2>
              <div className="backSkillImg grid grid-cols-5">
                <img src={node} alt="" />
                <img src={ex} />
                <img src={mongo} alt="" />
                <img src={postman} alt="" className="p-6 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
