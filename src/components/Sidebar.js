import React from "react";
import routes from "routes";
import { Link, useLocation } from "react-router-dom";
import favicon from "../assets/images/favicon-48.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let year = new Date();

function Sidebar({ showMenu }) {
  let location = useLocation();
  const createRoutes = (routes) => {
    return routes.map(({ name, path, layout, icon }, key) => {
      if (layout === "/admin") {
        return (
          <Link key={key} to={layout + path} style={{ textDecoration: "none" }}>
            <li className={`sidebar-navlink ${activeRoute(layout + path) ? "active" : ""}`}>
              <FontAwesomeIcon icon={icon} className="sidebar-navlink-icon" size="lg" />
              {name}
            </li>
          </Link>
        );
      } else {
        return null;
      }
    });
  };
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
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

      <div className="sidebar-footer">Copyright {year.getFullYear()}</div>
    </div>
  );
}

export default Sidebar;
