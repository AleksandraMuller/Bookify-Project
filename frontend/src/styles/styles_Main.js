import styled from "styled-components";

//MAIN COMPONENT
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #eee;
`;

export const Video = styled.video`
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Middle = styled.div`
  position: absolute;
  top: 40%;
  margin-top: -40px;
  text-align: center;
  width: 100%;
`;

export const HeaderQuote = styled.h3`
  color: white;
  font-family: "Open Sans";
  letter-spacing: 4px;
  // margin-left: 4rem;
  // margin-right: 4rem;
  margin: 0 auto;
  font-family: "Libre Franklin", sans-serif;
  font-size: 0.8rem;
  background: #222;
  opacity: 0.9;
  width: 80%;
  overflow: hidden;
  padding: 1rem;
  text-align: center;
  margin-bottom: 4rem;
  @media (min-width: 900px) {
    font-size: 1.3rem;
    width: 50%;
  }
`;

export const HeaderInvite = styled.h2`
  color: white;
  font-family: "Open Sans";
  letter-spacing: 2px;
  font-family: "Libre Franklin", sans-serif;
  font-size: 1.5rem;

  @media (min-width: 600px) {
    font-size: 2.1rem;
    width: 60%;
    margin: 0 auto;
  }
`;

export const Span = styled.span`
  display: block;
  font-size: 0.5rem;
  margin-top: 0.7rem;
  @media (min-width: 600px) {
    font-size: 0.7rem;
    margin-top: 1rem;
  }
`;

export const MainRegisterButton = styled.button`
  border: none;
  display: block;
  text-align: center;
  opacity: 0.9;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: #222;
  padding: 17px 60px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  letter-spacing: 4px;
  font-family: "Libre Franklin", sans-serif;
  margin-top: 2rem;

  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    // background: #78c7d2;
    background: #d35400;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }
  :hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
  @media (min-width: 600px) {
    margin-top: 3rem;
  }
`;

export const MainRegisterButtonText = styled.span`
  z-index: 100;
  position: relative;
`;

export const Navbar = styled.div`
  position: absolute;
  top: 5%;
  margin-top: -5px;
  text-align: right;
  right: 1rem;
  width: 100%;
  @media (min-width: 600px) {
    right: 3rem;
  }
`;

export const RegisterButton = styled.button`
  background: #d35400;
  border: 2px #d35400 solid;
  color: #fff;
  padding: 1rem;
  width: 8rem;
  margin-left: 1rem;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 2px;
  :hover {
    background: transparent;
    color: #d35400;
    box-shadow: 0 8px 6px -6px black;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;

export const LoginButton = styled.button`
  background: transparent;
  border: 2px #d35400 solid;
  color: #d35400;
  padding: 1rem;
  width: 8rem;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 2px;
  :hover {
    background: #d35400;
    box-shadow: 0 8px 6px -6px black;
    color: #fff;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;
