import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import UserContext from "../../utils/UserContext";

function PrivateRoute({ component: Component, ...rest }) {
  const userContext = useContext(UserContext);

  const { isAuthenticated } = userContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
