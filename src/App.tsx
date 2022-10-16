import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { TopPage } from "./components/pages/TopPage";
export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </ChakraProvider>
  );
}
