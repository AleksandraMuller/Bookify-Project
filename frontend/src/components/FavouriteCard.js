import React from "react";
import jungle from "../assets/images/jungle.jpg";
import { ToBuy } from "../styles/styles_Welcome";

export const FavouriteCard = ({ image, title, authors, cart }) => {
  return (
    <>
      <img src={image} />
      <ToBuy href={cart}>🛒</ToBuy>
      <div>
        <h3>{title}</h3>
        <p>by {authors ? authors.join(", ") : "Not provided"}</p>
      </div>
    </>
  );
};
