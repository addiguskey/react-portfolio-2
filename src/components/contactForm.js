import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const styles = {
  div: {
    width: "100%",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
  },
  msg: {
    width: "100%",
    height: "52%",
    // marginBottom: 10,
    border: "none",
    borderBottom: " 2px solid #fffff",
  },
  input: {
    width: "100%",
    // marginBottom: 10,
    border: "none",
    borderBottom: " 2px solid #fffff",
  },
  info: {
    marginTop: "9rem",
  },
  send: {
    width: "100%",
    marginTop: "1rem",
    marginBottom: "15rem",
    border: "none",
  },
};
export default function ContactForm(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        "service_vitaccj",
        //   "YOUR_TEMPLATE_ID",
        "template_o0ox5g4",
        form.current,
        // "YOUR_PUBLIC_KEY"
        "vDmeerxkRbH-zgu0Y"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        props.openMsgMadolFunc(true);
        props.checkIsErrorFunc(false);
        //empty input field after each submit
        e.target.reset();
      })
      .catch((err) => {
        props.openMsgMadolFunc(true);
        props.checkIsErrorFunc(true);
        console.log("FAILED...", err);
      });
  };
  //   const emailSent = sendEmail.state.response;

  return (
    <div style={styles.div}>
      <form ref={form} onSubmit={sendEmail} style={styles.form}>
        <div className="row" id="postcard-row">
          <div className="col">
            <label style={styles.label} id="msg">
              message:
            </label>
            <textarea name="message" style={styles.msg} id="msg-box" />
          </div>
          <div className="col" style={styles.info}>
            <label style={styles.label}>name:</label>
            <input
              type="text"
              name="user_name"
              style={styles.input}
              // className="bg-transparent"
            />
            <label style={styles.label}>email:</label>
            <input type="email" name="user_email" style={styles.input} />
            <input
              type="submit"
              value="Send"
              style={styles.send}
              className="btn btn-outline-dark"
            />
          </div>
        </div>

        <div>
          {/* {emailSent ? (
          <p>I will get back to you ASAP !</p>
        ) : (
          <p>
            Ope, something went wrong! Please contact me directly at{" "}
            <a href="mailto:addisonguskey@gmail.com">addisonguskey@gmail.com</a>{" "}
            directly.
          </p>
        )} */}
        </div>
      </form>
    </div>
  );
}
