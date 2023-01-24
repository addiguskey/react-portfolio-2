import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import cardbg from "../assets/images/postcardbg.png";

const styles = {
  div: {
    width: "100%",
  },
  label: {
    fontWeight: 800,
    fontSize: 40,
    lineHeight: 1.5,
    marginTop: "-6.5rem",
    zIndex: 2,
    marginLeft: "1rem",
    color: "db5029",
  },
  label2: {
    fontWeight: 800,
    fontSize: 30,
    lineHeight: 1.5,
    color: "262fe4",

    // marginTop: "-3.5rem",
  },
  msg: {
    width: "100%",
    marginTop: "-3rem",
    color: "white",
    height: "67%",
    border: "none",
    borderBottom: " 6px solid #fffff",
    lineHeight: 1.5,
    zIndex: 1,
  },
  input: {
    width: "100%",
    lineHeight: 2,
    border: "none",
    borderBottom: " 4px solid white",
    color: "white",
  },
  info: {
    marginTop: "5rem",
  },
  send: {
    width: "100%",
    marginTop: "1rem",
    marginBottom: "15rem",
    border: "none",
    color: "a9aea2",
    lineHeight: 2,
    fontWeight: 800,
    fontSize: 25,
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
            <textarea
              name="message"
              className="bg-transparent"
              style={styles.msg}
              id="msg-box"
            />
          </div>
          <div className="col" style={styles.info}>
            <label style={styles.label2}>your name:</label>
            <input
              type="text"
              name="user_name"
              style={styles.input}
              className="bg-transparent"
              // className="bg-transparent"
            />
            <label style={styles.label2}>email:</label>
            <input
              className="bg-transparent"
              type="email"
              name="user_email"
              style={styles.input}
            />
            <input
              type="submit"
              value="send"
              style={styles.send}
              className="btn btn-outline-dark"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
