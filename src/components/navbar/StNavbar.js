import styled from "styled-components";
import { Link } from "react-router-dom";
import * as palette from "../../style/Palette";

export const Wrapper = styled.div`
  background-color: ${palette.terneryColor};
  font-size: ${palette.headerS};
  padding-top: 10rem;
  margin-right: 2rem;
`;

export const Links = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #303030;
  font-weight: ${palette.medium};
`;

export const Ul = styled.ul`
text-align: center;
padding: 0 1rem 0 1rem;
`;

export const Li = styled.li`
margin-bottom: 2rem;
`;
