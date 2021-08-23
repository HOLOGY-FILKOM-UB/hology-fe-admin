import React, { useContext, useState } from "react";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";
import {Buttons, Title, Wrapper} from './StLogin'
import { AuthContext, RolesContext } from "../../config/Auth";
import { useHistory, Redirect } from "react-router";
import Api from "../../config/Api";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const [login, setLogin] = useContext(AuthContext)
  const [role, setRole] = useContext(RolesContext)
  const history = useHistory()

  const validateLogin = () => {
    Api.post('/api/admin/signin/', credentials)
    .then(res => {
      console.log(res)
      setLogin(true)
      setRole("Sekben")
    })
    .catch(e => {
      // console.log(e)
      alert('Email / Password yang dimasukkan salah!')
    }) 
  }

  return (
    <Wrapper>
      <Title>Competition Panel</Title>
      <FieldInput label="Email" type="email" handleChange={e => setCredentials({...credentials, email: e.target.value})} />
      <FieldInput label="Password" type="text" handleChange={(e) => setCredentials({...credentials, password: e.target.value})} />
      <Button content="Login" variant="primary" onClicked={e => {validateLogin()}}/>
    </Wrapper>
  );
};

export default Login;
