import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import AppNavBar from "./components/layouts/AppNavBar";
import Dashboard from "./components/layouts/Dashboard";
import AddClient from "./components/client/AddClient";
import ClientDetails from "./components/client/ClientDetails";
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
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/client/add" component={AddClient} />
              <Route exact path="/client/details/:id" component={ClientDetails} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
