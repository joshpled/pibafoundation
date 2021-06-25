import React from "react";
import { Redirect, Route } from "react-router-dom";
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faDog, faUserClock, faCalendarPlus, faHandsHelping, faCog, faBars, faWrench, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faDog, faUserClock, faCalendarPlus, faHandsHelping, faCog, faBars, faWrench, faPlusCircle);

function App() {
  let route;
  if (true) {
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
