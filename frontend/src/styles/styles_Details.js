import styled from "styled-components";

export const ButtonBack = styled.button`
  margin-left: 1rem;
  color: #fff;
  height: 1.5rem;

  background: #3b5998;
  border: 2px solid #3b5998;
  float: left;
  text-align: center;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 2px;
  cursor: pointer;
  margin-top: 0.3rem;
  :hover {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    transform: translate(0, -3px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 8px 6px -6px black;
  }
  @media (min-width: 900px) {
    margin-left: 2rem;
    height: 2.5rem;
    margin-top: 0;
  }
`;

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
