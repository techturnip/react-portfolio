import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import homeSvg from "./home-bg.svg";

const bgStyle = {
  backgroundImage: "url(" + homeSvg + ")"
};

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header style={bgStyle} className="home text-dark">
        <Container className="wrapper" fluid="true">
          <div className="title-wrapper white-trans-box">
            <h1 className="title">Tyler Turnipseed</h1>
            <p className="subtitle">Web Developer</p>
          </div>
        </Container>
      </header>
    );
  }
}
