import React, { Component } from 'react'
import axios from 'axios'
import portfolioSvg from './portfolio.svg'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1/wp/wp-json/wp/v2/portfolio')
      .then(response => {
        console.log(response)
        this.setState({ data: response.data })
      })
      .catch(error => {
        console.error('Server Error', error)
      })
  }

  clickHandler = (e, id) => {
    let ele = e.target
    if (!ele.classList.contains('fa')) {
      this.props.history.push(`/portfolio/${id}`)
    }
  }

  render() {
    const { createMarkup } = this.props
    console.log(this.state)
    return (
      <div style={this.props.bgSvg(portfolioSvg)} className="portfolio">
        <div className="portfolio-wrapper">
          <h2 className="portfolio-title">
            <strong>Check out my Portfolio!</strong>
          </h2>
          <div className="portfolio-list">
            {this.state.data.map(item => (
              <div
                id={item.id}
                onClick={e => this.clickHandler(e, item.id)}
                key={item.id}
                className="portfolio-list-item"
              >
                <div className="portfolio-list-card hoverable white-trans-box">
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
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.acf.github_url}
                    >
                      <i className="fa fa-3x fa-github" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.acf.demo_url}
                    >
                      <i className="fa fa-3x fa-external-link" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
