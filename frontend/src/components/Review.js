import React from "react";

// const URL = "http://localhost:8080/:reviewId";

export const Review = props => {
  const { id, review, name, time } = props;

  return (
    <div key={id}>
      <p>
        Review: {review} // Name: {name} // {time}
      </p>
    </div>
  );
};
