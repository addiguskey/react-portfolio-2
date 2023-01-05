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
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}
