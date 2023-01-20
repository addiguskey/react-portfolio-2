import React, { useState } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/images/logos/navg.png";
import { saveAs } from "file-saver";
import filler from "../assets/images/blank.png";

const styles = {
  navwrapper: {
    backgroundColor: "#e9e1d6",
  },
  li: {
    listStyle: "none",
    lineHeight: "80%",
    marginRight: 0,
    color: "white",
    display: "inline-block",
    marginTop: "0.8rem",
  },
  email: {
    listStyle: "none",
    lineHeight: "80%",
    marginRight: 0,
    textDecoration: "none",
    display: "inline-block",
    fontWeight: "bold",
  },
  emailText: {
    color: "white",
    marginTop: "-4rem",
    marginLeft: "75vw",
    fontWeight: 600,
    lineHeight: 0,
    fontSize: "0.8rem",
    marginBottom: "-7rem",
  },
  liText: {
    color: "white",
    fontWeight: 700,
    fontSize: "1.3rem",
  },
  cv: {
    color: "black",
    fontWeight: 700,
    // lineHeight: 0.5,
    fontSize: "1.2rem",
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

      <nav className="nav d-flex flex-column " style={styles.navwrapper}>
        <div className="container-fluid justify-content-between ">
          <ul style={styles.li} className="menu-items ">
            {/* <li style={styles.li}>
              <Link to="/">
                <img
                  src={useLocation().pathname == "/" ? filler : img}
                  style={{ height: "5rem", filter: "invert(0.7)" }}
                  id="nav-logo"
                />
              </Link>
            </li> */}
            <li style={styles.li}>
              <a
                href="#about-me"
                className="btn about-me "
                style={styles.liText}
              >
                about
              </a>
            </li>
            <li style={styles.li}>
              <a
                href="#projects"
                className="btn projects "
                style={styles.liText}
              >
                projects
              </a>
            </li>
            <li style={styles.li}>
              <a href="#contact" className="btn contact " style={styles.liText}>
                contact me
              </a>
            </li>
            <li style={styles.li}>
              <div
                className="btn bg-transparent"
                onClick={saveFile}
                style={styles.cv}
              >
                download CV
              </div>
            </li>{" "}
            {/* <li style={styles.email} className=" flex-shrink-1"> */}
            {/* <a style={styles.emailText} href="mailto:addisonguskey@gmail.com">
              addisonguskey@gmail.com
            </a> */}
            {/* </li>{" "} */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
