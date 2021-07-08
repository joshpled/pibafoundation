import React from "react";
import { Redirect, Route } from "react-router-dom";
import "./context/icons";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

import { useAuth } from "./context/AuthContext";

function App() {
  let route;
  const { currentUser } = useAuth();
  if (currentUser) {
    if (sessionStorage.getItem("path")) {
      route = <Redirect from="/" to={sessionStorage.getItem("path")} />;
    } else {
      route = <Redirect from="/" to="/admin/dashboard" />;
    }
  } else {
    route = <Redirect from="/" to="/auth/login" />;
  }
  return (
    <>
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/admin" render={(props) => <Admin {...props} />} />
      {route}
    </>
  );
}

export default App;
