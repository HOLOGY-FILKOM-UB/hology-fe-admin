import styled from "styled-components";
import * as palette from "../../style/Palette"
// import { Link } from "react-router-dom";

export const Wrapper = styled.div`
margin-top: 7rem;
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.h1`
  font-size: ${palette.headerL};
  font-weight: ${palette.bold};
  font-family: 'Poppins';
  color: #000088;
  margin-bottom: 4rem;
`

export const Buttons = styled.button`
  padding: 10px 15px;
  outline: none;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-width: 200px;
  margin-bottom: 2rem;

  color: #FFFFFF;
  background-color: #4C2DB7;
  &:hover,
  :active {
    color: #000000;
    background-color: #E5B2FF;
    box-shadow: none;
  }
`;