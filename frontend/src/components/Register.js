import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Image,
  FlexContainer,
  LeftContainer,
  RightContainer,
  LeftHeader,
  TransparentButton,
  RightHeader,
  Label,
  Input,
  InputContainer,
  Error
} from "../styles/styles_Register";

import { handleRegister } from "../services/auth";

import { Container, OrangeButton } from "../styles/styles_reusables";

import woman from "../assets/images/womaninlibrary.jpg";

export const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorText, setErrorText] = useState(false);
  const history = useHistory();

  return (
    <Container>
      <FlexContainer>
        <LeftContainer>
          <Image src={woman} />
          <LeftHeader>Already have an account?</LeftHeader>
          <TransparentButton onClick={() => history.push("/login")}>
            SIGN IN
          </TransparentButton>
        </LeftContainer>
        <RightContainer>
          <RightHeader>Become part of our book community today!</RightHeader>
          <InputContainer>
            <Label>Name</Label>
            <Input
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
            ></Input>

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
          <OrangeButton
            onClick={() =>
              handleRegister(name, email, password, setErrorText, history)
            }
          >
            REGISTER
          </OrangeButton>
          {errorText && <Error>Could not add user. Please try again!</Error>}
        </RightContainer>
      </FlexContainer>
    </Container>
  );
};
