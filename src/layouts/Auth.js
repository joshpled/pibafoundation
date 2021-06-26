import React from "react";

import { Route, Switch } from "react-router-dom";
import routes from "routes";
import { AuthNavigation } from "components";

function Auth() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return <Route path={prop.layout + prop.path} key={key} render={(props) => <prop.component {...props} />} />;
      } else {
        return null;
      }
    });
  };
  return (
    <div className="auth-wrapper">
      <AuthNavigation />
      <div className="auth-body">
        <Switch>{getRoutes(routes)}</Switch>
      </div>
      <div className="auth-footer">
        <div id="auth-footer-left">
          Made with &#9829; by <a href="https://www.joshuapleduc.com">Joshua Perez Leduc</a>
        </div>
        <div id="auth-footer-right">&#169; Copyright 2021</div>
      </div>
    </div>
  );
}

export default Auth;
