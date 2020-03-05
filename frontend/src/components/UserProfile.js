import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { auth } from "../reducers/auth";

// const URL = "http://localhost:8080/:reviewId";

export const UserProfile = props => {
  const { reviewId, review, author } = props;

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
        // if (json.authorName === author) {
        //   console.log(json);
        // } else {
        //   console.log("Not your username, delete not possible");
        // }
        // if (json.autorName === name) {
        //   window.location.reload();
        // } else {
        //   dispatch(auth.actions.setIsDisabled(true));
        // }
        // json = {};
        window.location.reload();
      });
  };

  return (
    <div>
      <p>
        Review: {review} // Author: {author}
      </p>
      <button onClick={index => handleDelete(index)}>Delete Review</button>
    </div>
  );
};
