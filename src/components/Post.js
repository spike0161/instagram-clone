import React from "react";
import "../css/post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ imageUrl, caption, username }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="DeanHildebrand"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="" />

      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
