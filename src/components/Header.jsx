import React from "react";
import Navbar from "./Navbar";
import VideoBg from "./VideoBG";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      {/* <VideoBg /> */}

      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white font-bold">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white bg-transparent hover:bg-slate-700 px-8 py-3 hover:bg-opacity-25 rounded"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-blue-600 hover:bg-blue-900 px-8 py-3 rounded"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
