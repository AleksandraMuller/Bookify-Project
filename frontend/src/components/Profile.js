import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Logout } from "./Logout";

import {
  Container,
  Header,
  MainTitle,
  ButtonContainer,
  BlueButton
} from "../styles/styles_reusables";
import {
  FlexContainer,
  Video,
  Button,
  Text,
  Wrapper
} from "styles/styles_Profile";
import { ErrorButton, ErrorContainer } from "../styles/styles_error";

import boat from "../assets/videos/boat.mp4";
import book from "../assets/videos/book.mp4";

export const Profile = () => {
  const history = useHistory();
  const name = useSelector(store => store.auth.name);
  const loggedIn = useSelector(store => store.auth.loggedIn);

  return (
    <Container>
      {loggedIn && (
        <>
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <BlueButton onClick={() => history.goBack()}>Back</BlueButton>
            </ButtonContainer>
          </Header>
          <MainTitle>
            Welcome, {name}{" "}
            <span role="img" aria-labelledby="persons face"></span>
            🧑
          </MainTitle>
          <FlexContainer>
            <Button onClick={() => history.push("/review")}>
              <Wrapper>
                <Video autoPlay playsInline muted loop>
                  <source src={book} type="video/mp4"></source>
                  "Your browser is not supported!"
                </Video>
                <Text>Check your reviews</Text>
              </Wrapper>
            </Button>
            <Button onClick={() => history.push("/favourites")}>
              <Wrapper>
                <Video autoPlay playsInline muted loop>
                  <source src={boat} type="video/mp4"></source>
                  "Your browser is not supported!"
                </Video>
                <Text>Discover your favourites</Text>
              </Wrapper>
            </Button>
          </FlexContainer>
        </>
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
