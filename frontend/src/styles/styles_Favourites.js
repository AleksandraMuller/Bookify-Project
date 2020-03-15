import styled from "styled-components";

// export const AllFavourites = styled.div`
//   width: 100%;
//   margin-top: 4rem;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

export const Image = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  background-position: center;
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;

  opacity: 0.3;
  :hover {
  }
`;

export const TextContainer = styled.div`
  grid-row: 3 / span 1;
  grid-column: 1 / -1;
  text-align: center;
  color: #fff;
  z-index: 100;
  font-family: "Libre Franklin", sans-serif;
  overflow: hidden;
`;

export const DeleteButtonFav = styled.button`
  font-family: "Libre Franklin", sans-serif;
  background: transparent;
  border: 2px #ff7c7c solid;
  color: #fff;
  cursor: pointer;
  height: 2rem;
  z-index: 100;
  grid-row: 4 / span 1;
  grid-column: 2 / span 1;
  :hover {
    background: #ff7c7c;
    transform: translate(0, -3px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 8px 6px -6px black;
  }
`;

export const OneFavourite = styled.div`
  width: 70%;
  height: 25rem;
  background: #333;
  // margin-left: 0.5rem;
  // margin-right: 0.5rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 10% 15% 60% 10% 5%;
  justify-content: center;
  align-content: top;
  // border: 1px solid #d35400;
  border-radius: 10px;
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
