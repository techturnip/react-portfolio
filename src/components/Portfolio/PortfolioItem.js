import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import portfolioSvg from "./portfolio.svg";
import axios from "axios";

export default class PortfolioItem extends Component {
  state = {
    title: "",
    content: "",
    github: "",
    demo: "",
    img: ""
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`http://127.0.0.1/wp/wp-json/wp/v2/portfolio/${id}`)
      .then(res => {
        const { acf, content, title } = res.data;
        console.log(res);
        this.setState({
          title: title.rendered,
          content: content.rendered,
          github: acf.github_url,
          demo: acf.demo_url,
          img: acf.screenshot
        });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    const { title, content, github, demo, img } = this.state;
    const { createMarkup } = this.props;
    return (
      <div style={this.props.bgSvg(portfolioSvg)} className="portfolio">
        <div className="page-wrapper">
          <div className="portfolio-item white-trans-box">
            <div className="item-body">
              <div class="content-column">
                <div className="item-content">
                  <Link className="back-link" to="/portfolio">
                    <i className="fa fa-long-arrow-left" /> Back to Portfolio
                  </Link>
                  <h2 className="item-title">{title}</h2>
                  <p
                    className="item-desc"
                    dangerouslySetInnerHTML={createMarkup(content)}
                  />
                </div>

                <div className="card-btns">
                  <a className="mr-2" target="_blank" href={github}>
                    <i className="fa fa-4x fa-github-square" />
                  </a>
                  <a target="_blank" href={demo}>
                    <i className="fa fa-4x fa-external-link-square" />
                  </a>
                </div>
              </div>
              <div className="img-column">
                <img className="img-fluid" src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
