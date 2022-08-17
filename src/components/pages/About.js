import React, { useState } from "react";
import me from "../../assets/images/me.png";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";
import code from "../../assets/images/code.png";
const styles = {
  sidebar: {
    zIndex: -1,
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
          When I was 15, <br></br>my brother-in-law started a business and asked
          me if I knew how to build websites. <br></br>I didn't. I said yes.{" "}
          <br></br>
          So, I locked myself in my room for the next two weeks and somehow made
          a website! <br></br>That indescribable feeling of accomplishment and
          satisfaction stuck with me for a long time. <br></br>
          <br></br> Fast forward, 8 years later, <br></br>I graduated from
          University of Denver with a Biochemistry degree thinking that my next
          steps would be Dental school. But, during the two years of prepping
          for dental school, I couldn't stop thinking about the coding class I
          took my very last semester of college. <br></br>So, in April of 2022,
          I finally decided to do something about it. <br></br>Here we are, a
          full-stack bootcamp, long nights, too much coffee, and many naps later
          ! <br></br>
          <br></br> I am so so excited to be a part of this industry that is so
          impactful and life-changing.
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

// const renderTooltip = (props) => (

// );
// const MyVerticallyCenteredModal = (data) => {

// };
export default function About() {
  const [modalShow, setModalShow] = React.useState(false);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      It's not that long, I promise
    </Tooltip>
  );
  return (
    <div id="about-container" className="p-5 mx-3">
      <div>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
          }}
        >
          about.
        </h1>
        <p className="mx-4">based in Denver, CO</p>
      </div>
      <div>
        <div
          className=" card bg-transparent align-items-center mx-4 p-5 justify-content-between"
          style={{ width: "100%", border: "none" }}
        >
          <div className="row">
            <div className="col card-body-left" style={{ maxWidth: "25rem" }}>
              <img
                // varient="left"
                src={me}
                style={{ height: "20rem", border: "none", maxWidth: "22rem" }}
              />
            </div>
            <div className="vr" id="about-vr" />
            <div
              className="col card-body-right align-itmes-center p-4"
              style={{ minWidth: "23rem", maxWidth: "40rem" }}
            >
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                Hi there,
              </h5>
              <p className="card-text">
                Welcome ! My name is Addi. <br></br>I took a coding class on a
                whim dring my last semester of college in 2019 and fell in love.{" "}
                <br></br> Here we are a few years later !<br></br>
                <br></br>I enjoy helping others, designing, and building things
                from scratch.
                <br></br>
                When I am not coding, you can find me <br></br>∙ painting
                <br></br>∙ cooking<br></br>∙ skiing<br></br>∙ hiking with my two
                pups,{" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  href="http://instagram.com/khione.and.udon"
                  target="_blank"
                >
                  Khione and Udon
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center ml-5 ">
          <div
            className=" card text-center align-items-center p-4 "
            style={{ borderRadius: "5mm", maxWidth: "30rem" }}
          >
            <h6 className="my-4" style={{ fontWeight: "bold" }}>
              <div className="blockquote-custom-icon bg-black ">
                <img src={code} />
              </div>
              click the button below to learn a little more about me
            </h6>
            <OverlayTrigger
              placement="bottom"
              // delay={{ show: 500, hide: 500 }}
              overlay={renderTooltip}
            >
              <Button variant="light" onClick={() => setModalShow(true)}>
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
      <div
        className="card text-right my-5 bg-transparent "
        style={{ border: "none" }}
      >
        <div className="row ">
          <div
            id="random-container"
            className="d-flex flex-column col align-items-end p-3"
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                // border: "1px solid black",
                backgroundColor: "f4f4f4",
                position: "absolute",
                zIndex: 3,
              }}
              className="card-title p-3  mr-2 my-3"
            >
              {" "}
              {/* <div className="vr text-right" style={{ height: "4rem" }} /> */}
              education
              <hr />
            </div>
            <div
              className="col align-items-end card-body ms-auto mr-5 "
              style={{
                minWidth: "23rem",
                maxWidth: "80rem",
                border: "1px solid black",
                position: "relative",
                zIndex: 1,
                marginTop: "6rem",
              }}
            >
              <p>
                2022 <br></br>
                <span style={{ fontWeight: "bold" }}>University of Denver</span>
                <br></br>∙ Full-Stack Coding Bootcamp
              </p>
              <br></br>
              <p>
                2015 - 2019 <br></br>
                <span style={{ fontWeight: "bold" }}>University of Denver</span>
                <br></br>
                <em>Bachelor of Science</em> <br></br>∙ Biochemistry& Molecular
                Biology (Pre-Dental) <br></br> ∙ Minor: Mathematics
              </p>
            </div>
          </div>
          <div
            id="random-container"
            className="d-flex flex-column col align-items-end p-3"
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                // border: "1px solid black",
                backgroundColor: "f4f4f4",
                position: "absolute",
                zIndex: 3,
              }}
              className="card-title p-3  mr-2 my-3"
            >
              {" "}
              {/* <div className="vr text-right" style={{ height: "4rem" }} /> */}
              skills
              <hr />
            </div>
            <div
              className="col align-items-end card-body ms-auto mr-5 "
              style={{
                minWidth: "23rem",
                maxWidth: "80rem",
                border: "1px solid black",
                position: "relative",
                zIndex: 1,
                marginTop: "6rem",
              }}
            >
              <p className="col p-3">
                ∙ React.js<br></br>∙ JavaScript(ES6)/ jQuery<br></br>∙ RESTful
                API/ Third-party APIs/ GraphQL API<br></br>∙ Node.js/
                Object-Oriented Programming (OOP)<br></br>∙ Express.js/MySQL/
                MongoDB<br></br>∙ Html5 / CSS3 / Bootstrap
                <br></br>∙ Git/ GitHub / npm
              </p>
            </div>
          </div>

          <div
            id="random-container"
            className="d-flex flex-column col align-items-end p-3"
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                // border: "1px solid black",
                backgroundColor: "f4f4f4",
                position: "absolute",
                zIndex: 3,
              }}
              className="card-title  p-3"
            >
              {" "}
              {/* <div className="vr text-right" style={{ height: "4rem" }} /> */}
              random<br></br>facts
              <hr />
            </div>
            <div
              className="col card-body ms-auto p-4 align-items-center"
              style={{
                minWidth: "23rem",
                maxWidth: "80rem",
                border: "1px solid black",
                position: "relative",
                zIndex: 1,
                marginTop: "8rem",
              }}
            >
              <p className="col">
                ∙ I'm into fashion and interior design <br></br>∙ a bookworm as
                of recent (shocking! I know!) <br></br>∙ I'm from S. Korea.
                안녕하세욤 ☻ <br></br>∙ OH, and I can't stop using these smiley
                faces ◡̈
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
