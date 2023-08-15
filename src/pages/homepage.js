

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


import MediaQuery from "react-responsive";


import "../index.css";

const myImage = require("../assets/images/transparent2.png");

const homePage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100vw",
};

const mHomePage = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "column",
  width: "100vw",
};

const fontStyle = {
  fontSize: "2.38rem",
  color: "black",
  width: "48vw",
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
};

const mFontStyle = {
  fontSize: "1.5rem",
  color: "black",
  width: "48vw",
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
};



export default function Homepage() {
 

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    width: "90vw",
    height: "35vh",
    padding: "1rem",
    
    paddingBottom: "5rem",
    marginTop: "1rem",
    lineHeight: "3rem",
    borderRadius: "10px",
  };

  const mContainerStyle = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    textAlign: "left",
    paddingTop: "2rem",
    paddingBottom: "5rem",
    paddingLeft: "1rem",
    marginTop: "1rem",
    lineHeight: "3rem",
    
  };

  const buttonStyle = {
    margin: "5rem",
    boxShadow:
          "inset 0 -3em 3em rgba(0, 0, 0, 0.1),0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",

    
   
  };


  const mButtonStyle = {
    
    boxShadow:
          "inset 0 -3em 3em rgba(0, 0, 0, 0.1),0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",

    
   
  };
  const imgStyle = {
    marginTop: "12rem",
  };

  const mImgStyle = {
    marginTop: "4rem",
  };

  const headline1Style = {
    borderRadius: "10px",
    backgroundColor: "white",
    width: "fit-content",
    marginLeft: "-6px",
    boxShadow:
          "inset 0 -3em 3em rgba(0, 0, 0, 0.1),0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",

  }



  return (
    <>
      <MediaQuery query="(min-width: 769px)">
        <Container fluid className="container" style={homePage}>
          <Row>
            <img src={myImage} style={imgStyle} alt="braven capital" />
          </Row>
          <Container
            fluid
            className="container"
            style={containerStyle}
            
          >
            
             
                <p style={fontStyle}>Capital Management Redefined</p>
             
              
                <p style={fontStyle}>
                  Personalized Approach for Lasting Wealth
                </p>
                
            
              <Button
                href="#/about"
                variant="light"
                size="lg"
                className="button"
                style={buttonStyle}
              >
                Explore Further
              </Button>
           
           
          </Container>
        </Container>
      </MediaQuery>

      <MediaQuery query="(max-width: 1224px)">
        <Container fluid className="container" style={mHomePage}>
          <Row>
            <img src={myImage} style={mImgStyle} alt="braven Capital" />
          </Row>
          <Container
            fluid
            className="container"
            style={mContainerStyle}
            
          >
          
             
                <Col className="headline-faster">
                  <Container style={headline1Style}>
                    <p style={mFontStyle}>Capital Management Redefined</p>
                  </Container>
                    <Container style={headline1Style}>
                    <p style={mFontStyle}>
                      Personalized Approach for Lasting Wealth
                    </p>
                    </Container>
                   
              
             
          
            <Button href="#/about" variant="light" className="button" style={mButtonStyle}>
              Explore Further
            </Button>

            </Col>
          </Container>
        </Container>
      </MediaQuery>
    </>
  );
}
