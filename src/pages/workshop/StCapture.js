import styled from "styled-components";
import * as palette from "../../style/Palette";
// import { Link } from "react-router-dom";
import '../../style/index.css'

export const Wrapper = styled.div`
  padding-right: 2rem;
  width: 100%;
  min-width: 768px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.h1`
  font-family: "Poppins";
  margin: 2rem 0 2rem 0;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #4C2DB7;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-left: 2rem;
  td, th {
    border: 1px solid #dddddd;
    padding: 0.3rem;
    max-width: 1rem;
    font-size: 14px;
    text-align: center;
    font-family: 'Open Sans';
  }

  tr:nth-child(1) {
    background-color: #000088;
    color: #FFFFFF;
    max-width: 1rem;
    text-align: center;
  }

  tr:nth-child(2n+3) {
    background-color: #b283ff;
    max-width: 1rem;
  }
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
