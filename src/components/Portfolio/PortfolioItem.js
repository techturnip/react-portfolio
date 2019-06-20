import React from "react";
import { Col, Button } from "reactstrap";

export default function PortfolioItem(props) {
  const { name, url, repo, desc } = props.itemDetails;
  return (
    <Col className="portfolio-item">
      <div className="item-wrapper white-trans-box">
        <div className="item-body">
          <div className="item-content">
            <h3 className="item-title">{name}</h3>
            <p className="item-desc">{desc}</p>
          </div>

          <div className="item-btns">
            <Button className="mr-2" target="_blank" href={repo}>
              View Github
            </Button>
            <Button target="_blank" href={url}>
              View Live
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
}
