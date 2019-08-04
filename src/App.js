import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavBar from "./components/layouts/AppNavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <AppNavBar />
        </header>
        <div className="container">
          <h1>Hello</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
