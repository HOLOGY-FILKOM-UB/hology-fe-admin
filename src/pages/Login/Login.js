import React from "react";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";
import {Title, Wrapper} from './StLogin'

const Login = () => {
  return (
    <Wrapper>
      <Title>Admin Panel</Title>
      <FieldInput label="Email" type="email" />
      <FieldInput label="Password" type="password" />
      <Button content="Let me in" />
    </Wrapper>
  );
};

export default Login;
