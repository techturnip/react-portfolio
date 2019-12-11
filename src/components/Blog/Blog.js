import React, { Component } from 'react'
import axios from 'axios'
import blogSvg from './blog.svg'
import { Preloader } from 'react-materialize'

export default class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blogPosts: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.techturnip.us/wp-json/wp/v2/posts')
      .then(response => {
        this.setState({ blogPosts: response.data })
      })
      .catch(error => {
        console.error('Server Error', error)
      })
  }

  clickHandler = slug => {
    this.props.history.push(`/blog/${slug}`)
  }

  render() {
    const isLoading = this.state.blogPosts.length
    return (
      
      <div style={this.props.bgSvg(blogSvg)} className="blog">
        <div className="blog-list-wrapper">
          <div>
            <h1 className="blog-title">My Blog</h1>

            <div className="blog-list">
              {isLoading ? this.state.blogPosts.map(post => {
                console.log(post)
                const date = new Date(post.date)
                const metaDate = date.toLocaleDateString()
                return (
                  <div
                    className={`blog-list-card hoverable white-box ${isLoading ? 'fade-in' : null}`}
                    key={post.id}
                    onClick={() => this.clickHandler(post.slug)}
                  >
                    <h4 className="blog-list-title">
                      {post.title.rendered}
                      <span className="blog-list-meta">{metaDate}</span>
                    </h4>
                    <p
                      dangerouslySetInnerHTML={this.props.createMarkup(
                        post.excerpt.rendered
                      )}
                      className="blog-list-excerpt"
                    />
                  </div>
                )
              }) :
                  <div className="white-box">
                    <div className="loading">
                      <Preloader />
                    </div>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
