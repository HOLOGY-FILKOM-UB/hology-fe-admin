import styled from "styled-components";
import * as palette from "../../style/Palette";
// import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${palette.headerR};
  font-weight: ${palette.bold};
  color: #303030;
  margin-bottom: 4rem;
`;
