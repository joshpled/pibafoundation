import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import routes from "routes";
import { Sidebar } from "components";
import { AdminNavigation } from "components";
import generateKey from "helper/generateKey";

import { useAuth } from "../context/AuthContext";
import { getEmployeeQuery } from "gqlQueries/employeeQueries";
import { useQuery } from "@apollo/client";

function Admin() {
  const { currentUser } = useAuth();
  const { data } = useQuery(getEmployeeQuery, {
    variables: { email: currentUser && currentUser.email },
  });
  let location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const getRoutes = (routes) => {
    return routes.map((prop) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            key={generateKey(prop.component)}
            render={(props) => <prop.component {...props} userInfo={data && data.getEmployee} />}
          />
        );
      } else {
        return null;
      }
    });
  };
  const handleShowMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    sessionStorage.setItem("path", location.pathname);
  });
  return (
    <div className="wrapper">
      <div className="sidebar-container">
        <Sidebar showMenu={openMenu} permissions={data && data.getEmployee} />
      </div>
      <div className="main-content">
        <div className="main-navbar">
          <AdminNavigation handleShow={handleShowMenu} userInfo={data && data.getEmployee} />
        </div>
        <Switch>{getRoutes(routes)}</Switch>
      </div>
    </div>
  );
}

export default Admin;
