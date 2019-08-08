import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";

import { Provider } from "react-redux";
import store from "./store";

import AppNavBar from "./components/layouts/AppNavBar";
import Dashboard from "./components/layouts/Dashboard";
import AddClient from "./components/client/AddClient";
import ClientDetails from "./components/client/ClientDetails";
import EditClientDetails from "./components/client/EditClientDetails";
import Login from "./components/auth/Login";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header>
            <AppNavBar />
          </header>
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                component={UserIsAuthenticated(Dashboard)}
              />
              <Route
                exact
                path="/client/add"
                component={UserIsAuthenticated(AddClient)}
              />
              <Route
                exact
                path="/client/details/:id"
                component={UserIsAuthenticated(ClientDetails)}
              />
              <Route
                exact
                path="/client/edit/:id"
                component={UserIsAuthenticated(EditClientDetails )}
              />
              <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
