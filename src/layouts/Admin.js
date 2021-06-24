import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";
import { Sidebar } from "components";
import { AdminNavigation } from "components";

function Admin() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return <Route path={prop.layout + prop.path} key={key} render={(props) => <prop.component {...props} />} />;
      } else {
        return null;
      }
    });
  };
  return (
    <div className="wrapper">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="main-navbar">
          <AdminNavigation />
        </div>
        <Switch>{getRoutes(routes)}</Switch>
      </div>
    </div>
  );
}

export default Admin;
