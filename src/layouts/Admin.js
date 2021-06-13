import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";
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
    <div style={{ display: "flex" }}>
      <div style={{ height: "100vh", marginRight: "1em" }}>
        <AdminNavigation />
      </div>
      <div style={{ margin: "1em" }}>
        <Switch>{getRoutes(routes)}</Switch>
      </div>
    </div>
  );
}

export default Admin;
