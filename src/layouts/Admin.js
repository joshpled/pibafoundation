import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";
import Navigation from "components/Navigation";

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
    <>
      <Navigation />
      <Switch>{getRoutes(routes)}</Switch>
    </>
  );
}

export default Admin;
