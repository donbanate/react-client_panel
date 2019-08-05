import React, { Component } from "react";
import Clients from "../client/Clients";
import Sidebar from "../layouts/Sidebar";

class Dashboard extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-md-10">
          <Clients />
        </div>
        <div className="col-md-2">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Dashboard;
