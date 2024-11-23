import React from "react";
import Header from "./components/Header";
import About from "./components/About";
// import VideoBG from "./components/VideoBG";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
    </div>
  );
};

export default App;
