import React, { Component } from "react";
// import "../style.css";
import qr from "../assets/images/Addison_Guskey.png";
import image from "../assets/images/logo-darkmode.png";
// import { useLocation } from "react-router-dom";
import GitHubLogo from "../assets/images/github-logo.png";
import LinkedInLogo from "../assets/images/linkedin-logo-1.png";
import TwitterLogo from "../assets/images/twitter-logo.png";
import line from "../assets/images/line2.png";
// import { useLocation } from "react-router";
const styles = {
  foot: {
    fontSize: 14,
    color: "#7a7875",
    padding: 12,
  },
  line: {
    color: "black",
    height: 500,
    marginLeft: 50,
  },
  img: {
    height: "22rem",
    marginLeft: "0.4rem",
  },
  sidebar: {
    // marginTop: 0.5,
  },
};
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenSizeFits: window.matchMedia("(min-width: 768px)").matches,
    };
  }

  componentDidMount() {
    const adjustScreenSize = (e) =>
      this.setState({ screenSizeFits: e.matches });
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", adjustScreenSize);
  }

  render() {
    return (
      <div id="socials" className="d-flex flex-column my-1">
        <ul className="socials-ul">
          <li style={{ listStyle: "none", maxWidth: "2rem" }}>
            <a href="https://github.com/addiguskey" target="_blank">
              <img
                src={GitHubLogo}
                style={{ height: "2.3rem" }}
                id="github-logo"
              />
            </a>
          </li>
          <li style={{ listStyle: "none", maxWidth: "2rem" }}>
            <a
              href="https://www.linkedin.com/in/addi-guskey-533998185/"
              target="_blank"
            >
              <img
                style={{ height: "2.4rem" }}
                src={LinkedInLogo}
                id="linkedin-logo"
              />
            </a>
          </li>
          <li style={{ listStyle: "none", maxWidth: "2rem" }}>
            <a href="https://twitter.com/addiguskey" target="_blank">
              <img
                style={{ height: "2.4rem" }}
                src={TwitterLogo}
                id="twitter-logo"
              />
            </a>
          </li>
          <img src={line} style={styles.img}></img>
        </ul>

        <div id="foot2">
          {/* <div className="vr" style={styles.line}></div> */}
          <div className="d-flex flex-column align-items-center p-5">
            {this.state.screenSizeFits && (
              <img src={qr} style={{ height: "5.8rem" }}></img>
            )}
            {!this.state.screenSizeFits && (
              <img src={image} style={{ height: "2.5rem" }}></img>
            )}

            <p style={{ color: "gray" }} id="foot">
              Designed and Built by Addi Guskey
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
