import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Navbar";
import Landing from "./components/pages/Landing";
import Games from "./components/pages/Games";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/games" component={Games} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
