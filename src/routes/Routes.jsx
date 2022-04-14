import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catelog from "../pages/Catelog";

function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catelog" component={Catelog} />
    </Switch>
  );
}

export default Routes;
