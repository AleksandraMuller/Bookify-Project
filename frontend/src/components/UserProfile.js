import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Container,
  TopContainer,
  BottomContainer,
  Paragraph
} from "../styles/styles_UserProfile";

import { DeleteButton } from "../styles/styles_reusables";

// const URL = "http://localhost:8080/:reviewId";

export const UserProfile = props => {
  const { review, authors, title, reviewId, time } = props;

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
              Delete ❌
            </DeleteButton>
          </TopContainer>

          <BottomContainer> {review}</BottomContainer>
        </Container>
      )}
    </>
  );
};
