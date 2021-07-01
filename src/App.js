import React from "react";
import { Redirect, Route } from "react-router-dom";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

import { useAuth } from "./context/AuthContext";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faDog,
  faUserClock,
  faCalendarPlus,
  faHandsHelping,
  faCog,
  faBars,
  faWrench,
  faPlusCircle,
  faUserAlt,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

library.add(faHome, faDog, faUserClock, faCalendarPlus, faHandsHelping, faCog, faBars, faWrench, faPlusCircle, faUserAlt, faTimesCircle, faEye, faEyeSlash);

function App() {
  let route;
  const { currentUser } = useAuth();
  if (currentUser) {
    route = <Redirect from="/" to="/admin/dashboard" />;
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
