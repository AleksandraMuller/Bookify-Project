import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Container,
  Header,
  ButtonContainer,
  BlueButton,
  MainTitle,
  CardContainer
} from "../styles/styles_reusables";
import { Logout } from "./Logout";
import { FavouriteCard } from "./FavouriteCard";
import { OneFavourite } from "../styles/styles_Favourites";

export const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const history = useHistory();

  const name = useSelector(store => store.auth.name);

  useEffect(() => {
    fetch(`http://localhost:8080/like?username=${name}`)
      .then(res => res.json())
      .then(json => {
        setFavourites(json);
        console.log(json);
      });
  }, [name]);
  return (
    <Container>
      <Header>
        <ButtonContainer>
          <Logout></Logout>
          <BlueButton onClick={() => history.goBack()}>Back</BlueButton>
        </ButtonContainer>
      </Header>
      <MainTitle>
        <span role="img" aria-labelledby="hearts">
          ❤️❤️❤️
        </span>{" "}
        Your favourites{" "}
        <span role="img" aria-labelledby="hearts">
          ❤️❤️❤️
        </span>
      </MainTitle>
      <CardContainer>
        {favourites.map(favourite => {
          return (
            <OneFavourite>
              <FavouriteCard
                image={favourite.image}
                title={favourite.title}
                authors={favourite.authors}
                cart={favourite.buy}
                favId={favourite._id}
              ></FavouriteCard>
            </OneFavourite>
          );
        })}
      </CardContainer>
    </Container>
  );
};
