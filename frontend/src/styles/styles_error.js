import styled from "styled-components";

export const ErrorContainer = styled.div`
  background: #ff7c7c;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  color: #fff;
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-size: 2rem;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 2px;
  font-weight: 600;
`;

export const ErrorButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
  font-family: "Libre Franklin", sans-serif;
  background: transparent;
  border: 2px red solid;
  cursor: pointer;
  height: 2rem;
  color: #fff;
  :hover {
    background: red;
    transform: translate(0, -3px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 8px 6px -6px black;
  }
`;
