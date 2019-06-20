import React from "react";
import homeSvg from "./home-bg.svg";

export default function Header(props) {
  return (
    <header style={props.bgSvg(homeSvg)} className="home text-dark">
      <div className="wrapper">
        <div className="title-wrapper white-trans-box">
          <h1 className="title">Tyler Turnipseed</h1>
          <p className="subtitle">Web Developer</p>
        </div>
      </div>
    </header>
  );
}
