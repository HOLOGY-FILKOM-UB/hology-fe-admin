import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "../../style/GlobalStyle";
import Navbar from "../../components/navbar/Navbar";
import { Wrapper } from "./StAdmin";
import Capture from "../capture/Capture";
import Compro from "../compro/Compro";
import Uiux from "../uiux/Uiux";
import Webinar from "../webinar/Webinar";
import { RolesContext } from "../../config/Auth";

const Admin = () => {
  const [role, setRole] = useContext(RolesContext)
  return (
    <Router>
      <GlobalStyle />
      <RolesContext.Provider value={[role, setRole]}>
      <Wrapper>
        <Navbar />
        <Switch>      
          <Route path="/ctf" component={Capture} />
          <Route path="/cp" component={Compro} />
          <Route path="/uiux" component={Uiux} />
          <Route path="/webinar" component={Webinar} />
        </Switch>
      </Wrapper>
      </RolesContext.Provider>
    </Router>
  );
};

export default Admin;
