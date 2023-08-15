import React from "react";

import Container from "react-bootstrap/Container";

import MediaQuery from "react-responsive";
import Col from "react-bootstrap/Col"

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
export default function Projects() {
  return (
    <>
      <MediaQuery query="(min-width: 769px)">
        <Container  fluid className="headline-faster" style={containerStyle}>
          <Col>
            <h1 style={h1Style}>Mission Statement</h1>
            <br></br>

            
              <p style={fontStyle}>
                Our goal at braven capital is to provide wealth management and
                Retirement planning that provides a clear vision of the future
                and peace of mind. Unlike banks and broker dealers, we don’t
                have any hidden fees, and we don’t even have Any products to
                sell you on. We operate as fiduciaries (fancy word for having
                your best Interests) with a simple transparent fee structure. At
                braven, we don’t have to meet sales metrics or answer to a board
                or shareholders. In Fact that is part of why our founder cam
                left the banking world; he was tired of all the Conflicts of
                interest. At braven, the only things we have to meet is the
                needs of our clients, and the only People we have to answer to
                is our clients themselves. The financial well being of our
                Clients is our number one priority.
              </p>
            
              </Col>
        </Container>
      </MediaQuery>

      <MediaQuery query="(max-width: 1224px)">

      <Container  fluid className="headline-faster" style={mContainerStyle}>
          <Col>
            <h1 style={mH1Style}>Mission Statement</h1>
            <br></br>

            
              <p style={mFontStyle}>
                Our goal at braven capital is to provide wealth management and
                Retirement planning that provides a clear vision of the future
                and peace of mind. Unlike banks and broker dealers, we don’t
                have any hidden fees, and we don’t even have Any products to
                sell you on. We operate as fiduciaries (fancy word for having
                your best Interests) with a simple transparent fee structure. At
                braven, we don’t have to meet sales metrics or answer to a board
                or shareholders. In Fact that is part of why our founder cam
                left the banking world; he was tired of all the Conflicts of
                interest. At braven, the only things we have to meet is the
                needs of our clients, and the only People we have to answer to
                is our clients themselves. The financial well being of our
                Clients is our number one priority.
              </p>
            
              </Col>
        </Container>
      </MediaQuery>
    </>
  );
}
