import React from "react";
import Topnav from "../components/common/Topnav";
import Sidebar from "../components/common/Sidebar";
import Main from "../components/dashboard/Main";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Topnav />
        <Main/>
      </div>
    </div>
  );
}

export default Dashboard;
