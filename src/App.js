import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
         <Skills />
        <Portfolio />
        <Experience />
        <Contact /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
