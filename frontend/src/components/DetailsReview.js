import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import {
  Container,
  Header,
  HeaderParagraph,
  Span
} from "../styles/styles_DetailsReview";
import { DeleteButton } from "../styles/styles_reusables";

import { handleDelete } from "../services/reviews";

export const DetailsReview = props => {
  const { reviews } = props;
  const currentUser = useSelector(state => state.auth.name);

  const revs = reviews.map(review => {
    const isCurrentUser = review.authorName === currentUser;
    return (
      <Container key={review._id}>
        {review.image}
        <Header>
          <HeaderParagraph>
            <Span>{review.authorName}</Span> said{" "}
            {moment(review.createdAt).fromNow()}
          </HeaderParagraph>
          {isCurrentUser && (
            <DeleteButton onClick={() => handleDelete(review._id)}>
              Delete{" "}
              <span role="img" aria-labelledby="delete image">
                ❌
              </span>
            </DeleteButton>
          )}
        </Header>
        <p>{review.review}</p>
      </Container>
    );
  });
  return <>{revs}</>;
};
