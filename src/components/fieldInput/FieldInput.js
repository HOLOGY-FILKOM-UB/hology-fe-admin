import React from "react";
import { Wrapper, Wrapper2, Label, Label2, Input } from './StFieldInput'

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

const FieldInput2 = ({ handleChange, label, ...props }) => {
  return (
    <Wrapper>
      <Label>JENIS WORKSHOP</Label>
      <center>
      <Wrapper2>
        <Label2>{label} 1</Label2>
        <Input name="workshop" value="1" defaultChecked
          placeholder="ketik di sini..."
          onChange={handleChange}
          {...props}
        />
      </Wrapper2>
      <Wrapper2>
        <Label2>{label} 2</Label2>
        <Input name="workshop" value="2"
          placeholder="ketik di sini..."
          onChange={handleChange}
          {...props}
        />
      </Wrapper2>
      </center>
    </Wrapper>
  );
};

export { FieldInput, FieldInput2 }
