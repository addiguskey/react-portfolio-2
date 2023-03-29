import React, { useState } from "react";
import me from "../../../assets/images/me.png";

const styles = {
  sidebar: {
    zIndex: -1,
  },
  all: {
    color: "black",
    fontSize: "1.4rem",
  },
  title: {
    fontWeight: 800,
    fontSize: "4.5vw",
    color: "black",
    marginLeft: "10rem",
    marginTop: "7rem",
  },
  me: {
    height: "27rem",
    border: "none",
    maxWidth: "30rem",
    marginLeft: "-4rem",
  },
  hello: {
    fontWeight: "bold",
    lineHeight: 1.2,
    color: "#7c766c",
    fontFamily: "Lora, serif",
  },
  overview: {
    color: "black",
    fontWeight: 800,
    lineHeight: 1.2,
    fontSize: "1.2rem",
  },
  softskills: {
    fontWeight: 800,
    lineHeight: 1.2,
    fontSize: "1.2rem",
    color: "262fe4",
  },
  hardskills: {
    fontWeight: 500,
    lineHeight: 1.2,
    color: "7c766c",
    fontSize: "1.1rem",
  },
  facts: {
    color: "d3d3d3",
    lineHeight: 1.1,
    fontWeight: 500,
    fontSize: "1rem",
    fontFamily: "Lora, serif",
  },
};

export default function About() {
  return (
    <section id="about-me" className="mx-5 p-5 " style={styles.all}>
      <div>
        <h1 style={styles.title}>about-me.</h1>
      </div>
      <div>
        <div
          className=" card bg-transparent align-items-center mx-5 my-4 p-4 justify-content-between"
          style={{ width: "100%", border: "none" }}
        >
          <div className="row">
            <div
              className="col card-body-left"
              style={{ maxWidth: "25rem", position: "relative" }}
            >
              <img src={me} style={styles.me} id="myPic" />
            </div>
            <div
              className="col card-body-right align-itmes-center"
              style={{ minWidth: "23rem", maxWidth: "50rem" }}
            >
              <h3 className="card-title" style={styles.hello}>
                <em> Hello!</em>
              </h3>
              <p style={styles.overview}>
                I'm currently a Freelance Front End Developer re-building a
                Martial Art’s website utilizing React.js, Bootstrap, and various
                JS frameworks. I am a creative problem solver who also loves to
                design.
              </p>
              {/* <p
                style={{ fontWeight: 500, lineHeight: 1.2, fontSize: "1.1rem" }}
              >
                My interest in web development and design started when I took a
                JS animation course to fulfill my Mathematics minor during my
                last semester of college.
              </p> */}
              <p style={styles.softskills}>
                I am an extremely fast learner, a compassionate self-starter and
                a team-player who is excited to collaborate with other motivated
                individuals.
              </p>
              <p style={styles.hardskills}>
                Here are a few other technologies that I am knowledgeable in
                <div className="d-flex flex-column ">
                  {" "}
                  <div className="row mx-4">
                    <div className="col-xl-6 col-l-6 col-md-6 col-sm-6">
                      <ul>
                        {" "}
                        <li>JavaScript(ES6+)</li>
                        <li>jQuery</li>
                        <li>RESTful API</li>
                        <li>PHP</li>
                      </ul>
                    </div>
                    <div className="col-xl-6 col-l-6 col-md-6 col-sm-6">
                      {" "}
                      <ul>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>GraphQL</li>
                      </ul>
                    </div>{" "}
                  </div>
                </div>
              </p>
              <em style={styles.facts}>
                When I’m not coding, you can find me painting, running, skiing,
                and hiking with my two pups, Khione and Udon!
              </em>
              <br></br>
              <em style={styles.facts}>
                {" "}
                I like to call myself “a fair-weather runner and a cold-weather
                knitter/skiier”
              </em>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
