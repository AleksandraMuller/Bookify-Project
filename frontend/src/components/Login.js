import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  RightContainer,
  LeftContainer,
  FlexContainer,
  Image,
  RightHeader,
  LeftHeader,
  Span
  // Error
} from "../styles/styles_Login";
import {
  InputContainer,
  TransparentButton,
  Label,
  Input,
  Error
} from "../styles/styles_Register";

import { OrangeButton, Container } from "../styles/styles_reusables";

import library from "../assets/images/library2.jpg";

import { auth } from "../reducers/auth";

const URL = "https://bookify-project.herokuapp.com/sessions";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorText, setErrorText] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const myStorage = window.localStorage;
  const mySessions = window.sessionStorage;
  console.log(myStorage);
  console.log(mySessions);

  const handleLoginUser = async event => {
    event.preventDefault();

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          setErrorText(true);
          throw new Error("Unable to login, please try again");
        }
      })
      .then(json => {
        history.push("/welcome");
        console.log(json);
        dispatch(auth.actions.setLoggedIn(json.loggedIn));
        dispatch(auth.actions.setToken(json.accessToken));
        dispatch(auth.actions.setUser(json.userId));
        dispatch(auth.actions.setName(json.name));
      })
      .catch(err => console.log("error:", err));
  };

  return (
    <Container>
      <FlexContainer>
        <LeftContainer>
          <LeftHeader>
            Welcome back!<Span>Login to your account:</Span>
          </LeftHeader>
          <InputContainer>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            ></Input>
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            ></Input>
          </InputContainer>
          {errorText && <Error>User not found, access forbidden!</Error>}
          <OrangeButton onClick={event => handleLoginUser(event)}>
            Login
          </OrangeButton>
        </LeftContainer>
        <RightContainer>
          <Image src={library} />
          <RightHeader>Not a member of our book community?</RightHeader>
          <TransparentButton onClick={() => history.push("/register")}>
            Register
          </TransparentButton>
        </RightContainer>
      </FlexContainer>
    </Container>
  );
};
