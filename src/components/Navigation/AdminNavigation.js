import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import routes from "routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdminNavigation({ handleShow }) {
  const [gear, setgear] = useState(false);
  let location = useLocation();
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "PIBA Foundation";
  };

  const handleMouseOver = () => {
    setgear((prevState) => !prevState);
  };

  return (
    <div className="admin-navbar-container">
      <div className="admin-navbar-brand">
        <FontAwesomeIcon icon="bars" size="lg" className="admin-navbar-burgermenu" onClick={handleShow} /> {getBrandText()}
      </div>
      <div className="admin-navbar-links">
        <div className={`admin-navbar-settings ${gear ? "rotate-center" : ""}`} onMouseOver={handleMouseOver}>
          <FontAwesomeIcon icon="cog" size="lg" />
        </div>
      </div>
    </div>
  );
}

export default AdminNavigation;
