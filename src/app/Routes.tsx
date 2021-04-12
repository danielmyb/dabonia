import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../components/MainPage";
import Contact from "../components/general/Contact";
import Login from "../components/login/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact={true} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Login} />
      <Route path="/" component={MainPage} />
    </Switch>
  );
};

export default Routes;
