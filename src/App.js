import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  backgroundSvg(svg) {
    const bgStyle = {
      backgroundImage: "url(" + svg + ")"
    };

    return bgStyle;
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact
          path="/"
          render={props => <Home {...props} bgSvg={this.backgroundSvg} />}
        />
        <Route
          path="/about"
          render={props => <About {...props} bgSvg={this.backgroundSvg} />}
        />
        <Route
          path="/portfolio"
          render={props => <Portfolio {...props} bgSvg={this.backgroundSvg} />}
        />
      </div>
    );
  }
}
