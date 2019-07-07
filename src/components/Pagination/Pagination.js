import React, { Component } from 'react'

export default class Pagination extends Component {
  clickHandler = e => {
    const page = e.target.innerHTML

    console.log('page ', e.target.innerHTML)

    this.props.getNewPage(page)
  }

  render() {
    const { totalPages } = this.props.pagination
    const elements = []

    for (let i = 1; i <= totalPages; i++) {
      console.log(i)
      elements.push(
        <li onClick={this.clickHandler} className="pagination-item" key={i}>
          {i}
        </li>
      )
    }

    console.log(this.props)

    return (
      <div className="pagination">
        <ul className="pagination-list">
          <li className="pagination-item">Prev</li>
          {elements}
          <li className="pagination-item">Next</li>
        </ul>
      </div>
    )
  }
}
