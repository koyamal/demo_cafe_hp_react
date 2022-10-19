import { VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { TopPage } from "../components/pages/TopPage";
import { MenuPage } from "../components/pages/MenuPage";
import { InfoPage } from "../components/pages/InfoPage";
import { Header } from "../components/organisms/layout/Header";
import { ShowMenu } from "../components/organisms/menu/ShowMenu";

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
              <Route exact={true} path={`${url}/`}>
                <MenuPage />
              </Route>
              <Route exact={true} path={`${url}/drink`}>
                <Header />
                <ShowMenu typeMenu="drink" />
              </Route>
              <Route exact={true} path={`${url}/food`}>
                <Header />
                <ShowMenu typeMenu="food" />
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
