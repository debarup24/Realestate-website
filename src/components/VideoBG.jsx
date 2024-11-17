import React from "react";
import video from "../assets/videoBG.mp4";

const div = () => {
  return (
    <div className="container items-center w-full md:w-full lg:w-full min-w-full max-h-screen flex overflow-hidden ">
      <div className="items-center">
        <video className="object-cover" src={video} autoPlay loop muted />

        {/* <div className="absolute container items-center mx-autopy-4 px-6 md:px-20 lg:px-32  w-9/12 h-full top-1/2 left-1/2 right-1/2 ">
          <h2 className="text-white font-bold items-center">
            {" "}
            Explore homes that fit your dreams
          </h2>
          <div>
            <a href="">Projects</a>
            <a href="">Contact Us</a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default div;
