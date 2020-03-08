import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  // background-image: linear-gradient(to bottom right, #c79081, #dfa579);
  background: #eee;
`;

export const FlexContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  background: #000;

  @media (min-width: 900px) {
    flex-direction: row;
    width: 80%;
    height: 80%;
    -webkit-box-shadow: 0px 5px 10px rgba(50, 50, 50, 1);
    -moz-box-shadow: 0px 5px 10px rgba(50, 50, 50, 1);
    box-shadow: 0px 5px 10px rgba(50, 50, 50, 1);
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  height: 40%;
  background: black;
  display: grid;
  grid-template-columns: 5% 25% 40% 25% 5%;
  grid-template-rows: 10% 30% 30% 15% 15%;
  @media (min-width: 900px) {
    width: 40%;
    height: 100%;
    grid-template-columns: 10% 10% 60% 10% 10%;
    grid-template-rows: 15% 15% 45% 10% 15%;
  }
`;

export const RightContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 70%;
  display: grid;
  font-family: "Libre Franklin", sans-serif;

  grid-template-columns: 5% 25% 40% 25% 5%;
  grid-template-rows: 5% 15% 55% 10% 15%;
  @media (min-width: 900px) {
    height: 100%;
    width: 60%;
    grid-template-columns: 10% 10% 60% 10% 10%;
    grid-template-rows: 5% 15% 55% 10% 15%;
  }
`;

export const LeftHeader = styled.h2`
  color: #fff;
  font-size: 1.3rem;
  grid-column: 1 / -1;
  // background: #000;
  // opacity: 0.7;
  grid-row: 2 / span 1;
  z-index: 100;
  text-align: center;
  align-self: center;
  padding: 0.5rem;
  font-family: "Libre Franklin", sans-serif;

  @media (min-width: 900px) {
    font-size: 2rem;
    // justify-self: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  // overflow: hidden;
  opacity: 0.5;
  object-fit: cover;
  border-right: 3px solid #d35400;
  // filter: blur(3px);
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  // opacity: 0.3;
`;

export const LoginButton = styled.button`
  color: #fff;
  background: transparent;
  // text-decoration: none;
  border: 4px solid #fff;
  grid-column: 3 / span 1;
  grid-row: 4 / span 1;
  z-index: 100;
  text-align: center;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    color: #000;
    background: #fff;
    transform: translate(0, -3px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 8px 6px -6px black;
  }
`;

export const RegisterButton = styled.button`
  color: #fff;
  background: #d35400;
  border: 4px solid #d35400;
  grid-column: 3 / span 1;
  grid-row: 4 / span 1;
  z-index: 100;
  text-align: center;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    color: #d35400;
    background: transparent;
    border: 4px solid #d35400;
    transform: translate(0, -3px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 8px 6px -6px black;
  }
`;

export const RightHeader = styled.h2`
  color: #333;
  font-size: 1.3rem;
  grid-column: 1 / -1;
  grid-row: 2 / span 1;
  z-index: 100;
  text-align: center;
  align-self: center;
  // padding: 0.5rem;
  font-family: "Libre Franklin", sans-serif;

  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

export const Label = styled.label`
  margin: 0 auto;
  margin-top: 0.3rem;
  color: grey;
  font-family: "Libre Franklin", sans-serif;

  @media (min-width: 900px) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
export const Input = styled.input`
  margin: 0 auto;
  width: 70%;
  color: #333;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0.2rem;
  font-family: "Libre Franklin", sans-serif;
  @media (min-width: 900px) {
    padding: 0.5rem;
  }
`;

export const InputContainer = styled.div`
  grid-column: 3 / span 1;
  grid-row: 3 / span 1;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (min-width: 900px) {
  }
`;
