import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "../reducers/auth";

// const URL = "http://localhost:8080/:reviewId";

export const Review = props => {
  const { id, review, name, time, reviewId, authorFiltered } = props;
  const dispatch = useDispatch();

  // dispatch(auth.actions.setReview(reviewId));

  // , reviews, setFiltered
  const token = useSelector(store => store.auth.accessToken);
  const validate = useSelector(store => store.auth.validate);
  const loggedIn = useSelector(store => store.auth.loggedIn);
  const author = useSelector(store => store.auth.name);
  const array = useSelector(store => store.auth.validate);
  const disbale = useSelector(store => store.auth.isDisabled);

  // const handleDelete = (event, index) => {
  //   event.preventDefault();

  //   fetch(`http://localhost:8080/${reviewId}`, {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(json => {
  //       if (json.authorName === author) {
  //         console.log(json);
  //       } else {
  //         console.log("Not your username, delete not possible");
  //       }
  //       // if (json.autorName === name) {
  //       //   window.location.reload();
  //       // } else {
  //       //   dispatch(auth.actions.setIsDisabled(true));
  //       // }
  //       // json = {};
  //       // window.location.reload();
  //     });
  // };
  return (
    <div key={id}>
      <p>
        Review: {review} // Name: {name} // {time}
      </p>

      {/* <button onClick={index => handleDelete(index)}>Delete Review</button> */}
    </div>
  );
};
