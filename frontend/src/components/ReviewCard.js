import React from "react";
import moment from "moment";

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
  const { reviews } = props;

  const revs = reviews.map(review => {
    return (
      <Container>
        <TopContainer>
          <div>
            <Paragraph>
              {review.title} by {review.authors} ~{" "}
              {moment(review.createdAt).fromNow()}
            </Paragraph>
          </div>
          <DeleteButton onClick={() => handleDelete(review._id)}>
            Delete <span role="img">❌</span>
          </DeleteButton>
        </TopContainer>

        <BottomContainer> {review.review}</BottomContainer>
      </Container>
    );
  });
  return <>{revs}</>;
};
