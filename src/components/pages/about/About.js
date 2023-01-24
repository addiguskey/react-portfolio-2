import React, { useState } from "react";
import me from "../../../assets/images/me.png";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";
import code from "../../../assets/images/code.png";
import AboutCards from "./AboutCards";

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
  },
  me: {
    height: "27rem",
    border: "none",
    maxWidth: "30rem",
    marginLeft: "-4rem",
  },
  facts: {
    color: "white",
    lineHeight: 1.1,
    fontWeight: 500,
    fontSize: "1rem",
    fontFamily: "Lora, serif",
  },
};

// function MyVerticallyCenteredModal(data) {
//   return (
//     <Modal
//       {...data}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           How I got into coding
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>

//       </Modal.Body>
//       <Modal.Footer>
//         <Button className="btn-dark" onClick={data.onHide}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

export default function About() {
  // const [modalShow, setModalShow] = React.useState(false);
  // const renderTooltip = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     It's not that long, I promise
  //   </Tooltip>
  // );
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
            {/* <div className="vr" id="about-vr" style={{ color: "a9aea2" }} /> */}
            <div
              className="col card-body-right align-itmes-center"
              style={{ minWidth: "23rem", maxWidth: "50rem" }}
            >
              <h3
                className="card-title"
                style={{
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  color: "025023",
                  fontFamily: "Lora, serif",
                }}
              >
                <em> Hello!</em>
              </h3>
              <p
                style={{
                  color: "#db5029",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  fontSize: "1.2rem",
                }}
              >
                I'm currently a Freelance Front End Developer re-building a
                Martial Art’s website utilizing React.js, Bootstrap, and various
                JS frameworks. I am a creative problem solver who also loves to
                design.
              </p>
              <p
                style={{ fontWeight: 500, lineHeight: 1.2, fontSize: "1.1rem" }}
              >
                My interest in web development and design started when I took a
                JS animation course to fulfill my Mathematics minor during my
                last semester of college.
              </p>
              <p
                style={{
                  fontWeight: 800,
                  lineHeight: 1.2,
                  fontSize: "1.2rem",
                  color: "262fe4",
                }}
              >
                I am an extremely fast learner, a compassionate self-starter and
                a team-player who is excited to collaborate with other motivated
                individuals.
              </p>
              <p
                style={{
                  fontWeight: 500,
                  lineHeight: 1.2,
                  color: "025023",
                  fontSize: "1.1rem",
                }}
              >
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
                When I’m not coding, you can find me painting, knitting,
                running, skiing, and hiking with my two pups, Khione and Udon!
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
        {/* <div className="d-flex flex-column align-items-center ml-5 my-5">
          <div
            className=" card text-center align-items-center p-4 mt-5"
            style={{
              borderRadius: "5mm",
              maxWidth: "30rem",
              backgroundColor: "a9aea2",
              color: "2a4e35",
            }}
          >
            <h6 className="my-4" style={{ fontWeight: "bold" }}>
              <div className="blockquote-custom-icon bg-black ">
                <img src={code} />
              </div>
              a little more about my journey into CS
            </h6>
            <OverlayTrigger
              placement="bottom"
              // delay={{ show: 500, hide: 500 }}
              overlay={renderTooltip}
            >
              <Button
                variant="transparent"
                onClick={() => setModalShow(true)}
                style={{ color: "e7e4db" }}
              >
                README.md
              </Button>
            </OverlayTrigger>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div> */}
      </div>
      <div>{/* <AboutCards></AboutCards> */}</div>
    </section>
  );
}
