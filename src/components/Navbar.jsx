import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className=" hidden md:flex gap-7 text-white font-semibold">
          <a href="#Header" className="cursor-pointer hover:text-gray-600">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-600">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-600">
            Projects
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-600">
            Testimonials
          </a>
        </ul>

        <button className="hidden md:block font-semibold bg-yellow-50 px-8 py-2 rounded-full ">
          Sign up
        </button>
        <img src={assets.menu_icon} className=" md:hidden w-7" alt="" />
      </div>

      {/* <-- Mobile-menu --> */}
      <div className="md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-slate-50 transition-all">
        <div className="flex justify-end p-6 cursor-pointer">
          {" "}
          <img src={assets.cross_icon} className="w-6" alt="" />{" "}
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a href="#Header" className="px-4 py2 rounded-full inline-block">
            Home
          </a>
          <a href="#About" className="px-4 py2 rounded-full inline-block">
            About
          </a>
          <a href="#Projects" className="px-4 py2 rounded-full inline-block">
            Projects
          </a>
          <a href="#Testimonial" className="px-4 py2 rounded-full inline-block">
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
