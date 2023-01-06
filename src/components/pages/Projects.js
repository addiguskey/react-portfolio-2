import React from "react";

import mc from "../../assets/images/melted-cone.png";
import bookify from "../../assets/images/bookify.png";
import rnb from "../../assets/images/rhythm.png";
import githubImg from "../../assets/images/github-logo.png";
import "../style.scss";
import linkImg from "../../assets/images/link copy.png";
import stripe from "../../assets/images/stripe.png";
import react from "../../assets/images/reactjs.png";
import node from "../../assets/images/nodejs.png";
import bs from "../../assets/images/bootstrap.png";
import gql from "../../assets/images/gql.png";
import mdb from "../../assets/images/mdb.png";
import sql from "../../assets/images/sql.png";
import handlebars from "../../assets/images/handlebars.png";
import express from "../../assets/images/expressjs.png";
import axios from "../../assets/images/axios-.png";
import mysql from "../../assets/images/mysql.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";

// const styles = {
//   mcText: {
//     position: "fixed",
//     zIndex: 2,
//   },
//   mcImg: {
//     // position: "relative",
//     filter: "grayscale(100)",
//     // zIndex: 1,
//   },
//   gh: {
//     maxWidth: "3rem",
//     maxheight: "3rem",
//     // filter: "invert(1)",
//     filter: "invert(0.4)",
//   },
//   logos: {
//     filter: "invert(1)",
//     maxWidth: 80,
//     maxheight: "0.3rem",
//   },
//   logo1: {
//     width: "auto",
//     height: "2rem",
//   },
//   logo2: {
//     maxWidth: "2rem",
//     maxheight: "2rem",
//   },
//   cards: {
//     marginTop: "5rem",
//   },
// };
// export default function Projects() {
//   return (
//     <div className="p-3 mx-5">
//       <div>
//         <h1
//           style={{
//             fontWeight: "bold",
//             fontSize: "3rem",
//           }}
//         >
//           projects.
//         </h1>
//       </div>

//       <div className="container d-flex flex-column my-5 p-2 justify-content-between">
//         <div className="row mt-5 my-5" style={styles.cards}>
//           {/* //////////////////////////////////////////////////////// */}
//           {/* //////////////////////////////////////////////////////// */}
//           {/* MC CARD */}
//           <div className="preview-card">
//             <div className="preview-card__wrp">
//               <div className="preview-card__item">
//                 <div className="preview-card__img">
//                   <a
//                     href="https://the-melted-cone.herokuapp.com/"
//                     target="_blank"
//                     className=" btn"
//                   >
//                     <img src={mc} style={styles.mcImg} alt="" id="mcImg" />
//                   </a>
//                 </div>
//                 {/* MC CONTENT */}

//                 <div className="preview-card__content">
//                   <span className="preview-card__code">July 2022</span>
//                   <div className="preview-card__title">the Melted Cone</div>
//                   <div className="preview-card__text">
//                     Ice cream e-commerce app that delivers straight to your
//                     door. <br></br>Subscribe and never worry about running out
//                     of ice cream!<br></br>
//                     <br></br>
//                     <span>
//                       <img src={stripe} style={styles.logos} id="stripe-logo" />
//                     </span>{" "}
//                     <span>
//                       <img src={react} style={styles.logo1} />
//                     </span>{" "}
//                     <span>
//                       <img src={node} style={styles.logo2} />
//                     </span>{" "}
//                     <span>
//                       <img src={bs} style={styles.logo2} />
//                     </span>{" "}
//                     <span>
//                       <img src={gql} style={styles.logo2} />
//                     </span>{" "}
//                     <span>
//                       <img src={mdb} style={styles.logo2} />
//                     </span>{" "}
//                   </div>
//                   <br></br>
//                   {/* MC LINK */}
//                   <a
//                     href="https://github.com/addiguskey/theMeltedCone"
//                     target="_blank"
//                   >
//                     {" "}
//                     <img
//                       src={githubImg}
//                       style={styles.gh}
//                       className="btn-transparent repo bg-transparent"
//                       id="gh-mc"
//                     />
//                   </a>
//                   <span>
//                     <a
//                       href="https://the-melted-cone.herokuapp.com/"
//                       target="_blank"
//                       className="btn btn-outline-dark mx-3"
//                     >
//                       get the scoop{" "}
//                       {/* <img
//                       src={linkImg}
//                       style={styles.gh}
//                       className="btn btn-transparent bg-transparent"
//                     ></img> */}
//                     </a>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* //////////////////////////////////////////////////////// */}
//           {/* //////////////////////////////////////////////////////// */}
//           {/* BOOKIFY CARD */}
//           <div className="preview-card">
//             <div className="preview-card__wrp">
//               <div className="preview-card__item">
//                 <div className="preview-card__img">
//                   <a
//                     href="https://bookify-project-du.herokuapp.com/"
//                     target="_blank"
//                     className="btn"
//                   >
//                     <img src={bookify} alt="" id="mcImg" />
//                   </a>
//                 </div>
//                 {/* BOKIFY CONTENT */}
//                 <div className="preview-card__content">
//                   <span className="preview-card__code">June 2022</span>
//                   <div className="preview-card__title">BOOKIFY</div>
//                   <div className="preview-card__text">
//                     Not your average book search engine. <br></br> Log all of
//                     your past books and get recommended on your next book by
//                     genre. <br></br>Still can't decide on a book? Take a quiz
//                     and find out ! <br></br>
//                     <br></br>
//                     <span>
//                       <img src={sql} style={styles.logo2} />
//                     </span>{" "}
//                     <span>
//                       <img src={mysql} style={styles.logo2} />
//                     </span>{" "}
//                     <span>
//                       <img src={handlebars} style={styles.logo1} />
//                     </span>{" "}
//                     <span>
//                       <img src={axios} style={styles.logo1} />
//                     </span>{" "}
//                     <span>
//                       <img src={express} style={styles.logo1} />
//                     </span>{" "}
//                   </div>
//                   <br></br>

//                   {/* BOOKIFY LINKS */}
//                   <a
//                     href="https://github.com/addiguskey/bookify"
//                     target="_blank"
//                   >
//                     {" "}
//                     <img
//                       src={githubImg}
//                       style={styles.gh}
//                       className="btn-transparent repo bg-transparent"
//                       id="bookify-mc"
//                     />
//                   </a>
//                   <span>
//                     <a
//                       href="https://bookify-project-du.herokuapp.com/"
//                       target="_blank"
//                       className="btn btn-outline-dark mx-3"
//                     >
//                       bookwarms only!
//                     </a>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* //////////////////////////////////////////////////////// */}
//           {/* //////////////////////////////////////////////////////// */}

//           {/* RNB CARD */}
//           <div className="preview-card">
//             <div className="preview-card__wrp">
//               <div className="preview-card__item">
//                 <div className="preview-card__img">
//                   <a
//                     href="https://addiguskey.github.io/Rhythm-and-Booze/"
//                     target="_blank"
//                     className="btn"
//                   >
//                     <img src={rnb} alt="" id="mcImg" />
//                   </a>
//                 </div>
//                 {/* RNB CONTENT */}
//                 <div className="preview-card__content">
//                   <span className="preview-card__code">May 2022</span>
//                   <div className="preview-card__title">Rhythm & Booze</div>
//                   <div className="preview-card__text">
//                     Your next Friday night plans- but, make it random
//                     <br></br>
//                     <br></br>
//                     <span>
//                       <img src={html} style={styles.logo1} />
//                     </span>{" "}
//                     <span>
//                       <img src={css} style={styles.logo1} />
//                     </span>{" "}
//                     <span>
//                       <img src={js} style={styles.logo1} />
//                     </span>{" "}
//                   </div>
//                   <br></br>

//                   {/* RNB LINKS */}
//                   <a
//                     href="https://github.com/addiguskey/Rhythm-and-Booze"
//                     target="_blank"
//                   >
//                     {" "}
//                     <img
//                       src={githubImg}
//                       style={styles.gh}
//                       className="btn-transparent repo bg-transparent"
//                       id="rnb-mc"
//                     />
//                   </a>
//                   <span>
//                     <a
//                       href="https://addiguskey.github.io/Rhythm-and-Booze/"
//                       target="_blank"
//                       className="btn btn-outline-dark mx-3"
//                     >
//                       {" "}
//                       find your combo
//                     </a>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const styles = {
  card: {
    borderRadius: "5mm",
    backgroundColor: "#C8C8C8",
    height: "25rem",
    width: "23rem",
  },
  ghlogo: {
    maxWidth: "3rem",
    maxheight: "3rem",
    marginLeft: "18.5rem",
    marginTop: "17rem",
  },
  title: {
    fontWeight: "bold",
    textDecoration: "none",
    color: "black",
  },
  content: {
    lineHeight: 0.5,
  },
};
export default function Projects() {
  return (
    <div className="p-2 mx-5">
      <div>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
          }}
        >
          projects.
        </h1>
      </div>
      <div className="d-flex flex-column p-3 justify-content between">
        <div className="row  p-5">
          {/* ----------------------------------------------- */}
          {/* ----------------------mlma----------------------*/}
          {/* ----------------------------------------------- */}
          <div className="col p-2">
            <div className="card border-0 p-2 " style={styles.card}>
              <div className="card-content mx-2">
                <a
                  href="https://addiguskey.github.io/Rhythm-and-Booze/"
                  target="_blank"
                >
                  <h2 className="proj-title" style={styles.title}>
                    mlma
                  </h2>
                </a>
                <p style={styles.content}>
                  <em>martial arts website revamped</em>
                </p>
                <a href="https://github.com/addiguskey/mlma" target="_blank">
                  <img
                    className="ghlogo"
                    src={githubImg}
                    style={styles.ghlogo}
                  ></img>
                </a>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------- */}
          {/* -----------------melted cone--------------------*/}
          {/* ----------------------------------------------- */}
          <div className="col p-2">
            <div className="card border-0 p-2" style={styles.card}>
              <div className="card-content mx-2">
                <a
                  href="https://the-melted-cone.herokuapp.com/"
                  target="_blank"
                >
                  <h2 className="proj-title" style={styles.title}>
                    the melted cone
                  </h2>
                </a>
                <p style={styles.content}>
                  <em>order your favorite scoops online& subscribe</em>
                </p>
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
          {/* ----------------------------------------------- */}
          {/* ---------------------bookify--------------------*/}
          {/* ----------------------------------------------- */}
          <div className="col p-2">
            <div className="card border-0 p-2" style={styles.card}>
              <div className="card-content mx-2">
                <a
                  href="https://bookify-project-du.herokuapp.com/"
                  target="_blank"
                >
                  <h2 className="proj-title" style={styles.title}>
                    bookify
                  </h2>
                </a>
                <p style={styles.content}>
                  <em>find your next book with a quiz</em>
                </p>
                <a href="https://github.com/addiguskey/bookify" target="_blank">
                  <img
                    className="ghlogo"
                    src={githubImg}
                    style={styles.ghlogo}
                  ></img>
                </a>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          {/* -----------------------r&b----------------------*/}
          {/* ----------------------------------------------- */}
          <div className="col p-2">
            <div className="card border-0 p-2" style={styles.card}>
              <div className="card-content mx-2">
                <a
                  href="https://addiguskey.github.io/Rhythm-and-Booze/"
                  target="_blank"
                >
                  <h2 className="proj-title" style={styles.title}>
                    rhythm &booze
                  </h2>
                </a>
                <p style={styles.content}>
                  <em>your friday night plans</em>
                </p>
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
  );
}
