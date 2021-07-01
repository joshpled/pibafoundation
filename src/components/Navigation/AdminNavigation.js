import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import routes from "routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthContext";
import { Alert, Dropdown } from "react-bootstrap";
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
      <Dropdown as="div" className="admin-navbar-links">
        <Dropdown.Toggle variant="default">
          <div className={`admin-navbar-settings ${gear ? "rotate-center" : ""}`} onMouseOver={handleMouseOver}>
            <FontAwesomeIcon icon="cog" size="lg" />
            <div></div>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight aria-labelledby="navbarDropdownMenuLink">
          <Dropdown.Item onClick={() => history.push("/admin/dogs")}>
            <i className="nc-icon nc-settings-90"></i>
            Settings
          </Dropdown.Item>
          <div className="divider"></div>
          <Dropdown.Item className="text-danger" onClick={handleLogout}>
            <i className="nc-icon nc-button-power"></i>
            Log out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default AdminNavigation;

//onClick={handleLogout}
