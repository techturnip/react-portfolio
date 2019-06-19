import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import aboutSvg from "./about.svg";
import me from "./me.jpg";

const bgStyle = {
  backgroundImage: "url(" + aboutSvg + ")"
};

export default class About extends Component {
  render() {
    return (
      <section style={bgStyle} className="about">
        <Container>
          <Row>
            <Col />
          </Row>
          <Row>
            <Col className="about-content-wrapper white-trans-box">
              <Row>
                <Col>
                  <h2 className="about-title">About Me</h2>
                  <p>
                    I've been working with HTML/CSS for over a decade. I have
                    experience working with HTML &amp; CSS frameworks such as
                    Bootstrap and Materialize CSS, content management systems
                    such as WordPress, and JavaScript libraries/frameworks like
                    React and Angular 2+.
                  </p>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <img className="about-img img-fluid img-circle" src={me} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
