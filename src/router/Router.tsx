import { VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { TopPage } from "../components/pages/TopPage";

export const Router: VFC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <TopPage />
      </Route>
      <Route exact path="/menu">
        menu
      </Route>
      <Route exact path="/test">
        <div>test</div>
      </Route>
    </Switch>
  );
};
