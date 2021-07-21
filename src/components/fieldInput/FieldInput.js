import React from "react";
import {Wrapper, Label, Input} from './StFieldInput'

const FieldInput = ({ handleChange, label, placeHolder = "ketik di sini...", ...props }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        placeholder={placeHolder}
        onChange={handleChange}
        {...props}
      />
    </Wrapper>
  );
};

export default FieldInput;
