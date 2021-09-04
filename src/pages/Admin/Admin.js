import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "../../style/GlobalStyle";
import Navbar from "../../components/navbar/Navbar";
import { Buttons, Wrapper } from "./StAdmin";
import Capture from "../capture/Capture";
import Compro from "../compro/Compro";
import Uiux from "../uiux/Uiux";
import Webinar from "../webinar/Webinar";
import Workshop from "../workshop/workshop";
import { RolesContext } from "../../config/Auth";
import CheckSession from "../../config/CheckSession";
import { useHistory, Redirect } from "react-router";
import Logout from "../Logout/Logout";



const Admin = () => {
  let parsedJsonData = localStorage.getItem("h0_s7yf8q7g398fh924sss");
  const history = useHistory()
  useEffect(() => {
    if (!parsedJsonData) {
      history.push("/login")
    }
  },[])
  return (
    <>
      <GlobalStyle />
        <Wrapper>
          <Navbar />
          <Switch>     
             
            <Route path="/ctf" component={Capture} />
            <Route path="/cp" component={Compro} />
            <Route path="/uiux" component={Uiux} />
            <Route path="/webinar" component={Webinar} />
            <Route path="/workshop" component={Workshop} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Wrapper>
    </>
  );
};

export default Admin;
