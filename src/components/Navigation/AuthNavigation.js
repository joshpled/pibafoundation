import React from "react";
import routes from "routes";
import { Link } from "react-router-dom";

function AuthNavigation() {
  const createRoutes = (routes) => {
    return routes.map(({ name, path, layout }, key) => {
      if (layout === "/auth") {
        return (
          <li key={key} style={{ marginBottom: "1em" }}>
            <Link to={layout + path}>{name}</Link>
          </li>
        );
      } else {
        return null;
      }
    });
  };
  return <ul>{createRoutes(routes)}</ul>;
}

export default AuthNavigation;
