import React, { Component } from 'react'
import axios from 'axios'
import blogSvg from './blog.svg'

export default class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blogPosts: []
    }
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1/wp/wp-json/wp/v2/posts')
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
    return (
      <div style={this.props.bgSvg(blogSvg)} className="blog">
        <h1 className="blog-title">My Blog</h1>

        <div className="blog-list">
          {this.state.blogPosts.map(post => {
            console.log(post)
            const date = new Date(post.date)
            const metaDate = date.toLocaleDateString()
            return (
              <div
                className="blog-list-card hoverable white-trans-box"
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
          })}
        </div>
      </div>
    )
  }
}
