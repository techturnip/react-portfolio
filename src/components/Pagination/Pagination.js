import React, { Component } from 'react'

export default class Pagination extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: Number(this.props.pagination.page),
      totalPages: Number(this.props.pagination.totalPages)
    }
  }

  clickHandler = e => {
    let targetText = e.target.innerHTML
    const { page, totalPages } = this.state
    let pageNum = Number(page)

    if (targetText === 'Next') {
      if (pageNum + 1 <= totalPages) {
        pageNum++
        this.setState({ page: pageNum })
        return this.props.getNewPage(pageNum)
      }
    } else if (targetText === 'Prev') {
      if (pageNum - 1 > 0) {
        pageNum--
        this.setState({ page: pageNum })
        return this.props.getNewPage(pageNum)
      }
    } else {
      this.setState({ page: Number(targetText) })
      this.props.getNewPage(targetText)
    }
  }

  render() {
    const { page, totalPages } = this.state
    const elements = []

    for (let i = 1; i <= totalPages; i++) {
      elements.push(
        <li
          onClick={this.clickHandler}
          className={`pagination-item${page === i ? ' disabled' : ''}`}
          key={i}
        >
          {i}
        </li>
      )
    }

    return (
      <div className="pagination">
        <ul className="pagination-list">
          <li
            onClick={this.clickHandler}
            className={`pagination-item${page === 1 ? ' disabled' : ''}`}
          >
            Prev
          </li>
          {elements}
          <li
            onClick={this.clickHandler}
            className={`pagination-item${
              page === totalPages ? ' disabled' : ''
            }`}
          >
            Next
          </li>
        </ul>
      </div>
    )
  }
}
