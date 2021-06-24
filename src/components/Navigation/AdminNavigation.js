import React from "react";
import { useLocation } from "react-router-dom";
import routes from "routes";

function AdminNavigation() {
  let location = useLocation();
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "PIBA Foundation";
  };

  return (
    <div className="admin-navbar-container">
      <div className="admin-navbar-brand">{getBrandText()}</div>
      <div>Admin Navbar</div>
      <div>Notifications</div>
      <div>Settings</div>
    </div>
  );
}

export default AdminNavigation;
