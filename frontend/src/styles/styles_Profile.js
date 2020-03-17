import styled from "styled-components";

export const FlexContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  @media (min-width: 900px) {
    height: 30rem;
  }
`;

export const Button = styled.button`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 5% 5% 10% 75% 5%;
  width: 70%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin: 0 auto;
  height: 20rem;
  margin-bottom: 4rem;
  border: none;
  &:hover ${Video} {
    opacity: 0;
  }
  :hover {
    background: #3b5998;
    box-shadow: 0 8px 6px -6px black;
  }
  @media (min-width: 900px) {
    height: 30rem;
  }
`;

export const Text = styled.p`
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 1px;
  text-shadow: 2px 2px #000;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
`;
