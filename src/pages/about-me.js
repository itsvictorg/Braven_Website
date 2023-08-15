import React from "react";

// import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

import Col from "react-bootstrap/Col";
import MediaQuery from "react-responsive";
// import { Card } from "react-bootstrap";

import "../index.css";

const containerStyle = {
  display: "flex",
  justifyContent: "start",
  marginLeft: "10rem",
  marginRight: "70rem",
  paddingTop: "10rem",
  paddingBottom: "3rem",
  width: "fit-content",
  lineHeight: "3.5rem",
  backgroundColor: "white",
  boxShadow:
    "inset 0 -3em 3em rgba(0, 0, 0, 0.1),0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
};

const mContainerStyle = {
  display: "flex",
  justifyContent: "start",
  marginLeft: "1rem",
  marginRight: "2rem",
  paddingTop: "5rem",
  paddingBottom: "3rem",
  width: "fit-content",
  height: "fit-content",
  lineHeight: "1.3rem",
  backgroundColor: "white",
  boxShadow:
    "inset 0 -3em 3em rgba(0, 0, 0, 0.1),0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
};

const fontStyle = {
  fontSize: "1.5rem",
  color: "black",
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
};

const mFontStyle = {
  fontSize: "15px",
  color: "black",
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
};

const h1Style = {
  fontSize: "4rem",
};


const mH1Style = {
  fontSize: "2rem",
};

export default function AboutMe() {


  return (
    <>
      <MediaQuery query="(min-width: 769px)">
        <Container fluid className="headline-faster" style={containerStyle}>
          <Col>
            <h1 style={h1Style}>About</h1>
            <br></br>
            <p style={fontStyle}>
              I founded braven capital because I wanted the ability to place my
              client’s Interests before anything else. Before founding my own
              firm, I worked in wealth management at some of the largest Banks
              in the industry doing investment management, retirement planning,
              private Equity, and trading complex derivative instruments like
              swaps and customized Structured notes. I value those experiences
              and all the knowledge I gained from them, however, my goal Was
              always to one day become an independent advisor where I could
              cater to the Exclusive needs of my clients. Outside of work, I
              love spending time with my wife and three kids, sharing
              experiences With close friends, reading financial history and
              philosophy books, playing tennis, and Watching baseball.
            </p>

            <p style={fontStyle}>
              
            </p>
          </Col>
        </Container>
      </MediaQuery>

      <MediaQuery query="(max-width: 1224px)">
      <Container fluid className="headline-faster" style={mContainerStyle}>
          <Col>
            <h1 style={mH1Style}>About</h1>
            <br></br>
            <p style={mFontStyle}>
              I founded braven capital because I wanted the ability to place my
              client’s Interests before anything else. Before founding my own
              firm, I worked in wealth management at some of the largest Banks
              in the industry doing investment management, retirement planning,
              private Equity, and trading complex derivative instruments like
              swaps and customized Structured notes. I value those experiences
              and all the knowledge I gained from them, however, my goal Was
              always to one day become an independent advisor where I could
              cater to the Exclusive needs of my clients. Outside of work, I
              love spending time with my wife and three kids, sharing
              experiences With close friends, reading financial history and
              philosophy books, playing tennis, and Watching baseball.
            </p>
          </Col>
        </Container>
      </MediaQuery>
    </>
  );
}
