import React, { useState } from "react";
import ContactForm from "../contactForm";
import Stack from "react-bootstrap/Stack";
import stamp from "../../assets/images/stamp2.png";
import code from "../../assets/images/code.png";
const styles = {
  pgTitle: {
    fontWeight: 800,
    fontSize: "4.5rem",
    color: "#1E5CD7",
    marginLeft: "10rem",
    marginTop: "6%",
  },

  posrtcard: {
    borderRadius: "10mm",
    padding: "20rem",
    color: "#4a4950",
    border: " none",
    backgroundColor: "#D9D9D9",
    width: "70vw",
    height: "32rem",
  },
  emailText: {
    color: "white",
    marginLeft: "12rem",
    fontWeight: 600,
    lineHeight: 0,
    fontSize: "1rem",
    marginBottom: "2rem",
  },
};

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [isError, setError] = useState(false);

  const openMsgMadolFunc = (open) => {
    setOpen(open);
  };

  const checkIsErrorFunc = (isError) => {
    setError(isError);
  };
  return (
    <section id="contact" className="d-flex flex-column p-5 mx-3">
      <h1 style={styles.pgTitle}>let's connect.</h1>
      <a style={styles.emailText} href="mailto:addisonguskey@gmail.com">
        addisonguskey@gmail.com
      </a>
      <div className="d-flex flex-column align-items-center">
        <div
          className="card p-5 mx-5 mt-4"
          id="postcard"
          style={styles.posrtcard}
        >
          <Stack
            direction="horizontal"
            // gap={3}
          >
            <div>
              <h5></h5>
            </div>
            <div className="ms-auto">
              <img src={stamp} style={{ height: "5.3rem" }}></img>
            </div>
          </Stack>
          <ContactForm
            openMsgMadolFunc={openMsgMadolFunc}
            checkIsErrorFunc={checkIsErrorFunc}
          />
        </div>
      </div>
    </section>
  );
}
