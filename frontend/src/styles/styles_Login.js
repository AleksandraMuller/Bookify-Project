import styled from "styled-components";

// export const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;
//   background: #eee;
// `;

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
  flex-direction: column-reverse;
  background: #000;
  // order: -1;

  @media (min-width: 900px) {
    flex-direction: row;
    // order: 0;
    width: 80%;
    height: 80%;
    -webkit-box-shadow: 0px 5px 10px rgba(50, 50, 50, 1);
    -moz-box-shadow: 0px 5px 10px rgba(50, 50, 50, 1);
    box-shadow: 0px 5px 10px rgba(50, 50, 50, 1);
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  height: 40%;
  background: black;
  display: grid;
  grid-template-columns: 5% 25% 40% 25% 5%;
  grid-template-rows: 10% 30% 30% 15% 15%;
  @media (min-width: 900px) {
    width: 50%;
    height: 100%;
    grid-template-columns: 10% 10% 60% 10% 10%;
    grid-template-rows: 15% 15% 45% 10% 15%;
  }
`;

export const LeftContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 60%;
  display: grid;
  font-family: "Libre Franklin", sans-serif;

  grid-template-columns: 5% 25% 40% 25% 5%;
  grid-template-rows: 5% 15% 55% 10% 15%;
  @media (min-width: 900px) {
    height: 100%;
    width: 50%;
    grid-template-columns: 10% 10% 60% 10% 10%;
    grid-template-rows: 5% 15% 55% 10% 15%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  object-fit: cover;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`;

//same as LeftHeader possibility to reuse
export const RightHeader = styled.h2`
  color: #fff;
  font-size: 1.3rem;
  grid-column: 1 / -1;
  grid-row: 2 / span 1;
  z-index: 100;
  text-align: center;
  align-self: center;
  padding: 0.5rem;
  font-family: "Libre Franklin", sans-serif;

  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

export const LeftHeader = styled.h2`
  color: #333;
  font-size: 0.8rem;
  grid-column: 1 / -1;
  grid-row: 2 / span 1;
  z-index: 100;
  text-align: center;
  align-self: center;
  // padding: 0.5rem;
  font-family: "Libre Franklin", sans-serif;

  @media (min-width: 900px) {
    font-size: 1.3rem;
  }
`;

export const Span = styled.h2``;
