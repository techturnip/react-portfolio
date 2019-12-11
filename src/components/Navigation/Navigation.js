import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Navigation extends Component {
  getNavLinkClass = path => {
    return this.props.location.pathname === path ? 'active' : ''
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div class="nav-wrapper">
            <Link to="/" className="brand-logo">
              techTurnip
            </Link>
            <button type="button" href="#!" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </button>
            <ul className="right hide-on-med-and-down">
              <li className={this.getNavLinkClass('/')}>
                <Link to="/">Home</Link>
              </li>
              <li className={this.getNavLinkClass('/about')}>
                <Link to="/about">About</Link>
              </li>
              <li className={this.getNavLinkClass('/portfolio')}>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className={this.getNavLinkClass('/blog')}>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="mobile-nav" className="sidenav sidenav-close right">
          <li className={this.getNavLinkClass('/')}>
            <Link to="/">Home</Link>
          </li>
          <li className={this.getNavLinkClass('/about')}>
            <Link to="/about">About</Link>
          </li>
          <li className={this.getNavLinkClass('/portfolio')}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={this.getNavLinkClass('/blog')}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </>
    )
  }
}

export default withRouter(Navigation)
