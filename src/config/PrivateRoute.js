import React, { useContext, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext, useAuth } from "./Auth";

function PrivateRoute({ component: Component, ...rest }) {
  const [login, setLogin] = useContext(AuthContext)
  const isLoggedIn = login
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
