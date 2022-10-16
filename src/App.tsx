import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact="true" path="/">
          <div>hello</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
