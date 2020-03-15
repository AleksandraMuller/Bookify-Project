import React, { useState } from "react";
import { auth } from "../reducers/auth";
import { useDispatch, useSelector } from "react-redux";

import { PlusButton } from "../styles/styles_Welcome";

const URL = "http://localhost:8080/like";

export const Heart = ({ title, authors, image, favId, buy }) => {
  const name = useSelector(store => store.auth.name);
  // const visible = useSelector(store => store.auth.visible);
  // console.log(visible);

  const addFavourite = event => {
    event.preventDefault();

    fetch(`${URL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: favId,
        title: title,
        authors: authors,
        image: image,
        username: name,
        buy: buy
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
    alert("Added to your favourites");
  };

  return (
    <>
      <PlusButton role="img" onClick={addFavourite}>
        ❤️
      </PlusButton>
    </>
  );
};
