import styled from "styled-components";
import * as palette from "../../style/Palette";
// import { Link } from "react-router-dom";

// export const Wrapper = styled.div`
// color: ${palette.terneryColor};
// background-color: ${palette.backgroundBase2};
// font-size: ${palette.paragraphHeader};
// font-weight: ${palette.extraLight};
// `

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

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
