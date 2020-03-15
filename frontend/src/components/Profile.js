import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { UserProfile } from "./UserProfile";
import { Logout } from "./Logout";

// import { ButtonContainer } from "../styles/styles_Logout";
import { UserContainer } from "../styles/styles_Profile";
import {
  Container,
  BlueButton,
  Header,
  ButtonContainer,
  MainTitle
} from "../styles/styles_reusables";

// const URL = "http://localhost:8080/:reviewId";

export const Profile = () => {
  const [reviews, setReviews] = useState([]);
  const name = useSelector(store => store.auth.name);
  const token = useSelector(store => store.auth.accessToken);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:8080/profile?username=${name}`)
      .then(res => res.json())
      .then(json => {
        setReviews(json);
      });
  }, []);

  return (
    <Container>
      {token && (
        <Header>
          <ButtonContainer>
            <Logout></Logout>
            <BlueButton onClick={() => history.goBack()}>Back</BlueButton>
            <BlueButton onClick={() => history.push("/favourites")}>
              To Favourites
            </BlueButton>
          </ButtonContainer>
          <UserContainer>You are logged in as: {name}</UserContainer>
        </Header>
      )}
      <MainTitle>Here is the list of all your reviews 👇</MainTitle>
      {reviews.map(review => {
        return (
          <UserProfile
            reviewId={review._id}
            author={review.authorName}
            authors={review.authors}
            review={review.review}
            title={review.title}
            bookId={review._id}
            time={moment(review.createdAt).fromNow()}
          ></UserProfile>
        );
      })}
    </Container>
  );
};
