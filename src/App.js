import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import PortfolioItem from './components/Portfolio/PortfolioItem'
import Blog from './components/Blog/Blog'
import BlogPost from './components/Blog/BlogPost'
import 'font-awesome/css/font-awesome.min.css'
import './App.scss'

export default class App extends Component {
  // This method will take in an svg file and return a style object to enable displaying an svg in the background.
  backgroundSvg(svg) {
    const bgStyle = {
      backgroundImage: 'url(' + svg + ')'
    }

    return bgStyle
  }

  createMarkup(content) {
    return { __html: content }
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact
          path="/"
          render={props => <Home {...props} bgSvg={this.backgroundSvg} />}
        />
        <Route
          path="/about"
          render={props => <About {...props} bgSvg={this.backgroundSvg} />}
        />
        <Route
          exact
          path="/portfolio"
          render={props => (
            <Portfolio
              {...props}
              bgSvg={this.backgroundSvg}
              createMarkup={this.createMarkup}
            />
          )}
        />
        <Route
          path="/portfolio/:id"
          render={props => (
            <PortfolioItem
              {...props}
              bgSvg={this.backgroundSvg}
              createMarkup={this.createMarkup}
            />
          )}
        />
        <Route
          exact
          path="/blog"
          render={props => (
            <Blog
              {...props}
              bgSvg={this.backgroundSvg}
              createMarkup={this.createMarkup}
            />
          )}
        />
        <Route
          path="/blog/:slug"
          render={props => (
            <BlogPost
              {...props}
              bgSvg={this.backgroundSvg}
              createMarkup={this.createMarkup}
            />
          )}
        />
      </div>
    )
  }
}
