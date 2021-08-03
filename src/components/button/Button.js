import React from "react";
import { Buttons } from "./StButton";

const Button = ({ content, variant="primary", onClicked }) => {
  return (
    <Buttons onClick={onClicked} variant={variant}>
      {content}
    </Buttons>
  );
};

export default Button;
