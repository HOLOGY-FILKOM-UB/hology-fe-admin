import styled from "styled-components";
import * as palette from "../../style/Palette";
// import { Link } from "react-router-dom";

export const Buttons = styled.button`
  padding: 15px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: ${palette.headerS};
  font-family: "Titillium Web", sans-serif;
  text-transform: uppercase;
  border-bottom: 5px solid #265c6b;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-width: 200px;
  margin: 1rem 1rem 2rem 1rem;

  color: ${palette.secondaryColor};
  background-color: ${palette.primaryColor};
  &:hover,
  :active {
    color: white;
    background-color: ${palette.primaryColor};
    border-bottom: 5px solid white;
    box-shadow: none;
  }
`;
