import styled from "styled-components";
import * as palette from "../../style/Palette";
// import { Link } from "react-router-dom";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: white;
  width: 53rem;
  border-radius: 1rem;
  margin: 2rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
`;
