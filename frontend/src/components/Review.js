import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { ReviewCard } from "./ReviewCard";
import { Logout } from "./Logout";

import { UserContainer } from "../styles/styles_Review";
import {
  Container,
  BlueButton,
  Header,
  ButtonContainer,
  MainTitle
} from "../styles/styles_reusables";

// const URL = "http://localhost:8080/:reviewId";

export const Review = () => {
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
  }, [name]);

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
      <MainTitle>
        Here is the list of all your reviews{" "}
        <span role="img" aria-labelledby="hand pointing down">
          👇
        </span>
      </MainTitle>
      {reviews.map(review => {
        return (
          <ReviewCard
            reviewId={review._id}
            author={review.authorName}
            authors={review.authors}
            review={review.review}
            title={review.title}
            bookId={review._id}
            time={moment(review.createdAt).fromNow()}
          ></ReviewCard>
        );
      })}
    </Container>
  );
};
