import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../components/MainPage";
import Contact from "../components/general/Contact";
import Login from "../components/login/Login";
import Characters from "../components/characters/Characters";
import Topics from "../components/topics/Topics";
import Affixes from "../components/affixes/affixes";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact={true} />
      <Route path="/contact" component={Contact} />
      <Route path="/characters" component={Characters} />
      <Route path="/topics" component={Topics} />
      <Route path="/affixes" component={Affixes} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Login} />
      <Route path="/" component={MainPage} />
    </Switch>
  );
};

export default Routes;
