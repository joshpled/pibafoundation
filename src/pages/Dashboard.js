import React from "react";
import { DashboardCard } from "components";

function Dashboard() {
  return (
    <div>
      <div className="dashboard-card">
        <DashboardCard />
        <DashboardCard />
      </div>
    </div>
  );
}

export default Dashboard;
