import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;
