import React from "react";
import Comment from "./CommentContainer";

const CommentsList = ({ comments }) => {
  return (
    <ul className="list">
      {comments.map((item) => <Comment key={item.id} {...item} />)}
    </ul>
  );
};

export default CommentsList;