import React from "react";
import jungle from "../assets/images/jungle.jpg";
import { ToBuy } from "../styles/styles_Welcome";
import {
  Image,
  TextContainer,
  DeleteButtonFav
} from "../styles/styles_Favourites";
// import {  } from "styles/styles_reusables";

export const FavouriteCard = ({ image, title, authors, cart, favId }) => {
  const deleteFavourite = event => {
    event.preventDefault();

    fetch(`http://localhost:8080/fav/${favId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(() => {
        window.location.reload();
      });
  };
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
      <DeleteButtonFav onClick={deleteFavourite}>
        Delete{" "}
        <span role="img" aria-labelledby="delete image">
          ❌
        </span>
      </DeleteButtonFav>
    </>
  );
};
