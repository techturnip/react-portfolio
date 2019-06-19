import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
      </div>
    );
  }
}
