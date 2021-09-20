import styled from "styled-components";
import * as palette from "../../style/Palette";
// import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
export const Wrapper2 = styled.div`
  display:flex;
`;

export const Label2 = styled.label`
  display: block;
  color: #303030;
  font-weight: ${palette.semiBold};
  margin-bottom: 0.75rem;
  margin-right: 0.75rem;
  font-size: ${palette.headerS};
`;
export const Label = styled.label`
  display: block;
  color: #303030;
  font-weight: ${palette.semiBold};
  margin-bottom: 0.75rem;
  font-size: ${palette.headerS};
`;

export const Input = styled.input`
  padding: 12px 16px;
  outline: none;
  color: #303030;
  font-weight: ${palette.light};
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.16);
  border: 1.5px solid rgba(255, 255, 255, 0.16);
  border-radius: 10px;
  border-bottom: 5px solid ${palette.primaryColor};
  transition: all 0.2 ease-in-out;
  &::placeholder {
    color: rgba(5, 5, 5, 0.5);
  }
  &:focus {
    border-color: ${palette.primaryColor};
  }
  &:active {
    border-color: ${palette.primaryColor};
  }
`;
