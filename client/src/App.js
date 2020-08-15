import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Navbar";
import Landing from "./components/pages/Landing";
import Games from "./components/pages/Games";
import Game from "./components/pages/Game";

import GamesState from "./context/games/GamesState";

import "./App.css";

const App = () => {
  return (
    <GamesState>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/games" component={Games} />
            <Route path="/games/:id" component={Game} />
          </Switch>
        </div>
      </Router>
    </GamesState>
  );
};

export default App;
