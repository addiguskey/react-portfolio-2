import React from "react";

const styles = {
  title: {
    fontWeight: "bold",
    fontSize: "2rem",
    backgroundColor: "f4f4f4",
    position: "absolute",
    zIndex: 3,
    marginRight: "1.5rem",
  },
  skillstitle: {
    fontWeight: "bold",
    fontSize: "2rem",
    backgroundColor: "f4f4f4",
    position: "absolute",
    zIndex: 3,
    marginRight: "3.5rem",
  },
  education: {
    minWidth: "23rem",
    maxWidth: "80rem",
    border: "1px solid black",
    borderRadius: "5mm",
    position: "relative",
    zIndex: 1,
    marginTop: "6rem",
  },
  skills: {
    minWidth: "23rem",
    maxWidth: "80rem",
    border: "1px solid black",
    borderRadius: "5mm",
    position: "relative",
    zIndex: 1,
    marginTop: "6rem",
    marginRight: "2rem",
  },
  random: {
    minWidth: "23rem",
    maxWidth: "80rem",
    border: "1px solid black",
    borderRadius: "5mm",
    position: "relative",
    zIndex: 1,
    marginTop: "8rem",
  },
};

export default function AboutCards() {
  return (
    <>
      <div
        className="card text-right my-5 bg-transparent"
        style={{ border: "none" }}
      >
        <div className="row">
          {/* ---------------------------------------*/}
          {/* ---------------EDUCATION---------------*/}
          {/* ---------------------------------------*/}
          <div
            id="education-container"
            className="d-flex flex-column col align-items-end p-3"
          >
            <div style={styles.title} className="card-title p-3 mr-2 my-3">
              {" "}
              education
              <hr />
            </div>
            <div
              className="col align-items-end card-body ms-auto mr-5 "
              style={styles.education}
            >
              <p style={{ marginTop: "2rem", marginLeft: "1.5rem" }}>
                2022 <br></br>
                <p style={{ fontWeight: "bold" }}>
                  University of Denver
                  <ul style={{ fontWeight: "normal" }}>
                    <li>Full-Stack Coding Bootcamp</li>
                  </ul>
                </p>
              </p>

              <p style={{ marginLeft: "1.5rem", marginRight: "1.5rem" }}>
                2015 - 2019
                <p style={{ fontWeight: "bold" }}>
                  University of Denver{" "}
                  <p style={{ fontWeight: "normal" }}>
                    <em>Bachelor of Science</em>
                    <ul>
                      <li>Biochemistry& Molecular Biology (Pre-Dental)</li>
                      <li>Minor: Mathematics</li>
                    </ul>
                  </p>
                </p>
              </p>
            </div>
          </div>
          {/* --------------------------------------*/}
          {/* ---------------SKILLS-----------------*/}
          {/* --------------------------------------*/}
          <div
            id="skills-container"
            className="d-flex flex-column col align-items-end p-3"
          >
            <div style={styles.skillstitle} className="card-title p-3 my-3">
              {" "}
              skills
              <hr />
            </div>
            <div
              className="col align-items-end card-body ms-auto mr-5 "
              style={styles.skills}
            >
              <p className="col p-3 mt-2">
                <ul>
                  <li>React.js</li>
                  <li>JavaScript(ES6)/ jQuery</li>
                  <li>HTML5 / CSS3 / Bootstrap</li>
                  <li>REST/ Third-party APIs</li>
                  <li>Node.js/Express.js </li>
                  <li>Object-Oriented Programming (OOP)</li>
                  <li>MySQL/ Sequlize</li>
                  <li>GraphQL/ MongoDB</li>
                  <li>Git</li>
                  <li>MVC</li>
                </ul>
              </p>
            </div>
          </div>
          {/* --------------------------------------*/}
          {/* ---------------RANDOM-----------------*/}
          {/* --------------------------------------*/}
          <div
            id="random-container"
            className="d-flex flex-column col align-items-end p-3"
          >
            <div style={styles.title} className="card-title  p-3">
              {" "}
              random<br></br>facts
              <hr />
            </div>
            <div
              className="col card-body ms-auto p-4 align-items-center"
              style={styles.random}
            >
              <p className="col">
                <ul style={{ marginTop: "8%" }}>
                  <li>I'm into fashion and interior design</li>
                  <li>a bookworm as of recent!</li>
                  <li>
                    a fair-weather runner and a cold-weather knitter/skiier
                  </li>
                  <li>
                    I want to compete in a sprint thriathlon before I turn 28
                  </li>
                  <li>
                    I moved to the states from S. Korea when I was 14YO.{" "}
                    <br></br>
                    안녕하세요 ☻
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
