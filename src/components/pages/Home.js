import React from "react";
import "../style.css";
// import Image from "../../assets/images/logos/navg.png";
// import g from "../../assets/images/logos/grayg.png";
// import About from "./about/About";
// import Projects from "./Projects";
// import Contact from "./Contact";
import homeimg from "../../assets/images/logos/homeimg.png";

const styles = {
  nameContainer: {
    marginLeft: "-7vw",
    zIndex: 2,
    // position: "absolute",
    marginTop: "1%",
    marginBottom: "15%",
  },
  name: {
    color: "#1E5CD7",
    fontSize: "10vw",
    fontWeight: 900,
  },
  desc: {
    marginTop: "2%",
    color: "black",
    fontSize: "1vw",
    marginLeft: "1vw",
    lineHeight: 1,
  },
  img: {
    marginTop: "-3%",

    marginLeft: "10vw",
    zIndex: 1,
    width: "45vw",
    height: "auto",
  },
};
export default function Home() {
  return (
    <>
      <section
        className="d-flex flex-column text-left p-4"
        style={{ marginTop: "9%" }}
      >
        {/* <div className="align-itmes-center text-center">
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
        </div> */}
        <div className="row" id="frame">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 " id="fade">
            <img src={homeimg} style={styles.img}></img>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-6"
            style={styles.nameContainer}
          >
            <h2 style={styles.name}>
              <em>addi</em>
            </h2>
            <h2 style={styles.name}>
              <em>guskey</em>
            </h2>
            <div style={styles.desc}>
              <h6 style={styles.desc}>
                junior full-stack developer, front-end developer, and designer
              </h6>
              <h6 style={styles.desc}>
                eager to expand my knowledge and be a part of an amazing team
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
