import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import MediaQuery from "react-responsive";

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
export default function Services() {
  return (
    <>
      <MediaQuery query="(min-width: 769px)">
        <Container className="headline-faster" fluid style={containerStyle}>
          <Col>
            <h1 style={h1Style}>Services</h1>
            <br></br>

            <p style={fontStyle}>
              I offer only one service, but one that encompasses many different
              Things. Entering into an advisory agreement with braven means that
              I’ll be managing Your investments for you, but it includes a full
              suite of retirement planning, estate Planning, mutli-generational
              strategy, and anything else related to your personal Finances. We
              can talk about the markets or have comprehensive reviews once a
              week or once Every six months depending on how you feel. The whole
              point is having a close Professional relationship that is
              customized to you and caters to the needs of you and Your family.
              The fee is set in tiers based on the amout of assets in each
              household and is a flat Percentage fee that is fully transparent
              and appears on your statement every quarter. No hidden fees, no
              extra costs, no suprises.
            </p>
          </Col>
        </Container>
      </MediaQuery>

      <MediaQuery query="(max-width: 1224px)">
        <Container className="headline-faster" fluid style={mContainerStyle}>
          <Col>
            <h1 style={mH1Style}>Services</h1>
            <br></br>

            <p style={mFontStyle}>
              I offer only one service, but one that encompasses many different
              Things. Entering into an advisory agreement with braven means that
              I’ll be managing Your investments for you, but it includes a full
              suite of retirement planning, estate Planning, mutli-generational
              strategy, and anything else related to your personal Finances. We
              can talk about the markets or have comprehensive reviews once a
              week or once Every six months depending on how you feel. The whole
              point is having a close Professional relationship that is
              customized to you and caters to the needs of you and Your family.
              The fee is set in tiers based on the amout of assets in each
              household and is a flat Percentage fee that is fully transparent
              and appears on your statement every quarter. No hidden fees, no
              extra costs, no suprises.
            </p>
          </Col>
        </Container>
      </MediaQuery>
    </>
  );
}
