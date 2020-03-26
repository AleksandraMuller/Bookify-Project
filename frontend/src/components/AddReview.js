import React from "react";
import { useSelector } from "react-redux";

import { addReview } from "../services/reviews";

import { ButtonReview } from "../styles/styles_Details";

export const AddReview = ({
  title,
  authors,
  description,
  setReviews,
  setUserReview,
  reviews,
  bookId,
  userReview
}) => {
  const name = useSelector(store => store.auth.name);

  const book = { userReview, bookId, description, title, authors, name };
  return (
    <>
      <ButtonReview
        onClick={event =>
          addReview(book, setReviews, setUserReview, reviews, event)
        }
      >
        Add review{" "}
        <span role="img" aria-labelledby="smiley">
          😊
        </span>
      </ButtonReview>
    </>
  );
};
