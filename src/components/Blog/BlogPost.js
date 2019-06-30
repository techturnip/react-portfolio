import React from "react";

export default function BlogPost(props) {
  console.log(props);
  const { title, content } = props.post;
  function createMarkup(content) {
    return { __html: content };
  }

  return (
    <div>
      <h2>{title.rendered}</h2>
      <div dangerouslySetInnerHTML={createMarkup(content.rendered)} />
    </div>
  );
}
