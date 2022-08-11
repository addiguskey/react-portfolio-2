import React from "react";
import { saveAs } from "file-saver";
import Stack from "react-bootstrap/Stack";

const styles = {};
export default function Resume() {
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
  };
  return (
    <div className="p-5 mx-3">
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "3rem",
        }}
      >
        resume.
      </h1>
      <br></br>
      <br></br>
      <div className="p-5 mx-5">
        <Stack direction="horizontal" gap={3}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.7rem",
            }}
          >
            education{" "}
          </div>
          <div className="vr" />
          <div>
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
        </Stack>
        <br></br>
        <br></br>
        <div className="mx-5 p-5">
          <Stack direction="horizontal" gap={3}>
            <div className=" ms-auto mr-5">
              <p>
                ∙ React.js <br></br>∙ JavaScript/ jQuery <br></br>∙ RESTful API/
                Third-party APIs/ GraphQL API <br></br>∙ Node.js/
                Object-Oriented Programming (OOP) <br></br>∙ Express.js/MySQL/
                MongoDB <br></br>∙ Html5 / CSS3 / Bootstrap <br></br>∙ Git/
                GitHub / npm
              </p>
            </div>
            <div className="vr" />
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.7rem",
              }}
            >
              skills
            </div>
          </Stack>
        </div>
      </div>

      <div className="text-center">
        <btn
          style={styles.btn}
          className="btn-lg btn-outline-dark align-items-center p-3"
          onClick={saveFile}
        >
          Download CV
        </btn>
      </div>
    </div>
  );
}
