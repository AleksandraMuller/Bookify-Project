import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin-top: 1rem;
  margin: 0 auto;
  color: #333;
  font-family: "Libre Franklin", sans-serif;
  border-bottom: 2px solid #333;
  margin-bottom: 2rem;
  @media (min-width: 900px) {
    width: 60%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 2px;
`;

export const HeaderParagraph = styled.p`
  font-size: 0.6rem;
  @media (min-width: 900px) {
    font-size: 1rem;
  }
`;

export const Span = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  @media (min-width: 900px) {
    font-size: 1.2rem;
  }
`;
