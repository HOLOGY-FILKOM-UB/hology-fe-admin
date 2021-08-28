import React, { useEffect, useContext, useState } from "react";
import {FieldInput} from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";
import { Buttons, Title, Wrapper } from './StLogin'
import { AuthContext, RolesContext } from "../../config/Auth";
import { useHistory, Redirect } from "react-router";
import Api from "../../config/Api";
import { StoreJwt } from "../../config/SessionJWT";
import CheckSession from "../../config/CheckSession";


const Login = () => {
  let parsedJsonData = localStorage.getItem("h0_s7yf8q7g398fh924");
  const history = useHistory()
  useEffect(() => {
    if (parsedJsonData) {
      history.push("/")
    } else {
      history.push("/login")
    }
  },[])

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const [login, setLogin] = useContext(AuthContext)
  const [role, setRole] = useContext(RolesContext)


  const validateLogin = () => {
    Api.post('/api/admin/signin/', credentials)
      .then(res => {
        console.log(res)
        setLogin(true)
        setRole("Sekben")
        let jwtToken = res.data.message.token;
        StoreJwt(jwtToken);
        history.push('/')
      })
      .catch(e => {
        console.log(e)
        alert('Email / Password yang dimasukkan salah!')
      })
  }

  return (
    <Wrapper>
      <Title>Competition Panel</Title>
      <FieldInput label="Email" type="email" handleChange={e => setCredentials({ ...credentials, email: e.target.value })} />
      <FieldInput label="Password" type="text" handleChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <Button content="Login" variant="primary" onClicked={e => { validateLogin() }} />
    </Wrapper>
  );
};

export default Login;
