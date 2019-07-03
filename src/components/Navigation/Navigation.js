import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <Link className="navbar-brand" href="/">
            techTurnip
          </Link>
          <ul className="nav-list">
            <li>
              <NavLink
                className="nav-item"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                activeClassName="active"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" activeClassName="active" to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
