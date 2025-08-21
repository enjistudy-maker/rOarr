import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Skills from "./components/Skills"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/enjong.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Projects />
      <Skills />   
      <Contact />
      <Footer />
    </>
  );
}

export default App;
