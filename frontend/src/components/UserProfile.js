import React from "react";
import { useSelector } from "react-redux";

// const URL = "http://localhost:8080/:reviewId";

export const UserProfile = props => {
  const { reviewId, review, author, authors, title } = props;

  const token = useSelector(store => store.auth.accessToken);

  const handleDelete = (event, index) => {
    event.preventDefault();

    fetch(`http://localhost:8080/${reviewId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        window.location.reload();
      });
  };

  return (
    <div>
      {token && (
        <div>
          <p>Title: {title}</p>
          <p>Authors: {authors}</p>
          <p>
            Review: {review} // Author: {author}
          </p>

          <button onClick={index => handleDelete(index)}>Delete Review</button>
        </div>
      )}
    </div>
  );
};
