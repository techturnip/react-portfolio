import React from "react";
import { Container, Row } from "reactstrap";
import PortfolioItem from "./PortfolioItem.js";
import portfolioSvg from "./portfolio.svg";

const portfolioItems = [
  {
    id: 0,
    name: "Tipsease",
    url: "https://tipsease.io/",
    repo: "https://github.com/tipsease-webpt6/marketing_tipsease",
    desc:
      "Marketing website built in collaboration with a fellow cohort student at Lambda School for a fictitious SaaS application that allows you to tip service workers directly."
  },
  {
    id: 1,
    name: "Contact Manager",
    url: "https://techturnip.github.io/contactmanager/",
    repo: "https://github.com/techturnip/contactmanager",
    desc:
      "Contact Manager project is a CRUD app from the Modern React course by Brad Traversy featuring the Materialize CSS framework with initial data automatically populated via the JSONPlaceholder api."
  },
  {
    id: 2,
    name: "Resume Portfolio Design",
    url: "https://techturnip.github.io/Resume-Portfolio/",
    repo: "https://github.com/techturnip/Resume-Portfolio",
    desc:
      "A Resume & Portfolio website of my own design. Built using Bootstrap, Font Awesome, and Sass with gulp task automation for development ans Sass compiling."
  }
];

export default function Portfolio(props) {
  return (
    <div style={props.bgSvg(portfolioSvg)} className="portfolio">
      <Container>
        <Row className="portfolio-items">
          {portfolioItems.map(item => (
            <PortfolioItem itemDetails={item} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
