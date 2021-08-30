import React, { useContext, useState } from "react";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import GlobalStyle from "./style/GlobalStyle";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./config/PrivateRoute";
import { AuthContext, RolesContext } from "./config/Auth";
import CheckSession from "./config/CheckSession";

function App() {
  const [login, setLogin] = useState(false)
  const [role, setRole] = useState()

  return (
      <GlobalStyle />
      <AuthContext.Provider value={[login, setLogin]}>
        <RolesContext.Provider value={[role, setRole]}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Admin} />
          </Switch>
        </RolesContext.Provider>
      </AuthContext.Provider>
  );
}

export default App;
