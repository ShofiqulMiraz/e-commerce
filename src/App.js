import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const Hats = (props) => (
  <div>
    <h1>hello world!</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
