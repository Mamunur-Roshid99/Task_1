import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 ">
        <div className="bg-[#0058FF] flex flex-col items-center justify-center text-center p-4 py-8 rounded-lg lg:py-12">
          <h1 className="text-white font-bold text-3xl mb-3 lg:text-4xl">Get In Touch</h1>
          <p className="text-gray-200 text-sm mb-4 lg:w-[800px]">
            Contact us now to enquire our plumbing services, whether you have a
            commercial project that requires support, or a domestic plumbing
            task that needs the attention of a trusted professional.
          </p>
          <button className="bg-white flex items-center gap-2 text-sm text-[#0058FF] px-4 py-2 rounded-sm cursor-pointer">
            <p>Book a Professional Plumber</p>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
