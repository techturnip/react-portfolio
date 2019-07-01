import React, { Component } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import { Row, Button } from "reactstrap";
import portfolioSvg from "./portfolio.svg";

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
      .get("http://127.0.0.1/wp/wp-json/wp/v2/portfolio")
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  clickHandler = (e, id) => {
    let ele = e.target;
    if (!ele.classList.contains("btn")) {
      this.props.history.push(`/portfolio/${id}`);
    }
  };

  render() {
    const { createMarkup } = this.props;
    console.log(this.state);
    return (
      <div style={this.props.bgSvg(portfolioSvg)} className="portfolio">
        <div className="page-wrapper">
          <Row>
            <h2 className="portfolio-title">
              <strong>Check out my Portfolio!</strong>
            </h2>
          </Row>
          <Row className="portfolio-list">
            {this.state.data.map(item => (
              <div
                id={item.id}
                onClick={e => this.clickHandler(e, item.id)}
                key={item.id}
                className="portfolio-list-item"
              >
                <div className="portfolio-list-card hoverable white-trans-box">
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">{item.title.rendered}</h3>
                      <p
                        className="item-desc"
                        dangerouslySetInnerHTML={createMarkup(
                          item.excerpt.rendered
                        )}
                      />
                    </div>
                    <div className="card-btns">
                      <a
                        className="mr-2"
                        target="_blank"
                        href={item.acf.github_url}
                      >
                        <i className="fa fa-4x fa-github-square" />
                      </a>
                      <a target="_blank" href={item.acf.demo_url}>
                        <i className="fa fa-4x fa-external-link-square" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Row>
          <Row>
            <Pagination
              items={this.state.data}
              onChangePage={this.onChangePage}
            />
          </Row>
        </div>
      </div>
    );
  }
}
