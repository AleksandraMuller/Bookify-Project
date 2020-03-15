import styled from "styled-components";

export const HeaderName = styled.button`
  align-self: center;
  color: #fff;
  margin-right: 2rem;
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
  @media (min-width: 900px) {
    margin-left: 2rem;
    height: 2.5rem;
    margin-top: 0;
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

export const ToBuy = styled.a`
  font-size: 1.5rem;
  z-index: 100;
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  text-decoration: none;
  margin-top: 0.5rem;
  :hover {
    -webkit-animation: pulse 1s ease-in;
    -moz-animation: pulse 1s ease-in;
    animation: pulse 1s ease-in;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
    25% {
      -webkit-transform: scale(1.15);
      opacity: 0.1;
    }
    50% {
      -webkit-transform: scale(1.2);
      opacity: 0.3;
    }
    75% {
      -webkit-transform: scale(1.3);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: scale(1.4);
      opacity: 0;
    }
  }
`;

export const PlusButton = styled.button`
  font-size: 1.5rem;
  z-index: 100;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  cursor: pointer;
  text-decoration: none;
  background: transparent;
  border: none;
  :hover {
    -webkit-animation: pulse 1s ease-in;
    -moz-animation: pulse 1s ease-in;
    animation: pulse 1s ease-in;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
    25% {
      -webkit-transform: scale(1.15);
      opacity: 0.1;
    }
    50% {
      -webkit-transform: scale(1.2);
      opacity: 0.3;
    }
    75% {
      -webkit-transform: scale(1.3);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: scale(1.4);
      opacity: 0;
    }
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
  overflow: hidden;
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
