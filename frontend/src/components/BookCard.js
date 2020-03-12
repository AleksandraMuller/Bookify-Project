import React from "react";

import { Image, DetailsContainer } from "../styles/styles_Welcome";

export const BookCard = ({ image, title, authors }) => {
  return (
    <>
      <Image src={image === undefined ? null : `${image.thumbnail}`} />
      <DetailsContainer>
        <h3>{title}</h3>
        <p>by {authors ? authors.join(", ") : "Not provided"}</p>
        {/* <p>{categories}</p> */}
      </DetailsContainer>
    </>
  );
};
