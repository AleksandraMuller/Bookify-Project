import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { auth } from "../reducers/auth";
import { UserProfile } from "./UserProfile";

// const URL = "http://localhost:8080/:reviewId";

export const Profile = props => {
  // const { reviewId } = props;
  const name = useSelector(store => store.auth.name);
  // const reviewId = useSelector(store => store.auth.reviewId);
  // const [reviewId, setReviewId] = useState();

  const [filtered, setFiltered] = useState([]);
  // console.log(reviewId);

  useEffect(() => {
    fetch("http://localhost:8080/review")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        const newJson = json.filter(username => username.authorName === name);
        setFiltered(newJson);
      });
  }, [name]);

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
  //       // if (json.authorName === author) {
  //       //   console.log(json);
  //       // } else {
  //       //   console.log("Not your username, delete not possible");
  //       // }
  //       // if (json.autorName === name) {
  //       //   window.location.reload();
  //       // } else {
  //       //   dispatch(auth.actions.setIsDisabled(true));
  //       // }
  //       // json = {};
  //       window.location.reload();
  //     });
  // };

  return (
    <div>
      <div>Welcome {name}!</div>
      {filtered.map(usersArray => {
        return (
          <UserProfile
            reviewId={usersArray._id}
            author={usersArray.authorName}
            review={usersArray.review}
          ></UserProfile>
        );
      })}
    </div>
  );
};
