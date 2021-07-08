import React from "react";
import {Wrapper, Label, Input} from './StFieldInput'

const FieldInput = ({ handleChange, label, ...props }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        placeholder="ketik di sini..."
        onChange={handleChange}
        {...props}
      />
    </Wrapper>
  );
};

export default FieldInput;
