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
import { handleLoginUser } from "../services/auth";

// const URL = "https://bookify-project.herokuapp.com/sessions";
// const URL = "http://localhost:8080/sessions";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorText, setErrorText] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

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
          <OrangeButton
            onClick={event =>
              handleLoginUser(
                event,
                auth,
                email,
                password,
                setErrorText,
                dispatch,
                history
              )
            }
          >
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
