import React from "react";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./config/PrivateRoute";
import { AuthContext, RolesContext } from "./config/Auth";

function App() {
  return (
    <AuthContext.Provider value={true}>
      <RolesContext.Provider value={true}>
        <Router>
          <GlobalStyle />
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Admin} />
          </Switch>
        </Router>
      </RolesContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
