import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavBar from "./components/layouts/AppNavBar";
import Dashboard from "./components/layouts/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <AppNavBar />
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
