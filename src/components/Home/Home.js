import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import homeSvg from "./home-bg.svg";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="home text-dark">
        <Container className="wrapper" fluid="true">
          <div className="title-wrapper">
            <h1 className="title">Tyler Turnipseed</h1>
            <p className="subtitle">Web Developer</p>
          </div>
        </Container>
        <div className="background">
          <img src={homeSvg} />
        </div>
      </header>
    );
  }
}
