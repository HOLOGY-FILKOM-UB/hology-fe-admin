import styled from "styled-components";
import * as palette from "../../style/Palette";
// import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding-right: 2rem;
  width: 100%;
`;

export const Text = styled.h1`
  margin: 2rem 0 3rem 0;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 1rem;
    max-width: 1rem;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
    max-width: 1rem;
  }
`;

