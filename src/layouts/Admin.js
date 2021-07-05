import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";
import { Sidebar } from "components";
import { AdminNavigation } from "components";
import generateKey from "helper/generateKey";
function Admin() {
  const [openMenu, setOpenMenu] = useState(false);
  const getRoutes = (routes) => {
    return routes.map((prop) => {
      if (prop.layout === "/admin") {
        return <Route path={prop.layout + prop.path} key={generateKey(prop.component)} render={(props) => <prop.component {...props} />} />;
      } else {
        return null;
      }
    });
  };
  const handleShowMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };
  return (
    <div className="wrapper">
      <div className="sidebar-container">
        <Sidebar showMenu={openMenu} />
      </div>
      <div className="main-content">
        <div className="main-navbar">
          <AdminNavigation handleShow={handleShowMenu} />
        </div>
        <Switch>{getRoutes(routes)}</Switch>
      </div>
    </div>
  );
}

export default Admin;
