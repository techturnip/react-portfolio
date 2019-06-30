import React from "react";

export default function BlogPost(props) {
  console.log(props);
  const { title, content } = props.post;

  return (
    <div>
      <h2>{title.rendered}</h2>
      <div dangerouslySetInnerHTML={props.createMarkup(content.rendered)} />
    </div>
  );
}
