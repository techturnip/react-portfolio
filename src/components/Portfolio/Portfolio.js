import React, { Component } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import { Container, Row } from "reactstrap";
import PortfolioItem from "./PortfolioItem.js";
import portfolioSvg from "./portfolio.svg";
import portfolioData from "./portfolioData";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:1337/portfolios")
      .then(response => {
        this.setState(() => ({ data: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div style={this.props.bgSvg(portfolioSvg)} className="portfolio">
        <Row className="portfolio-items">
          {this.state.pageOfItems.map(item => (
            <PortfolioItem itemDetails={item} />
          ))}
        </Row>
        <Row>
          <Pagination
            items={this.state.data}
            onChangePage={this.onChangePage}
          />
        </Row>
      </div>
    );
  }
}
