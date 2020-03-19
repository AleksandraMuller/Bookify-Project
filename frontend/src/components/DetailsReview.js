import React from "react";
import { useSelector } from "react-redux";

import {
  Container,
  Header,
  HeaderParagraph,
  Span
} from "../styles/styles_DetailsReview";
import { DeleteButton } from "../styles/styles_reusables";

import { handleDelete } from "../services/reviews";

export const DetailsReview = props => {
  const { id, review, name, time, reviewId, image } = props;
  const currentUser = useSelector(state => state.auth.name);

  const isCurrentUser = name === currentUser;

  return (
    <Container key={id}>
      {image}
      <Header>
        <HeaderParagraph>
          <Span>{name}</Span> said {time}
        </HeaderParagraph>
        {isCurrentUser && (
          <DeleteButton onClick={() => handleDelete(reviewId)}>
            Delete{" "}
            <span role="img" aria-labelledby="delete image">
              ❌
            </span>
          </DeleteButton>
        )}
      </Header>
      <p>{review}</p>
    </Container>
  );
};
