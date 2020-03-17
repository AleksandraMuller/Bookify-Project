import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #eee;
`;

export const Header = styled.div`
  width: 100%;
  height: 4rem;
  background: #cd6133;
  display: flex;
  justify-content: space-between;
`;

export const BlueButton = styled.button`
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
    background: #fff;
    color: #000;
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

export const DeleteButton = styled.button`
  font-family: "Libre Franklin", sans-serif;
  background: transparent;
  border: 2px #ff7c7c solid;
  cursor: pointer;
  height: 2rem;
  :hover {
    color: #fff;
    background: #ff7c7c;
    transform: translate(0, -3px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 8px 6px -6px black;
  }
`;

export const OrangeButton = styled.button`
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

export const ButtonContainer = styled.div`
  align-self: center;
`;

export const MainTitle = styled.h2`
  color: #333;
  font-size: 1rem;
  text-align: center;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 2px;
  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
