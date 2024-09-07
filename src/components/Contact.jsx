import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className="contact w-full lg:py-12 py-8 mt-6 flex flex-col justify-between items-center"
        id="contact"
      >
        <h4 className="font-bold lg:text-4xl text-3xl tracking-wider">
          Let's Work Together
        </h4>
        <p className="lg:tracking-widest tracking-wider my-4 w-[80%] mx-auto text-center">
        Need help with a project? Let's connect! I'm available for freelance work and internships.
        </p>

        {/* CONTACT FORM */}
        <div className="form w-[90%] py-6 flex justify-center items-center lg:gap-4 gap-2">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="flex justify-center items-center border border-gray-400 rounded-lg outline-none py-3 px-4 bg-[#F8F8F8] w-[60%]"
          />
          <button className="btn rounded-lg py-3 lg:px-4 px-2 tracking-wider font-semibold hover:translate-x-2 duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
