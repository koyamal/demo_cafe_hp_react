import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>hello</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
