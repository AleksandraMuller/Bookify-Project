import React from "react";
import { ToBuy } from "../styles/styles_Welcome";
import {
  Image,
  TextContainer,
  DeleteButtonFav
} from "../styles/styles_Favourites";
import { deleteFavourite } from "../services/favourites";

const URL = "https://bookify-project.herokuapp.com";
// const URL = "http://localhost:8080";

export const FavouriteCard = ({ image, title, authors, cart, favId }) => {
  return (
    <>
      <Image src={image} />
      {cart && (
        <ToBuy href={cart}>
          <span role="img" aria-labelledby="shopping cart">
            🛒
          </span>
        </ToBuy>
      )}
      <TextContainer>
        <h3>{title}</h3>
        <p>by {authors ? authors.join(", ") : "Not provided"}</p>
      </TextContainer>
      <DeleteButtonFav onClick={() => deleteFavourite(favId)}>
        Delete{" "}
        <span role="img" aria-labelledby="delete image">
          ❌
        </span>
      </DeleteButtonFav>
    </>
  );
};
