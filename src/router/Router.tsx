import { VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { TopPage } from "../components/pages/TopPage";
import { MenuPage } from "../components/pages/MenuPage";

export const Router: VFC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <TopPage />
      </Route>
      <Route exact path="/menu">
        <MenuPage />
      </Route>
      <Route exact path="/test">
        <div>test</div>
      </Route>
    </Switch>
  );
};
