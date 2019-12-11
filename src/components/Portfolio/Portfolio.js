import React, { Component } from 'react'
import axios from 'axios'
import portfolioSvg from './portfolio.svg'
import Pagination from '../Pagination/Pagination'
import { Preloader } from 'react-materialize'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      page: '',
      totalPages: '',
      totalItems: '',
      postsPerPage: 4,
      isLoading: true
    }
  }

  componentDidMount() {
    const { postsPerPage } = this.state

    // pull in initial set of posts
    axios
      .get(
        `http://api.techturnip.us/wp-json/wp/v2/portfolio?per_page=${postsPerPage}&page=1`
      )
      .then(res => {
        // set up for paginated data
        const data = res.data
        const totalPages = res.headers['x-wp-totalpages']
        const totalItems = res.headers['x-wp-total']
        this.setState({
          data,
          page: '1',
          totalPages,
          totalItems,
          isLoading: false
        })
      })
      .catch(err => {
        console.error('Server Error', err)
      })
  }

  clickHandler = (e, id) => {
    let ele = e.target

    // make sure that the item was clicked but NOT the icons which
    // link to external sites
    if (!ele.classList.contains('fa')) {
      this.props.history.push(`/portfolio/${id}`)
    }
  }

  getNewPage = page => {
    const { postsPerPage } = this.state

    // axios call to get the next page of posts
    axios
      .get(
        `https://api.techturnip.us/wp-json/wp/v2/portfolio?per_page=${postsPerPage}&page=${page}&_embed`
      )
      .then(res => {
        // handle paginated response data
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
    // Destructure
    const { createMarkup } = this.props
    const { page, totalPages, totalItems, isLoading } = this.state

    // Pass a pagination object to the pagination component
    const paginationProps = {
      page,
      totalPages,
      totalItems
    }

    return (
      <div style={this.props.bgSvg(portfolioSvg)} className="portfolio">
        <div className="portfolio-wrapper">
          <h2 className="portfolio-title">
            Check out my Portfolio!
          </h2>
          <div className="portfolio-list">
            {!isLoading ? this.state.data.map(item => (
              <div
                id={item.id}
                onClick={e => this.clickHandler(e, item.id)}
                key={item.id}
                className="portfolio-list-item"
              >
                <div className={`portfolio-list-card hoverable white-box ${!isLoading ? 'fade-in' : null}`}>
                  <div className="card-content">
                    <h3 className="card-title">{item.title.rendered}</h3>
                    <div
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
            )) : ( 
              <div className="white-box">
                <div className="loading">
                  <Preloader active color="red" size="big" />
                </div>
              </div>
            )}
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
