import { VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { TopPage } from "../components/pages/TopPage";
import { MenuPage } from "../components/pages/MenuPage";
import { InfoPage } from "../components/pages/InfoPage";

export const Router: VFC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <TopPage />
      </Route>
      <Route
        path="/menu"
        render={({ match: { url } }) => {
          return (
            <Switch>
              <Route key={"01"} exact={true} path={`${url}/`}>
                <MenuPage />
              </Route>
              <Route key={"02"} exact={true} path={`${url}/drink`}>
                "drink"
              </Route>
              <Route key={"03"} exact={true} path={`${url}/food`}>
                "food"
              </Route>
            </Switch>
          );
        }}
      />
      <Route exact path="/info">
        <InfoPage />
      </Route>
    </Switch>
  );
};
