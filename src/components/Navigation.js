import React from "react";
import { Link } from "react-router-dom";
import routes from "routes";
import { useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Link to={prop.layout + prop.path} key={key} className="nav-link">
            {prop.name}
          </Link>
        );
      } else {
        return null;
      }
    });
  };
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">{createLinks(routes)}</nav>;
}

export default Navigation;
