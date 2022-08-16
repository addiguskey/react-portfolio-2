import React, { useState } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/images/navg.png";
import { saveAs } from "file-saver";
import filler from "../assets/images/blank.png";

const styles = {
  li: {
    listStyle: "none",
    lineHeight: "0.5em",
    padding: "0.2em",
    marginRight: 0,
  },
};
export default function Navbar() {
  const saveFile = () => {
    saveAs(
      "https://docs.google.com/document/d/1XtCXLYqjRZsqe3s_jf7r3osU4Lt4e52-ZyNyqpFNzTQ/export?format=pdf",
      "addiG Resume.pdf"
    );
  };

  return (
    <div>
      <input id="toggle" type="checkbox"></input>

      <label for="toggle" class="hamburger">
        <div class="top-bun"></div>
        <div class="meat"></div>
        <div class="bottom-bun"></div>
      </label>
      <div className="nav d-flex flex-column ">
        <div className="nav-wrapper ">
          <ul style={styles.li} className="menu-items ">
            <li style={styles.li}>
              <Link to="/">
                <img
                  src={useLocation().pathname == "/" ? filler : img}
                  style={{ height: "6rem" }}
                  id="nav-logo"
                />
              </Link>
            </li>
            <li style={styles.li}>
              <Link to="/about">
                <a id="about-me" className="about-me btn bg-transparent">
                  about - 0.1
                </a>
              </Link>
            </li>
            <li style={styles.li}>
              <Link to="/projects">
                <a id="projects" className="projects btn bg-transparent">
                  projects - 0.2
                </a>
              </Link>
            </li>
            <li style={styles.li}>
              <Link to="/contact">
                <a id="contact" className="contact btn bg-transparent">
                  contact me - 0.3
                </a>
              </Link>
            </li>
            <li style={styles.li}>
              <div className="btn btn-outline-dark" onClick={saveFile}>
                download CV - 0.4
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
