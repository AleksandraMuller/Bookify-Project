import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-bottom: 2px solid #333;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  letter-spacing: 1px;
  font-family: "Libre Franklin", sans-serif;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const BottomContainer = styled.div`
  margin-top: 1rem;
`;

export const Paragraph = styled.p`
  font-weight: 600;
  color: #d35400;
`;
