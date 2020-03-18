import React from "react";
import { useSelector } from "react-redux";

import {
  Container,
  TopContainer,
  BottomContainer,
  Paragraph
} from "../styles/styles_ReviewCard";

// https://bookify-project.herokuapp.com/${reviewId}

import { DeleteButton } from "../styles/styles_reusables";

// const URL = "http://localhost:8080/:reviewId";

export const ReviewCard = props => {
  const { review, authors, title, reviewId, time } = props;

  const token = useSelector(store => store.auth.accessToken);

  const handleDelete = event => {
    event.preventDefault();

    fetch(`https://bookify-project.herokuapp.com/${reviewId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <>
      {token && (
        <Container>
          <TopContainer>
            <div>
              <Paragraph>
                {title} by {authors} ~ {time}
              </Paragraph>
            </div>
            <DeleteButton onClick={index => handleDelete(index)}>
              Delete <span role="img">❌</span>
            </DeleteButton>
          </TopContainer>

          <BottomContainer> {review}</BottomContainer>
        </Container>
      )}
    </>
  );
};
