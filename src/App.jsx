import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
// import VideoBG from "./components/VideoBG";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default App;
