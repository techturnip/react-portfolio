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
            <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
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
        <ul id="mobile-nav" className="sidenav right">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </>
    )
    // return (
    //   <Navbar
    //     className="navbar"
    //     brand={<Link to="/">techTurnip</Link>}
    //     alignLinks="right"
    //   >
    //     <NavItem
    //       onClick={e => {
    //         this.setActiveClass(e)
    //         this.props.history.push('/')
    //       }}
    //     >
    //       Home
    //     </NavItem>
    //     <NavItem
    //       className={}
    //       onClick={e => {
    //         this.setActiveClass(e)
    //         this.props.history.push('/about')
    //       }}
    //     >
    //       About
    //     </NavItem>
    //     <NavItem
    //       onClick={e => {
    //         this.setActiveClass(e)
    //         this.props.history.push('/portfolio')
    //       }}
    //     >
    //       Portfolio
    //     </NavItem>
    //     <NavItem
    //       onClick={e => {
    //         this.setActiveClass(e)
    //         this.props.history.push('/blog')
    //       }}
    //     >
    //       Blog
    //     </NavItem>
    //   </Navbar>
    // )
  }
}

export default withRouter(Navigation)
