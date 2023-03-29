import React, { useState } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/images/logos/navg.png";
import { saveAs } from "file-saver";
import filler from "../assets/images/blank.png";

const styles = {
  navwrapper: {
    backgroundColor: "#EDEAE6",
  },
  li: {
    listStyle: "none",
    lineHeight: "80%",
    marginRight: 0,
    color: "#99999",
    display: "inline-block",
    marginTop: "2rem",
    marginRight: "2rem",
  },

  liText: {
    color: "white",
    fontWeight: 900,
    fontSize: "2.8rem",
  },
  cv: {
    color: "black",
    fontWeight: 900,
    lineHeight: 0.5,
    fontSize: "2.8rem",
    marginTop: "-1.4rem",
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
        <div className="container-fluid text-center">
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
              <a href="#about-me" className=" about-me " style={styles.liText}>
                about
              </a>
            </li>
            <li style={styles.li}>
              <a href="#projects" className=" projects " style={styles.liText}>
                projects
              </a>
            </li>
            <li style={styles.li}>
              <a href="#contact" className=" contact " style={styles.liText}>
                contact
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
