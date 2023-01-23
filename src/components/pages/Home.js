import React from "react";
import "../style.css";
import homeimg from "../../assets/images/postcardbg.png";
// import homeimg from "../../assets/images/logos/homeimg.png";

const styles = {
  pg: {
    backgroundImage: "url('../assets/images/postcardbg.png')",
    marginTop: "9%",
  },
  nameContainer: {
    // marginLeft: "-7vw",
    zIndex: 2,
    marginTop: "5.5%",
    marginBottom: "15%",
  },
  name: {
    // color: "#1E5CD7",
    color: "black",
    fontSize: "13.2vw",
    fontWeight: 900,
    lineHeight: 0.8,
    fontFamily: "Poppins, sans-serif",
    // transform: "scale(1,0.8)",
  },
  name2: {
    // color: "#1E5CD7",
    color: "black",
    fontSize: "10.6vw",
    fontWeight: 900,
    lineHeight: 0.5,
    fontFamily: "Poppins, sans-serif",
    // fontFamily: "Lora, serif",

    // fontDisplay: "sans-serif",
  },
  desc: {
    marginTop: "1%",
    color: "da5c3a",
    fontSize: "1.6vw",
    marginLeft: "-9vw",
    lineHeight: 0,
    fontWeight: 700,
    // fontFamily: "Lora, serif",
  },
  desc2: {
    marginTop: "1.2%",
    color: "da5c3a",
    fontSize: "1.6vw",
    marginLeft: "18vw",
    lineHeight: 0,
    fontWeight: 700,
    // fontFamily: "Lora, serif",
  },
  desc3: {
    color: "da5c3a",
    fontSize: "1.1vw",
    marginTop: "1.4vw",
    marginLeft: "3vw",

    lineHeight: 0,
    fontWeight: 700,
    // fontFamily: "Lora, serif",
  },
  desc4: {
    marginTop: "1%",
    fontSize: "1.4vw",
    marginLeft: "2vw",
    lineHeight: 0.5,
    fontWeight: 6800,
    color: "025023",
    fontFamily: "Lora, serif",
  },

  img: {
    marginTop: "-3%",
    marginLeft: "11vw",
    zIndex: 1,
    width: "43vw",
    height: "auto",
  },
};
export default function Home() {
  return (
    <>
      <section
        className="d-flex flex-column text-left"
        style={styles.pg}
        id="home"
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
        <div className="row align-items-center text-center" id="frame">
          {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 " id="fade"> */}
          {/* <img src={homeimg} style={styles.img}></img> */}
          {/* </div> */}
          <div
            className="col"
            // className="col-xl-6 col-lg-6 col-md-6 col-sm-6"
            style={styles.nameContainer}
          >
            <h2 style={styles.name} id="name">
              addi
            </h2>
            <h2 style={styles.name2}>GUSKEY</h2>
            {/* <div style={styles.desc}> */}
            <h6 style={styles.desc}>junior full-stack developer,</h6>
            <h6 style={styles.desc2}>front-end developer, </h6>
            <h6 style={styles.desc3}>designer</h6>
            <h6 style={styles.desc4}>
              <em>
                eager to expand my knowledge and be a part of an amazing team
              </em>
            </h6>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
