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

export default function About() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      It's not that long, I promise.
    </Tooltip>
  );
  const MyVerticallyCenteredModal = (data) => {
    <Modal
      {...data}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={data.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>;
  };
  const [modalShow, setModalShow] = React.useState(false);
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
          <div className="row ">
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
        <div className="d-flex flex-column align-items-center ml-5">
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
              delay={{ show: 250, hide: 400 }}
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
        className="card text-right my-5 bg-transparent"
        style={{ border: "none" }}
      >
        <div className="row ">
          <div
            id="random-container"
            className="d-flex flex-column col align-items-end"
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
              }}
              className="card-title p-5  mr-3"
            >
              {" "}
              {/* <div className="vr text-right" style={{ height: "4rem" }} /> */}
              education
              <hr />
            </div>
            <div
              className="col align-items-end card-body ms-auto mr-5"
              style={{ minWidth: "23rem", maxWidth: "80rem" }}
            >
              <h6 style={{ fontWeight: "bold" }}>University of Denver</h6>
              <p>
                2022 <br></br>∙ Full-Stack Coding Bootcamp
              </p>
              <br></br>
              <p>
                2015 - 2019 <br></br>
                (Pre-Dental) <br></br>∙ Biochemistry& Molecular Biology, B.S.{" "}
                <br></br> ∙ Minor: Mathematics
              </p>
            </div>
          </div>
          <div
            id="random-container"
            className="d-flex flex-column col align-items-start"
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
              }}
              className="card-title p-5"
            >
              {" "}
              {/* <div className="vr text-right" style={{ height: "4rem" }} /> */}
              skills
              <hr />
            </div>
            <div
              className="col card-body ms-auto mr-5"
              style={{ minWidth: "23rem", maxWidth: "80rem" }}
            >
              <p className="col">
                ∙ React.js<br></br>∙ JavaScript/ jQuery<br></br>∙ RESTful API/
                Third-party APIs/ GraphQL API<br></br>∙ Node.js/ Object-Oriented
                Programming (OOP)<br></br>∙ Express.js/MySQL/ MongoDB<br></br>∙
                Html5 / CSS3 / Bootstrap
                <br></br>∙ Git/ GitHub / npm
              </p>
            </div>
          </div>
          <div
            id="random-container"
            className="d-flex flex-column col align-items-end text-align-right ml-5"
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
              }}
              className="card-title p-4 "
            >
              {" "}
              {/* <div className="vr text-right" style={{ height: "4rem" }} /> */}
              random<br></br>facts
              <hr />
            </div>
            <div
              className="col card-body ms-auto mr-5"
              style={{ minWidth: "23rem", maxWidth: "80rem" }}
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
