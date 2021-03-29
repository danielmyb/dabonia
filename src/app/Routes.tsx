import React from "react";
import { Switch, Route } from "react-router-dom";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import MainPage from "../components/MainPage";
import Login from "../components/login/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact={true} />
      <Route path="/c1" component={Content1} />
      <Route path="/c2" component={Content2} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Login} />
      <Route path="/" component={MainPage} />
    </Switch>
  );
};

export default Routes;
