import React from "react";
import {
  Video,
  Middle,
  Navbar,
  HeaderQuote,
  HeaderInvite,
  Span,
  MainRegisterButton,
  MainRegisterButtonText,
  RegisterButton,
  LoginButton,
  Container
} from "../styles/styles_Main";

import { useHistory } from "react-router-dom";

import redlawn from "../assets/videos/redlawn.mp4";

export const Main = () => {
  const history = useHistory();

  return (
    <Container>
      <Video autoPlay playsInline muted loop>
        <source src={redlawn} type="video/mp4"></source>
        "Your browser is not supported!"
      </Video>
      <Navbar>
        <LoginButton onClick={() => history.push("/login")}>Log in</LoginButton>
        <RegisterButton onClick={() => history.push("/register")}>
          Register
        </RegisterButton>
      </Navbar>
      <Middle>
        <HeaderQuote>
          “Books are the plane, and the train, and the road. They are the
          destination, and the journey. They are home.”
          <Span>― Anna Quindlen, How Reading Changed My Life</Span>
        </HeaderQuote>
        <HeaderInvite>Join our book community!</HeaderInvite>
        <MainRegisterButton onClick={() => history.push("/register")}>
          <MainRegisterButtonText>Register</MainRegisterButtonText>
        </MainRegisterButton>
      </Middle>
    </Container>
  );
};
