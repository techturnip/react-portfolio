import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'

class Navigation extends Component {
  setActiveClass = e => {
    const linkList = e.target.parentNode.parentNode.children
    const target = e.target.innerHTML

    for (let i = 0; i < linkList.length; i++) {
      if (linkList[i].querySelector('a').innerHTML === target) {
        linkList[i].classList.add('active')
      } else {
        linkList[i].classList.remove('active')
      }
    }
  }

  render() {
    return (
      <Navbar
        className="navbar"
        brand={<Link to="/">techTurnip</Link>}
        alignLinks="right"
      >
        <NavItem
          onClick={e => {
            this.setActiveClass(e)
            this.props.history.push('/')
          }}
        >
          Home
        </NavItem>
        <NavItem
          onClick={e => {
            this.setActiveClass(e)
            this.props.history.push('/about')
          }}
        >
          About
        </NavItem>
        <NavItem
          onClick={e => {
            this.setActiveClass(e)
            this.props.history.push('/portfolio')
          }}
        >
          Portfolio
        </NavItem>
        <NavItem
          onClick={e => {
            this.setActiveClass(e)
            this.props.history.push('/blog')
          }}
        >
          Blog
        </NavItem>
      </Navbar>
    )
  }
}

export default withRouter(Navigation)
