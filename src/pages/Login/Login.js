import React, { useState } from "react";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";
import { Title, Wrapper } from "./StLogin";
import { useAuth, useRole } from "../../config/Auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [Login, SetLogin] = useState(false);
  const { setAuthTokens } = useAuth();
  const { setRole } = useRole();

  const validateLogin = (email, password) => {
    if (email === "a" && password === "a") {
      SetLogin(true);
      setRole("Sekben");
      console.log("ini sekben");
    } else if (email === "a" && password === "b") {
      SetLogin(true);
      setRole("Inti");
      console.log("ini inti");
    } else {
      alert("Email atau Password Salah!");
    }
  };

  return (
    <Wrapper>
      <Title>Admin Panel</Title>
      <FieldInput
        label="Email"
        type="email"
        handleChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <FieldInput
        label="Password"
        type="text"
        handleChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Link to={Login ? "/" : "/login"}>
        <Button
          content="Login"
          variant="primary"
          onClicked={() => validateLogin(email, password)}
        />
      </Link>
    </Wrapper>
  );
};

export default Login;
