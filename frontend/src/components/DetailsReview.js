import React from "react";
import { useSelector } from "react-redux";

// `https://bookify-project.herokuapp.com/${reviewId}`

// const URL = "http://localhost:8080/:reviewId";
import {
  Container,
  Header,
  HeaderParagraph,
  Span
} from "../styles/styles_DetailsReview";
import { DeleteButton } from "../styles/styles_reusables";

export const DetailsReview = props => {
  const { id, review, name, time, reviewId, image } = props;
  const currentUser = useSelector(state => state.auth.name);

  const isCurrentUser = name === currentUser;

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
      .then(json => {
        window.location.reload();
      });
  };

  return (
    <Container key={id}>
      {image}
      <Header>
        <HeaderParagraph>
          <Span>{name}</Span> said {time}
        </HeaderParagraph>
        {isCurrentUser && (
          <DeleteButton onClick={handleDelete}>
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
