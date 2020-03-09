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

export const HeaderName = styled.h3`
  color: #fff;
  margin-right: 1rem;
  align-self: center;
  font-family: "Libre Franklin", sans-serif;
  @media (min-width: 900px) {
    margin-right: 2rem;
  }
`;

export const HeaderForm = styled.h2`
  color: #333;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 4px;
  font-size: 1.5rem;
  @media (min-width: 900px) {
    font-size: 3rem;
  }
`;

export const Form = styled.form`
  text-align: center;
`;

export const Input = styled.input`
  font-family: "Libre Franklin", sans-serif;
  color: #333;
  font-size: 1rem;
  padding: 0.5rem;
  border: #cd6133 solid 1px;
  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ToBuy = styled.a`
  font-size: 1.5rem;
  z-index: 100;
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  text-decoration: none;
`;

export const Image = styled.img`
  grid-row: 1 / span 2;
  grid-column: 1 / span 3;
  background-position: center;
  object-fit: contain;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
  :hover {
  }
`;

export const DetailsContainer = styled.div`
  grid-row: 3 / -1;
  grid-column: 1 / -1;
  text-align: center;
  z-index: 100;
  font-family: "Libre Franklin", sans-serif;
`;

export const OneCard = styled.div`
  width: 100%;
  height: 33rem;
  background: #fff;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 10% 45% 30% 10% 5%;
  justify-content: center;
  align-content: top;
  border: 1px solid #d35400;
  border-radius: 10px;
  &:hover ${Image} {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
    opacity: 0.5;
    object-fit: cover;
    border-radius: 10px;
  }
  &:hover ${DetailsContainer} {
    color: #fff;
  }
  &:hover ${ToBuy} {
    color: white;
  }
  :hover {
    background: black;
  }
  @media (min-width: 568px) {
    width: 45%;
  }
  @media (min-width: 900px) {
    width: 22%;
  }
`;

export const DetailsButton = styled.button`
  grid-row: 4 / span 1;
  grid-column: 2 / span 1;
  z-index: 100;
  color: #fff;
  background: #cd6133;
  border: 4px solid #cd6133;
  text-align: center;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    color: #000;
    background: #fff;
    border: 4px solid #fff;
    transform: translate(0, -3px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 8px 6px -6px black;
  }
`;
