import React from "react";
import "../style.css";
import homeimg from "../../assets/images/postcardbg.png";
// import homeimg from "../../assets/images/logos/homeimg.png";

const styles = {
  nameContainer: {
    marginTop: "6.5%",
    // marginBottom: "15%",
    marginLeft: "15%",
  },
  name: {
    // color: "#025023",
    color: "black",
    fontSize: "7vw",
    fontWeight: 900,
    lineHeight: 0.8,
    fontFamily: "Poppins, sans-serif",
    // transform: "scale(1,0.8)",
  },
  descContainer: {
    marginTop: "10rem",
  },
  desc: {
    marginTop: "2%",
    fontSize: "1.4vw",
    lineHeight: 0.5,
    // fontWeight: 800,
    color: "262fe4",
    fontFamily: "Lora, serif",
  },
  korean: {
    marginLeft: "-17rem",
    color: "#7c766c",
  },
  korean2: {
    marginLeft: "8rem",
    color: "#7c766c",
  },
};
export default function Home() {
  return (
    <>
      <section className="d-flex flex-column ">
        <div className="row align-items-center" style={styles.nameContainer}>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-center my-3">
            <p style={styles.korean}>
              <em>
                안녕하세요,<br></br>my name is
              </em>
            </p>

            <h2 style={styles.name} id="name">
              <>addi</>
            </h2>
            <h2 style={styles.name} id="name">
              <>lee</>
            </h2>
            <h2 style={styles.name}>guskey</h2>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-6"
            style={styles.descContainer}
          >
            <p style={{ color: "#7c766c" }}>
              {" "}
              <em>저는</em>
            </p>
            <h6>front-end developer, </h6>
            <h6>ux/ui student</h6>
            <h6>& content creator</h6>
            <p style={styles.korean2}>
              {" "}
              <em>입니다.</em>
            </p>
          </div>
        </div>
        <h6 style={styles.desc} className="text-center">
          <em>
            i'm eager to expand my knowledge and be a part of an amazing team
          </em>
        </h6>
      </section>
    </>
  );
}
