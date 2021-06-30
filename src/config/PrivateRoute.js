import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./Auth";

function PrivateRoute({ component: Component, ...rest }) {
  const test = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        test ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
