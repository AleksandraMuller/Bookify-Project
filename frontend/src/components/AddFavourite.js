import React from "react";
import { useSelector } from "react-redux";

import { HeartButton } from "../styles/styles_Welcome";
import { addFavourite } from "../services/favourites";

export const AddFavourite = ({ title, authors, image, favId, buy }) => {
  const name = useSelector(store => store.auth.name);

  const book = { title, authors, image, favId, buy, name };
  return (
    <>
      <HeartButton role="img" onClick={() => addFavourite(book)}>
        ❤️
      </HeartButton>
    </>
  );
};
