import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import blogSvg from './blog.svg'

export default class BlogPost extends Component {
  state = {
    title: '',
    content: '',
    img: '',
    date: ''
  }

  componentDidMount() {
    const slug = this.props.match.params.slug

    axios
      .get(`http://127.0.0.1/wp/wp-json/wp/v2/posts?slug=${slug}`)
      .then(res => {
        const { title, content, date } = res.data[0]
        console.log(res.data[0])
        this.setState({
          title: title.rendered,
          content: content.rendered,
          date: new Date(date)
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { title, content, date } = this.state
    const metaDate = date.toLocaleString()
    const { createMarkup } = this.props
    console.log(this.state.date)
    return (
      <div style={this.props.bgSvg(blogSvg)} className="blog">
        <div className="blog-post-wrapper white-trans-box">
          <Link className="back-link" to="/blog">
            <i className="fa fa-long-arrow-left" /> Back to Blog
          </Link>
          <header className="blog-post-header">
            <h2 className="blog-post-title">
              {title}
              <span className="blog-post-meta">{metaDate}</span>
            </h2>
          </header>
          <div
            dangerouslySetInnerHTML={createMarkup(content)}
            className="blog-post-content"
          />
        </div>
      </div>
    )
  }
}
