import React, { useState } from "react";
import ContactForm from "../contactForm";
import Stack from "react-bootstrap/Stack";
import stamp from "../../assets/images/stamp.png";
import code from "../../assets/images/code.png";

const styles = {
  all: {
    color: "a9aea2",
  },
  a: {
    textWeight: "bold",
    color: "a9aea2",
  },
  posrtcard: {
    borderRadius: "5mm",
    padding: "20rem",
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
    <div className="p-5 mx-3" style={styles.all}>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "3rem",
          color: "#f4f593",
        }}
      >
        let's connect.
      </h1>
      <p className="mx-4">addisonguskey@gmail.com</p>
      <div
        className=" card bg-transparent p-5 mx-5 flex-clolumn align-items-center mt-5"
        id="postcard"
        style={styles.posrtcard}
      >
        <Stack direction="horizontal" gap={3}>
          <div>
            <h5></h5>
          </div>
          <div className="ms-auto">
            <img src={stamp} style={{ height: "4rem" }}></img>
          </div>
        </Stack>
        <ContactForm
          openMsgMadolFunc={openMsgMadolFunc}
          checkIsErrorFunc={checkIsErrorFunc}
        />
      </div>
    </div>
  );
}
