import React from "react";
import { useSelector } from "react-redux";

// const URL = "http://localhost:8080/:reviewId";
import {
  Container,
  Header,
  HeaderParagraph,
  Span,
  Button
} from "../styles/styles_Review";

export const Review = props => {
  const { id, review, name, time, reviewId } = props;
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
      <Header>
        <HeaderParagraph>
          <Span>{name}</Span> said {time}
        </HeaderParagraph>
        {isCurrentUser && <Button onClick={handleDelete}>Delete ❌</Button>}
      </Header>
      <p>Review: {review}</p>
    </Container>
  );
};
