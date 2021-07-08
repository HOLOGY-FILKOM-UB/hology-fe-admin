import React, { useContext, useState } from "react";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";
import {Title, Wrapper} from './StLogin'
import { AuthContext, RolesContext } from "../../config/Auth";
import { useHistory, Redirect } from "react-router";

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [login, setLogin] = useContext(AuthContext)
  const [role, setRole] = useContext(RolesContext)
  const history = useHistory()

  const validateLogin = (email, password) => {
    if (email === "a" && password === "a") {
      setLogin(true)
      setRole("Sekben")
      history.push('/')
    } else if (email === "a" && password === "b") {
      setLogin(true)
      setRole("Inti")
      history.push('/')
    } else {
      alert("Email atau Password Salah!")
    }
  }

  return (
    <Wrapper>
      <Title>Admin Panel</Title>
      <FieldInput label="Email" type="email" handleChange={(e) => {setEmail(e.target.value)}} />
      <FieldInput label="Password" type="text" handleChange={(e) => {setPassword(e.target.value)}} />
      <Button content="Login" variant="primary" onClicked={() => validateLogin(email, password)}/>
    </Wrapper>
  );
};

export default Login;
