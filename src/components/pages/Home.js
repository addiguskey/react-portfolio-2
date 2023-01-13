import React from "react";
import "../style.css";
import Image from "../../assets/images/logos/navg.png";
import g from "../../assets/images/logos/grayg.png";
import About from "./about/About";
import Projects from "./Projects";
import Contact from "./Contact";

const styles = {};
export default function Home() {
  return (
    <>
      <section
        className="d-flex flex-column align-itmes-center p-4"
        style={{ marginTop: "9%" }}
      >
        <div className="align-itmes-center text-center">
          <h1 style={{ fontSize: "2.7rem", color: "#e7e4db" }}>
            addi{" "}
            <span>
              <img src={g} style={{ height: "5rem" }}></img>
            </span>{" "}
          </h1>
          <br></br>
          <h5 style={{ color: "#f4f593" }}>
            full- stack developer, <br></br>
            <span style={{ marginRight: 85, fontSize: "1.1rem" }}>
              front-end developer,
            </span>
          </h5>

          <p style={{ fontSize: "0.5rem", marginLeft: 70, color: "#a9aea2" }}>
            dog mom
          </p>
        </div>
      </section>
      <section id="about" style={{ marginTop: "25rem" }}>
        <About></About>
      </section>
      <section id="projects" style={{ marginTop: "5rem" }}>
        <Projects></Projects>
      </section>
      <section id="contact" style={{ marginTop: "5rem" }}>
        <Contact></Contact>
      </section>
    </>
  );
}
