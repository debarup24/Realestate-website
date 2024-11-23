import React from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  return (
    <div className=" container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* <-- Slider Button --> */}
      <div className="flex justify-end items-center mb-8">
        <button
          className="bg-gray-200 rounded mr-2 p-3"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>

        <button
          className="bg-gray-200 rounded mr-2 p-3"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* <-- Project Slider Container -->  */}
      <div className="overflow-hidden ">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className=" relative flex-shrink-0 w-full sm:w-1/4"
            >
              <img
                className=" rounded-xl "
                src={project.image}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
