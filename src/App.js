import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import UserContext from "./utils/UserContext";

import PrivateRoute from "./components/routes/PrivateRoute";

import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Preloading from "./components/Preloading";

function App() {
  const userContext = useContext(UserContext);

  const { loading } = userContext;

  return loading ? (
    <Preloading />
  ) : (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
