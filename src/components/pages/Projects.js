import React from "react";
import githubImg from "../../assets/images/logos/github-logo.png";
import mlma from "../../assets/images/projlogos/mlmalogo.png";
import mc from "../../assets/images/projlogos/mclogo.png";
import bookify from "../../assets/images/projlogos/bookifylogo.png";
import rnb from "../../assets/images/projlogos/rnblogo.png";
import projbg from "../../assets/images/proj/projbg.png";
import mlmapreview from "../../assets/images/proj/mlmapreview.png";
import mcpreview from "../../assets/images/proj/mcpreview.png";
import bookpreview from "../../assets/images/proj/bookpreview.png";
import rnbpreview from "../../assets/images/proj/rnbpreview.png";

const styles = {
  pgTitle: {
    fontWeight: 800,
    fontSize: "4.5vw",
    color: "black",
    marginRight: "10rem",
    marginTop: "5%",
  },
  // card: {
  //   borderRadius: "0mm",
  //   // backgroundColor: "#d9d9d9",
  //   height: "20rem",
  //   width: "35rem",
  //   zIndex: 2,
  //   filter: "opacity(80%)",
  // },
  mcpreview: {
    borderRadius: "0mm",
    height: "25rem",
    marginTop: "-1.5rem",
    marginLeft: "-1.5rem",
    marginBottom: "4rem",
    width: "48rem",
    zIndex: 2,
  },
  projoverview: {
    zIndex: 4,
    color: "#025023",
    fontWeight: 700,
    marginTop: "-0.5rem",
    lineHeight: 1,
  },
  projdesc: {
    zIndex: 4,
    color: "#2a2f2a",
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: "1.1rem",
  },
  ghlogo: {
    maxWidth: "3rem",
    maxheight: "3rem",
    marginLeft: "30.5rem",
    marginTop: "-1.5rem",
  },
  mctitle: {
    fontWeight: 800,
    fontSize: "3.5rem",
    textDecoration: "none",
    color: "white",
    marginTop: "-4rem",
    // zIndex: 2,
  },
  title: {
    fontWeight: 800,
    fontSize: "3.5rem",
    textDecoration: "none",
    color: "white",
    marginTop: "-4rem",
  },
  contentWrapper: {
    marginTop: "1rem",
    zIndex: 3,
    // marginLeft: "-1.5rem",
  },
  cardContent: {
    marginLeft: "-2rem",
    zIndex: 3,
  },
  content: {
    lineHeight: 1.1,
    marginTop: "-0.8rem",
    color: "da5c3a",
    fontWeight: 700,
    fontSize: "1.5rem",
  },
  mlmalogo: {
    filter: "opacity(30%)",
    height: "14rem",
    width: "auto",
    marginTop: "-10.5rem",
    marginLeft: "17rem",
    zIndex: 3,
  },
  mclogo: {
    filter: "opacity(40%)",
    height: "16.5rem",
    width: "auto",
    marginTop: "-19rem",
    marginBottom: "-1rem",
    marginLeft: "16rem",
    zIndex: 3,
  },
  booklogo: {
    filter: "opacity(40%)",
    height: "13rem",
    width: "auto",
    marginTop: "-12rem",
    marginLeft: "18rem",
    marginBottom: "0.5rem",
    zIndex: 3,
  },
  rnblogo: {
    filter: "opacity(40%)",
    height: "16rem",
    width: "auto",
    marginTop: "-14rem",
    marginBottom: "-0.8rem",
    marginLeft: "16rem",

    zIndex: 1,
    zIndex: 3,
  },
  bgimg: {
    zIndex: 1,
    marginTop: "-32rem",
    width: "45rem",
    height: "auto",
  },
  note: {
    marginTop: "-9.5rem",
    fontWeight: 700,
    fontSize: "1.1rem",
    textDecoration: "none",
    color: "gray",
    marginLeft: "18rem",
  },
};
export default function Projects() {
  return (
    <section id="projects" className="p-2 mx-5">
      {" "}
      <div className="d-flex flex-row-reverse">
        {" "}
        <h1 style={styles.pgTitle}>previous stuff.</h1>
      </div>
      <div
        className="d-flex flex-column p-3 justify-content-between "
        id="container"
      >
        <div
          className="row p-5 mb-5 align-items-center"
          id="container-row"
          style={{ marginLeft: "3rem" }}
        >
          {/* ----------------------------------------------- */}
          {/* ----------------------mlma----------------------*/}
          {/* ----------------------------------------------- */}
          <div className="col p-2" style={{ zIndex: 2 }}>
            <div className="card-title mx-2">
              <a href="https://github.com/addiguskey/mlma" target="_blank">
                <h2 className="proj-title" style={styles.title}>
                  mlma{" "}
                </h2>
              </a>
            </div>

            <div className="card bg-transparent border-0 p-2">
              <div className="container">
                <img
                  className="mcPreview"
                  src={mlmapreview}
                  style={styles.mcpreview}
                />
                <div className="overlay">
                  <div className="text mx-3" style={styles.cardContent}>
                    <p style={styles.content}>
                      <em>freelance front end developer (solo project)</em>
                    </p>
                    <div>
                      <em style={styles.projoverview}>
                        martial arts website - built with React.js, Bootstrap,
                        and Email.js
                      </em>

                      <ul style={styles.projdesc}>
                        {" "}
                        <br></br>
                        <li>
                          Designed and re-built a customized product, improving
                          the existing design to streamline user experience
                        </li>
                        <li>
                          Carried out the SDLC cycle in a timely manner while
                          leading effective communication with the client
                        </li>
                        <li>
                          Identified and executed optimization opportunities
                          that will increase customer acquisition and user
                          engagement
                        </li>
                      </ul>
                    </div>{" "}
                    <a
                      href="https://github.com/addiguskey/mlma"
                      target="_blank"
                    >
                      <img
                        className="ghlogo"
                        src={githubImg}
                        style={styles.ghlogo}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>

              {/*              
                <div className="mx-4">
                  {" "}
                  <img
                    src={mlma}
                    style={styles.mlmalogo}
                    href="https://github.com/addiguskey/mlma"
                    target="_blank"
                  ></img>
                </div> */}
            </div>
          </div>

          {/* ----------------------------------------------- */}
          {/* -----------------melted cone--------------------*/}
          {/* ----------------------------------------------- */}
          <div className="col p-2" style={{ zIndex: 2 }}>
            <div className="card-title mx-2">
              <a href="https://the-melted-cone.herokuapp.com/" target="_blank">
                <h2 className="proj-title" style={styles.mctitle}>
                  the melted cone*
                </h2>
              </a>
            </div>{" "}
            <div className="card bg-transparent border-0 p-2">
              <div className="container">
                <img
                  className="mcPreview"
                  src={mcpreview}
                  style={styles.mcpreview}
                />
                <div className="overlay">
                  <div className="text mx-3" style={styles.cardContent}>
                    {" "}
                    <p style={styles.content}>
                      <em>
                        lead front-end developer, designer, and back-end
                        developer
                      </em>
                    </p>
                    <div style={styles.projoverview}>
                      <em>
                        ice cream e-commerce application- built with React.js,
                        Bootstrap, Node.js, GraphQL, and Strip.js
                      </em>

                      <ul style={styles.projdesc}>
                        {" "}
                        <br></br>
                        <li>
                          Designed the logo utilizing Adobe Illustrator and
                          developed a seamless UI that allows an effortless UX
                          utilizing Figma
                        </li>
                        <li>set up log-in, log-out, user profile system</li>
                        <li>
                          de-bugged back end database that is built with GraphQL
                        </li>
                        <li>
                          Extensively developed and collaborated with back-end
                          developers of the application while maintaining
                          excellent source control
                        </li>
                      </ul>
                    </div>
                    {/* <div className="mx-2">
                      <img src={mc} style={styles.mclogo}></img>
                    </div> */}
                    <a
                      href="https://github.com/addiguskey/theMeltedCone"
                      target="_blank"
                    >
                      <img
                        className="ghlogo"
                        src={githubImg}
                        style={styles.ghlogo}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          {/* ----------------------------------------------- */}
          {/* ---------------------bookify--------------------*/}
          {/* ----------------------------------------------- */}
          <div className="col p-2" style={{ zIndex: 2 }}>
            <div className="card-title mx-2">
              <a
                href="https://bookify-project-du.herokuapp.com/"
                target="_blank"
              >
                <h2 className="proj-title" style={styles.mctitle}>
                  bookify*
                </h2>
              </a>
            </div>

            <div className="card bg-transparent border-0 p-2">
              <div className="container">
                <img
                  className="mcPreview"
                  src={bookpreview}
                  style={styles.mcpreview}
                />
                <div className="overlay">
                  <div className="text mx-3" style={styles.cardContent}>
                    <p style={styles.content}>
                      <em>
                        lead front-end developer, designer, and back-end
                        developer
                      </em>
                    </p>
                    <div style={styles.projoverview}>
                      <em>
                        find your next book with a quiz (or per genre)- built
                        with Handlebars, Express.js, MySQL, Node.js and Axios
                      </em>

                      <ul style={styles.projdesc}>
                        {" "}
                        <br></br>
                        <li>Designed the logo utilizing Adobe Illustrator</li>
                        <li>
                          Delegated responsibilities amongst teammates and used
                          Figma to map-out the UI and the development phase of
                          the product life cycle
                        </li>
                        <li>
                          Constructed external API calls with Axios for a robust
                          array of book recommendations per genre{" "}
                        </li>
                        <li>
                          {" "}
                          Utilized MySQL/Sequelize to build a database where
                          users’ previous books and respective reviews can be
                          stored and edited
                        </li>
                      </ul>
                    </div>
                    <a
                      href="https://github.com/addiguskey/bookify"
                      target="_blank"
                    >
                      <img
                        className="ghlogo"
                        src={githubImg}
                        style={styles.ghlogo}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="mx-4" style={{ zIndex: 2 }}>
                  {" "}
                  <img src={bookify} style={styles.booklogo}></img>
                </div> */}
            </div>
          </div>

          {/* ----------------------------------------------- */}
          {/* -----------------------r&b----------------------*/}
          {/* ----------------------------------------------- */}
          <div className="col p-2" style={{ zIndex: 2 }}>
            <div className="card-title mx-2">
              <a
                href="https://addiguskey.github.io/Rhythm-and-Booze/"
                target="_blank"
              >
                <h2 className="proj-title" style={styles.mctitle}>
                  rhythm &booze*
                </h2>
              </a>
            </div>

            <div className="card bg-transparent border-0 p-2">
              <div className="container">
                <img
                  className="mcPreview"
                  src={rnbpreview}
                  style={styles.mcpreview}
                />
                <div className="overlay">
                  <div className="text mx-3" style={styles.cardContent}>
                    <p style={styles.content}>
                      <em>front end developer</em>
                    </p>
                    <div style={styles.projoverview}>
                      <em>
                        Discover new music and coctail recipes- built with
                        HTML5, CSS3, JavaScript (jQuery)
                      </em>

                      <ul style={styles.projdesc}>
                        {" "}
                        <br></br>
                        <li>
                          Executed an aesthetically pleasing and accessible
                          design to offer an entertaining experience for all
                          users
                        </li>
                        <li>
                          Aided fellow developers to increase efficiency and
                          quality of the production while minimizing merge
                          conflicts
                        </li>
                        <li>
                          Implemented multiple third-party API calls using
                          advanced array methods to query cocktail recipes,
                          ingredients, measurements and music recommendations
                        </li>
                      </ul>
                    </div>
                    {/*                 
                <div className="mx-4">
                  {" "}
                  <img src={rnb} style={styles.rnblogo}></img>
                </div> */}
                    <a
                      href="https://github.com/addiguskey/Rhythm-and-Booze"
                      target="_blank"
                    >
                      <img
                        className="ghlogo"
                        src={githubImg}
                        style={styles.ghlogo}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="d-flex flex-row-reverse">
        <img src={projbg} style={styles.bgimg}></img>
      </div> */}
      <div className="d-flex flex-column" style={styles.note}>
        <p style={{ zIndex: 3 }}>*these are university projects</p>
      </div>
    </section>
  );
}
