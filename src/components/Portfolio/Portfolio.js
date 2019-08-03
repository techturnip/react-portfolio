import React, { Component } from 'react'
import axios from 'axios'
import portfolioSvg from './portfolio.svg'
import Pagination from '../Pagination/Pagination'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      page: '',
      totalPages: '',
      totalItems: '',
      postsPerPage: 4
    }
  }

  componentDidMount() {
    const { postsPerPage } = this.state

    axios
      .get(
        `http://api.techturnip.us/wp-json/wp/v2/portfolio?per_page=${postsPerPage}&page=1`
      )
      .then(res => {
        // console.log(res)
        const data = res.data
        const totalPages = res.headers['x-wp-totalpages']
        const totalItems = res.headers['x-wp-total']
        this.setState({
          data,
          page: '1',
          totalPages,
          totalItems
        })
      })
      .catch(err => {
        console.error('Server Error', err)
      })
  }

  clickHandler = (e, id) => {
    let ele = e.target
    if (!ele.classList.contains('fa')) {
      this.props.history.push(`/portfolio/${id}`)
    }
  }

  getNewPage = page => {
    const { postsPerPage } = this.state

    axios
      .get(
        `http://api.techturnip.us/wp-json/wp/v2/portfolio?per_page=${postsPerPage}&page=${page}&_embed`
      )
      .then(res => {
        const data = res.data
        const totalPages = res.headers['x-wp-totalpages']
        const totalItems = res.headers['x-wp-total']
        this.setState({
          data,
          pagination: { page, totalPages, totalItems }
        })
      })
      .catch(err => {
        console.error('Server Error', err)
      })
  }

  render() {
    const { createMarkup } = this.props
    const { page, totalPages, totalItems } = this.state

    const paginationProps = {
      page,
      totalPages,
      totalItems
    }
    // console.log(this.state)
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
            {totalPages > 1 && (
              <Pagination
                pagination={paginationProps}
                getNewPage={this.getNewPage}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}
