import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Header } from "./components/organisms/layout/Header";
export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
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
