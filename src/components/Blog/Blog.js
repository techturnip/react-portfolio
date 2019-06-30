import React, { Component } from "react";
import BlogPost from "./BlogPost";
import { Container } from "reactstrap";
import axios from "axios";

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPosts: []
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1/wp/wp-json/wp/v2/posts")
      .then(response => {
        this.setState({ blogPosts: response.data });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    console.log(this.state.blogPosts);
    return (
      <Container>
        <div>
          <h1>This is the blog component!</h1>
        </div>

        <div>
          {this.state.blogPosts.map(post => {
            return <BlogPost key={post.id} post={post} />;
          })}
        </div>
      </Container>
    );
  }
}
