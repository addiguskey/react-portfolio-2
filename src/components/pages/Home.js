import React from "react";
import "../style.css";
import Image from "../../assets/images/navg.png";

const styles = {};
export default function Home() {
  return (
    <div
      className="d-flex flex-column align-itmes-center p-4"
      style={{ marginTop: "7%" }}
    >
      <div className="align-itmes-center text-center">
        <h1 style={{ fontSize: "2.7rem" }}>
          addi{" "}
          <span>
            <img src={Image} style={{ height: "5rem" }}></img>
          </span>{" "}
        </h1>
        <br></br>
        <h5>
          full- stack developer, <br></br>
          <span style={{ marginRight: 85, fontSize: "1.1rem" }}>designer,</span>
        </h5>

        <p style={{ fontSize: "0.7rem", marginLeft: 70 }}>dog mom</p>
      </div>
    </div>
  );
}
