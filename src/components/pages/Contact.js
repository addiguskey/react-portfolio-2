import React, { useState } from "react";
import ContactForm from "../contactForm";
import Stack from "react-bootstrap/Stack";
import stamp from "../../assets/images/stamp.png";
import code from "../../assets/images/code.png";

const styles = {
  a: {
    textWeight: "bold",
    color: "black",
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
    <div className="p-5 mx-3">
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "3rem",
        }}
      >
        let's connect.
      </h1>
      <div
        className=" card bg-transparent p-5 mx-5 flex-clolumn align-items-center mt-5"
        id="postcard"
      >
        <Stack direction="horizontal" gap={3}>
          <div>
            <h5></h5>
          </div>
          {/* <div className="bg-light border ms-auto">Second item</div> */}
          {/* <div className="vr justify-content-between" /> */}
          <div className="ms-auto">
            <img src={stamp} style={{ height: "4rem" }}></img>
          </div>
        </Stack>
        <ContactForm
          openMsgMadolFunc={openMsgMadolFunc}
          checkIsErrorFunc={checkIsErrorFunc}
        />
      </div>
      <div className="d-flex flex-column align-items-center my-5">
        <div
          className=" card text-center align-items-center p-3 my-5"
          style={{ borderRadius: "5mm", maxWidth: "30rem" }}
        >
          <h6 className="my-3" style={{ fontWeight: "bold" }}>
            <div className="blockquote-custom-icon bg-black ">
              <img src={code} />
            </div>
            <p>
              Feel free to email me directly at{" "}
              <a href="mailto:addisonguskey@gmail.com" style={styles.a}>
                addisonguskey@gmail.com
              </a>
              .<br></br>
              <br></br> Would love to hear from you!
            </p>
          </h6>
        </div>
      </div>
    </div>
  );
}
