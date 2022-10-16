import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Header } from "./components/organisms/layout/Header";
export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}
