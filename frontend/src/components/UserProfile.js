import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// const URL = "http://localhost:8080/:reviewId";

// I'd rather deconstruct the props in the function params directly, saves you a line hehe.
// export const UserProfile = ({ review, author, authors, title, reviewId }) => {
export const UserProfile = props => {
  const { review, author, authors, title, reviewId } = props;

  const token = useSelector(store => store.auth.accessToken);
  const name = useSelector(store => store.auth.name);

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
