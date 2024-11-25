import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    showMobileMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    // if (showMobileMenu) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "auto";
    // }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className=" hidden md:flex gap-7 text-white font-semibold">
          <a href="#Header" className="cursor-pointer hover:text-gray-600">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-600">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-600">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-600"
          >
            Testimonials
          </a>
        </ul>

        <button className="hidden md:block font-semibold bg-yellow-50 px-8 py-2 rounded-full ">
          Sign up
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className=" md:hidden w-7"
          alt=""
        />
      </div>

      {/* <-- Mobile-menu --> */}

      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } fixed w-full right-0 left-20 top-0 bottom-36 overflow-hidden bg-slate-50 bg-opacity-75 bg-gradient-to-b from-zinc-500  transition-all`}
      >
        <div className="flex justify-end pt-7 p-12 cursor-pointer">
          {" "}
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-7 mr-10"
            alt=""
          />{" "}
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 mr-3 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonial"
            className="px-4 py2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
