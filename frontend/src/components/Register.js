import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Image,
  FlexContainer,
  LeftContainer,
  RightContainer,
  LeftHeader,
  TransparentButton,
  OrangeButton,
  RightHeader,
  Label,
  Input,
  InputContainer,
  Error
} from "../styles/styles_Register";

import womanwithbook from "../assets/images/womanwithbook.jpg";
import woman from "../assets/images/womanResized.jpg";

const URL = "http://localhost:8080/users";

export const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorText, setErrorText] = useState(false);
  const history = useHistory();

  const handleRegister = event => {
    event.preventDefault();
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        res.json();
        if (res.status === 201) {
          history.push("/login");
        } else {
          setErrorText(true);
          throw new Error("Unable to sign Up, please try again");
        }
      })
      .then(json => console.log(json))
      .catch(err => console.log("error:", err));
  };

  return (
    <Container>
      <FlexContainer>
        <LeftContainer>
          <Image src={womanwithbook} />
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
          <OrangeButton onClick={event => handleRegister(event)}>
            REGISTER
          </OrangeButton>
          {errorText && <Error>Could not add user. Please try again!</Error>}
        </RightContainer>
      </FlexContainer>
    </Container>
  );
};
