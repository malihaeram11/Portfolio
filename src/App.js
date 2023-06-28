import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Service from "./components/Service";
import Work from "./components/Work";
import "./index.css";



const App = () => {
  return (
    <div className="bg-purple-950 h-[6000px]">
      <Header />
      <Banner />
      <About />
      <Service />
      <Work />
      <Contact />
      <Nav />
    </div>
  );
};

export default App;