import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import blogSvg from './blog.svg'
import { Preloader } from 'react-materialize'

export default class BlogPost extends Component {
  state = {
    title: '',
    content: '',
    img: '',
    date: '',
    isLoading: true
  }

  componentDidMount() {
    const slug = this.props.match.params.slug

    axios
      .get(`https://api.techturnip.us/wp-json/wp/v2/posts?slug=${slug}`)
      .then(res => {
        const { title, content, date } = res.data[0]
        this.setState({
          title: title.rendered,
          content: content.rendered,
          date: new Date(date),
          isLoading: false
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    const { title, content, date, isLoading } = this.state
    const metaDate = date.toLocaleString()
    const { createMarkup } = this.props
    return (
      <div style={this.props.bgSvg(blogSvg)} className="blog">
        <div className={`blog-post-wrapper white-box ${!isLoading ? 'fade-in' : null}`}>
          
          <Link className="back-link" to="/blog">
            <i className="fa fa-long-arrow-left" /> Back to Blog
          </Link>
          { isLoading ? 
            <div className="loading">
              <Preloader />
            </div>
          :
          <> 
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
          </>
          }
          
         
        </div>
      </div>
    )
  }
}
