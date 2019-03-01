import React from "react";

function ArticleDetail(props) {
  console.log(props);

  if (props.articleToDisplay === null) {
    return (
      <div>
        <h2>Article detail</h2>
        <p>Please select article</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Article detail</h2>
        <h3>{props.articleToDisplay.post.title}</h3>
      </div>
    );
  }
}

export default ArticleDetail;