import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
// import VideoBG from "./components/VideoBG";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
    </div>
  );
};

export default App;
