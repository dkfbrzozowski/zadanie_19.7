import React from "react";

const CommentForm = ({ text }) => {
  let commentText = "";
  return (
    <form
      className="input-form"
      onSubmit={(event) => {
        text(commentText);
        event.preventDefault();
      }}
    >
      <input
        className="input input-text"
        onChange={(e) => (commentText = e.target.value)}
      />
      <input className="input input-submit" type="submit" value="Add comment" />
    </form>
  );
};

export default CommentForm;