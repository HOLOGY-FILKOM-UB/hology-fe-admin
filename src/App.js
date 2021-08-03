import React, { useContext, useState } from "react";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./config/PrivateRoute";
import { AuthContext, RolesContext } from "./config/Auth";

function App() {
  const [login, setLogin] = useState(false)
  const [role, setRole] = useState()

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <AuthContext.Provider value={[login, setLogin]}>
          <RolesContext.Provider value={[role, setRole]}>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Admin} />
          </RolesContext.Provider>
        </AuthContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
