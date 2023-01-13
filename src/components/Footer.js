import React, { Component } from "react";
import qr from "../assets/images/logos/Addison_Guskey.png";
import qrcode from "../assets/images/logos/qrcode.png";
import image from "../assets/images/logos/logo-darkmode.png";
import GitHubLogo from "../assets/images/logos/github-logo.png";
import LinkedInLogo from "../assets/images/logos/linkedin-logo-1.png";
import TwitterLogo from "../assets/images/logos/twitter-logo.png";

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
    marginLeft: "0.5rem",
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
      <div id="socials" className="d-flex flex-column my-5">
        <ul className="socials-ul">
          <li style={{ listStyle: "none", maxWidth: "2rem" }}>
            <a href="https://github.com/addiguskey" target="_blank">
              <img
                src={GitHubLogo}
                style={{ height: "2.3rem", filter: "invert(0.1)" }}
                id="github-logo"
              />
            </a>
          </li>
          <li style={{ listStyle: "none", maxWidth: "2rem" }}>
            <a href="https://www.linkedin.com/in/addiguskey/" target="_blank">
              <img
                style={{ height: "2.4rem", filter: "invert(0.1)" }}
                src={LinkedInLogo}
                id="linkedin-logo"
              />
            </a>
          </li>
          <li style={{ listStyle: "none", maxWidth: "2rem" }}>
            <a href="https://twitter.com/addiguskey" target="_blank">
              <img
                style={{ height: "2.4rem", filter: "invert(0.1)" }}
                src={TwitterLogo}
                id="twitter-logo"
              />
            </a>
          </li>
          {/* <img src={line} style={styles.img}></img> */}
        </ul>

        <div id="foot2">
          {/* <div className="vr" style={styles.line}></div> */}
          <div
            className="d-flex flex-column align-items-center  p-5"
            style={{ marginTop: "14%" }}
          >
            {this.state.screenSizeFits && (
              <img src={qrcode} style={{ height: "4.5rem" }}></img>
            )}
            {!this.state.screenSizeFits && (
              <img src={image} style={{ height: "2.5rem" }}></img>
            )}

            <p style={{ color: "gray", fontSize: "0.8rem" }} id="foot">
              Designed and Built by Addi Guskey
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
