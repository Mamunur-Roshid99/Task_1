import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {/* logo */}
        <div className="mb-5 md:col-span-2 lg:col-span-1">
          <h1 className="font-bold text-black text-xl mb-3">Business Logo</h1>
          <div className="flex items-center gap-3 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        {/* service */}
        <div className="mb-5">
          <h1 className="text-[#2A2F32] font-semibold text-lg mb-3">
            Our Services
          </h1>
          <div className="text-[#2A2F32] font-medium text-sm space-y-2">
            <p>Plumbing</p>
            <p>Drainage</p>
            <p>Bathrooms</p>
            <p>Commercial</p>
          </div>
        </div>
        {/* Links */}
        <div className="mb-5">
          <h1 className="text-[#2A2F32] font-semibold text-lg mb-3">
            Useful Links
          </h1>
          <div className="grid grid-cols-2">
            <div className="text-[#2A2F32] font-medium text-sm space-y-2">
              <p>Contact Us</p>
              <p>Updates</p>
              <p>About Us</p>
              <p>Rates</p>
            </div>
            <div className="text-[#2A2F32] font-medium text-sm space-y-2">
              <p>Customer Services</p>
              <p>Updates</p>
              <p>Locations</p>
              <p>Sitemap</p>
            </div>
          </div>
        </div>
        {/* contact info */}
        <div className="mb-5 md:col-span-2 lg:col-span-1">
          <h1 className="text-[#2A2F32] font-semibold text-lg mb-3">
            Contact Info
          </h1>
          <div className="space-y-2">
            <div className="text-[#2A2F32] font-medium text-sm flex items-center gap-2">
              <FaLocationDot />
              <p>1 Sail Street, London, SE11 6NQ</p>
            </div>
            <div className="text-[#2A2F32] font-medium text-sm flex items-center gap-2">
              <MdOutlineMailOutline />
              <p>enquiries@PlumbingPros.com</p>
            </div>
            <div className="text-[#2A2F32] font-medium text-sm flex items-center gap-2">
              <FaPhone />
              <p>020 4527 6474</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="text-center text-sm  text-gray-500 space-y-2 md:flex md:items-center md:justify-between md:col-span-2 lg:col-span-4">
          <h3>© Plumbing Pros. All Rights Reserved</h3>
          <h3>Website by IH Adventure And Creative</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
