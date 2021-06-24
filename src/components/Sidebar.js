import React from "react";
import routes from "routes";
import { Link } from "react-router-dom";
import favicon from "../assets/images/favicon-48.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  const createRoutes = (routes) => {
    return routes.map(({ name, path, layout, icon }, key) => {
      if (layout === "/admin") {
        return (
          <li key={key} className="sidebar-navlink">
            <FontAwesomeIcon icon={icon} className="sidebar-navlink-icon" />
            <Link to={layout + path}>{name}</Link>
          </li>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-icon">
          <img src={favicon} alt="icon" />
        </div>
        <div className="sidebar-header-brand">
          <h1>PIBA Foundation</h1>
        </div>
      </div>

      <div className="sidebar-horizontal"></div>
      <div className="sidebar-links">
        <p>{createRoutes(routes)}</p>
      </div>
    </div>
  );
}

export default Sidebar;
