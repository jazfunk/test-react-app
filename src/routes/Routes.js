import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Private from "./Private";

const loggedIn = true;

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route
          path="/private"
          exact
          render={() =>
            loggedIn ? <Private /> : <Redirect to={{ pathname: "/login" }} />
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
