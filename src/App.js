import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/about/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

export default function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div className="d-flex flex-column" id="port">
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}
