import React, { useState } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/images/logos/navg.png";
import { saveAs } from "file-saver";
import filler from "../assets/images/blank.png";

const styles = {
  navwrapper: {
    backgroundColor: "#21482d",
  },
  li: {
    listStyle: "none",
    lineHeight: "80%",
    // padding: "0.2rem",
    marginRight: 0,
    color: "#a9aea2",
  },
};
export default function Navbar() {
  const saveFile = () => {
    saveAs(
      // get the sharable link from google docs and include "/export?format=pdf" at the end of the link
      "https://docs.google.com/document/d/1U6hYeXWdpFpijFLPDTkbg0T3ivmOcojCwX5Pg_YsCnQ/export?format=pdf",
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
      <div className="nav d-flex flex-column " style={styles.navwrapper}>
        <div className="nav-wrapper ">
          <ul style={styles.li} className="menu-items ">
            <li style={styles.li}>
              <Link to="/">
                <img
                  src={useLocation().pathname == "/" ? filler : img}
                  style={{ height: "5rem", filter: "invert(0.7)" }}
                  id="nav-logo"
                />
              </Link>
            </li>
            <li style={styles.li}>
              <Link to="/about">
                <a
                  id="about-me"
                  className="about-me btn bg-transparent"
                  style={{ color: "#a9aea2" }}
                >
                  about - 0.1
                </a>
              </Link>
            </li>
            <li style={styles.li}>
              <Link to="/projects">
                <a
                  id="projects"
                  className="projects btn bg-transparent"
                  style={{ color: "#a9aea2" }}
                >
                  projects - 0.2
                </a>
              </Link>
            </li>
            <li style={styles.li}>
              <Link to="/contact">
                <a
                  id="contact"
                  className="contact btn bg-transparent"
                  style={{ color: "#a9aea2" }}
                >
                  contact me - 0.3
                </a>
              </Link>
            </li>
            <li style={styles.li}>
              <div
                className="btn bg-transparent"
                onClick={saveFile}
                style={{
                  color: "#f4f593",
                  fontWeight: "bold",
                  lineHeight: 0.8,
                }}
              >
                download CV - 0.4
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
