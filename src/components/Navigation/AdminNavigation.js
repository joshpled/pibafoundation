import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import routes from "routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "react-bootstrap";
function AdminNavigation({ handleShow }) {
  const [gear, setgear] = useState(false);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  let location = useLocation();
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "PIBA Foundation";
  };
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/auth/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const handleMouseOver = () => {
    setgear((prevState) => !prevState);
  };

  return (
    <div className="admin-navbar-container">
      <div className="admin-navbar-brand">
        <FontAwesomeIcon icon="bars" size="lg" className="admin-navbar-burgermenu" onClick={handleShow} /> {getBrandText()}
      </div>

      {error && <Alert variant="danger">{error}</Alert>}
      {currentUser && currentUser.email}
      <div className="admin-navbar-links">
        <div className={`admin-navbar-settings ${gear ? "rotate-center" : ""}`} onMouseOver={handleMouseOver} onClick={handleLogout}>
          <FontAwesomeIcon icon="cog" size="lg" />
        </div>
      </div>
    </div>
  );
}

export default AdminNavigation;
