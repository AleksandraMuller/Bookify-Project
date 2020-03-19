import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { ReviewCard } from "./ReviewCard";
import { Logout } from "./Logout";

import { ErrorButton, ErrorContainer } from "../styles/styles_error";

import { UserContainer } from "../styles/styles_Review";
import {
  Container,
  BlueButton,
  Header,
  ButtonContainer,
  MainTitle
} from "../styles/styles_reusables";

import { getReviews } from "../services/reviews";

export const Review = () => {
  const [reviews, setReviews] = useState([]);
  const name = useSelector(store => store.auth.name);
  const loggedIn = useSelector(store => store.auth.loggedIn);

  const history = useHistory();

  useEffect(() => {
    getReviews(name, setReviews);
  }, [name]);

  return (
    <Container>
      {loggedIn && (
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
      {loggedIn && (
        <MainTitle>
          Here is the list of all your reviews{" "}
          <span role="img" aria-labelledby="hand pointing down">
            👇
          </span>
        </MainTitle>
      )}
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
      {!loggedIn && (
        <ErrorContainer>
          ERROR! No access permitted!{" "}
          <ErrorButton onClick={() => history.push("/")}>
            Back to Main Page
          </ErrorButton>
        </ErrorContainer>
      )}
    </Container>
  );
};
