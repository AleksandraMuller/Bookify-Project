import styled from "styled-components";

export const ButtonProfile = styled.button`
  margin-left: 1rem;
  color: #fff;
  height: 2.2rem;
  background: transparent;
  border: 2px solid #fff;
  float: left;
  text-align: center;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 2px;
  cursor: pointer;
  margin-top: 0.3rem;
  :hover {
    color: #000;
    background: #fff;
    transform: translate(0, -3px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 8px 6px -6px black;
  }

  color: #fff;
  margin-right: 1rem;
  align-self: center;
  font-family: "Libre Franklin", sans-serif;

  @media (min-width: 900px) {
    margin-left: 2rem;
    height: 2.5rem;
    margin-top: 0;
  }
`;

export const HeaderReview = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 1px;
  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
`;

export const InputReview = styled.textarea`
  width: 100%;

  font-size: 1.3rem;
`;

export const ButtonReview = styled.button`
  width: 50%;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 1px;
  text-align: center;
  background: #3b5998;
  color: #fff;
  border: none;
  margin-top: 1rem;
  height: 3rem;
  cursor: pointer;
  :hover {
    // color: #333;
    background: #cd6133;
    border: 1px #777 solid;
    transform: translate(0, -3px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 8px 6px -6px black;
  }
  @media (min-width: 900px) {
    width: 30%;
  }
`;

export const Form = styled.form`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
  @media (min-width: 900px) {
    width: 60%;
  }
`;
