import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Nav from "./components/layout/Navbar";
import Alerts from "./components/layout/Alerts";
//Pages
import Landing from "./components/pages/Landing";
import Games from "./components/pages/Games";
import Game from "./components/pages/Game";
import NewGame from "./components/pages/NewGame";
import EditGame from "./components/pages/EditGame";
import PrivateRoute from "./components/routing/PrivateRoute";
//Auth Pages
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//States
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
              <Alerts />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/newgame" component={NewGame} />
                <PrivateRoute exact path="/games" component={Games} />
                <PrivateRoute exact path="/games/:_id" component={Game} />
                <PrivateRoute
                  exact
                  path="/games/:_id/edit"
                  component={EditGame}
                />
              </Switch>
            </div>
          </Router>
        </GamesState>
      </AlertState>
    </AuthState>
  );
};

export default App;
