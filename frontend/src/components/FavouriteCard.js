import React from "react";
import { ToBuy } from "../styles/styles_Welcome";
import {
  Image,
  TextContainer,
  DeleteButtonFav
} from "../styles/styles_Favourites";
import { deleteFavourite } from "../services/favourites";

import { OneFavourite } from "../styles/styles_Favourites";

export const FavouriteCard = ({ favourites }) => {
  const favs = favourites.map(favourite => {
    return (
      <OneFavourite>
        <Image src={favourite.image} />
        {favourite.buy && (
          <ToBuy href={favourite.buy}>
            <span role="img" aria-labelledby="shopping cart">
              🛒
            </span>
          </ToBuy>
        )}
        <TextContainer>
          <h3>{favourite.title}</h3>
          <p>
            by{" "}
            {favourite.authors ? favourite.authors.join(", ") : "Not provided"}
          </p>
        </TextContainer>
        <DeleteButtonFav onClick={() => deleteFavourite(favourite._id)}>
          Delete{" "}
          <span role="img" aria-labelledby="delete image">
            ❌
          </span>
        </DeleteButtonFav>
      </OneFavourite>
    );
  });

  return <>{favs}</>;
};

// TODO: create Card component that is reusable, sent favourite as a prop
