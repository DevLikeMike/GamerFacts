import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Nav from "./components/layout/Navbar";
//Pages
import Landing from "./components/pages/Landing";
import Games from "./components/pages/Games";
import Game from "./components/pages/Game";
import NewGame from "./components/pages/NewGame";
import PrivateRoute from "./components/routing/PrivateRoute";
//Auth Pages
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import GamesState from "./context/games/GamesState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <GamesState>
          <Router>
            <div className="App">
              <Nav />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/games" component={Games} />
                <Route path="/games/:_id" component={Game} />
                <Route path="/newgame" component={NewGame} />
              </Switch>
            </div>
          </Router>
        </GamesState>
      </AlertState>
    </AuthState>
  );
};

export default App;
