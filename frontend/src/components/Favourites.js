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

import { getFavourites } from "../services/favourites";
import { ErrorButton, ErrorContainer } from "../styles/styles_error";

const URL = "https://bookify-project.herokuapp.com";
// const URL = "http://localhost:8080";

export const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const history = useHistory();

  const name = useSelector(store => store.auth.name);
  const loggedIn = useSelector(store => store.auth.loggedIn);

  useEffect(() => {
    getFavourites(name, setFavourites);
  }, [name]);

  return (
    <Container>
      {loggedIn && (
        <Header>
          <ButtonContainer>
            <Logout></Logout>
            <BlueButton onClick={() => history.goBack()}>Back</BlueButton>
          </ButtonContainer>
        </Header>
      )}
      {loggedIn && (
        <MainTitle>
          <span role="img" aria-labelledby="hearts">
            ❤️❤️❤️
          </span>{" "}
          Your favourites{" "}
          <span role="img" aria-labelledby="hearts">
            ❤️❤️❤️
          </span>
        </MainTitle>
      )}
      {loggedIn && (
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
      )}
      {!loggedIn && (
        <ErrorContainer>
          ERROR! No access permitted!{" "}
          <ErrorButton onClick={() => history.push("/")}>
            Back to Main Page
          </ErrorButton>
        </ErrorContainer>
      )}
    </Container>
  );
};