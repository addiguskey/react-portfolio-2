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
    color: "#a9aea2",
  },
};

function MyVerticallyCenteredModal(data) {
  return (
    <Modal
      {...data}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How I got into coding
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Since I was a kid, I knew I wanted to end up doing whatever it was
          that helped others. <br></br>Wanting to choose a career that helped
          others and involved creativity, I thought being a dentist was my
          answer (there's a lot of art involved in dentisry).
          <br></br>
          After completing undergrad, I jumped in the dental field to gain
          hands-on experience while I studied for dental school. Although
          working in the field brought me great joy and fulfillment, I felt my
          creative brain starting to stiffen and seemed that all the problems
          have already been solved.
          <br></br>So, ealier in 2022, I started to think back on which class
          brought me the most joy during undergrad- it was a JavaScript course I
          took on a whim. <br></br>Now, here we are, a full-stack bootcamp, long
          nights, too much coffee, and many naps later ! <br></br>
          <br></br> I am so excited to be creatively solving impactful,
          life-changing problems.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-dark" onClick={data.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function About() {
  const [modalShow, setModalShow] = React.useState(false);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      It's not that long, I promise
    </Tooltip>
  );
  return (
    <div id="about-container" className="mx-5" style={styles.all}>
      <div>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
            color: "#f4f593",
          }}
        >
          about.
        </h1>
        <p className="mx-4">based in Denver, CO</p>
      </div>
      <div>
        <div
          className=" card bg-transparent align-items-center mx-3 justify-content-between"
          style={{ width: "100%", border: "none" }}
        >
          <div className="row">
            <div className="col card-body-left" style={{ maxWidth: "25rem" }}>
              <img
                // varient="left"
                src={me}
                style={{
                  height: "18rem",
                  border: "none",
                  maxWidth: "22rem",
                  marginLeft: "4rem",
                }}
              />
            </div>
            <div className="vr" id="about-vr" style={{ color: "a9aea2" }} />
            <div
              className="col card-body-right align-itmes-center"
              style={{ minWidth: "23rem", maxWidth: "40rem" }}
            >
              <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                Hi!
              </h5>
              <p className="card-text">My name is Addi Guskey. </p>
              <p style={{ color: "#f4f593" }}>
                I'm currently a Freelance Front End Developer who has experience
                in React.js, Node.js, MySQL, and various JS frameworks.
              </p>

              <p style={{ fontWeight: "bold" }}>
                I am a compassionate self-starter and a team-player who wants to
                make an impact.
              </p>

              <p>When I am not coding, you can find me </p>
              <ul>
                <li>running</li>
                <li>painting</li>
                <li>skiing</li>
                <li>
                  hiking with my two pups,{" "}
                  <a
                    style={{
                      textDecoration: "none",
                      color: "a9aea2",
                      fontWeight: "bold",
                    }}
                    href="http://instagram.com/khione.and.udon"
                    target="_blank"
                    id="pups"
                  >
                    Khione and Udon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center ml-5 my-5">
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
        </div>
      </div>
      <div>
        <AboutCards></AboutCards>
      </div>
    </div>
  );
}
