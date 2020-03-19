import React from "react";
import { useSelector } from "react-redux";

import {
  Container,
  TopContainer,
  BottomContainer,
  Paragraph
} from "../styles/styles_ReviewCard";

import { handleDelete } from "../services/reviews";

// https://bookify-project.herokuapp.com/${reviewId}

import { DeleteButton } from "../styles/styles_reusables";

export const ReviewCard = props => {
  const { review, authors, title, reviewId, time } = props;

  const token = useSelector(store => store.auth.accessToken);

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
            <DeleteButton onClick={() => handleDelete(reviewId)}>
              Delete <span role="img">❌</span>
            </DeleteButton>
          </TopContainer>

          <BottomContainer> {review}</BottomContainer>
        </Container>
      )}
    </>
  );
};
