import React from "react";
import { DashboardCard } from "components";
function Dashboard() {
  return (
    <div>
      <div className="dashboard-card">
        <DashboardCard icon="wrench" title="Most recent Dog" detailsData="Something will go here" />
        <DashboardCard icon="bell" title="Most recent Dog" detailsData="Something will go here" />
      </div>
    </div>
  );
}

export default Dashboard;
