import React from "react";
import { useSelector } from "react-redux";

// const URL = "http://localhost:8080/:reviewId";
import {
  Container,
  Header,
  HeaderParagraph,
  Span
} from "../styles/styles_Review";
import { DeleteButton } from "../styles/styles_reusables";

export const Review = props => {
  const { id, review, name, time, reviewId, image } = props;
  const currentUser = useSelector(state => state.auth.name);

  const isCurrentUser = name === currentUser;

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
          <DeleteButton onClick={handleDelete}>Delete ❌</DeleteButton>
        )}
      </Header>
      <p>{review}</p>
    </Container>
  );
};
