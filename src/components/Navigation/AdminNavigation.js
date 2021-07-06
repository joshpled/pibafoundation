import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import routes from "routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthContext";
import { Alert, Dropdown } from "react-bootstrap";
function AdminNavigation({ handleShow }) {
  const [gear, setgear] = useState(false);
  const [bell, setbell] = useState(false);
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

  const handleMouseOverGear = () => {
    setgear((prevState) => !prevState);
  };
  const handleMouseOverBell = () => {
    setbell((prevState) => !prevState);
  };

  return (
    <div className="admin-navbar-container">
      <div className="admin-navbar-brand">
        <FontAwesomeIcon icon="bars" size="lg" className="admin-navbar-burgermenu" onClick={handleShow} /> {getBrandText()}
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      {currentUser && currentUser.email}
      <div className="admin-navbar-links">
        <Dropdown as="div">
          <Dropdown.Toggle variant="default">
            <div className={`admin-navbar-settings ${bell ? "wobble-hor-top" : ""}`} onMouseOver={handleMouseOverBell} onMouseLeave={handleMouseOverBell}>
              <FontAwesomeIcon icon="bell" size="lg" />
            </div>
            <span className="notification">5</span>
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight aria-labelledby="navbarDropdownMenuLink">
            <Dropdown.Item onClick={() => history.push("/admin/user-settings")}>
              <FontAwesomeIcon icon="wrench" size="sm" style={{ marginRight: "10px" }} />
              Settings
            </Dropdown.Item>
            <div className="divider"></div>
            <Dropdown.Item className="text-danger" onClick={handleLogout}>
              <FontAwesomeIcon icon="power-off" size="sm" style={{ marginRight: "10px" }} />
              Log out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown as="div">
          <Dropdown.Toggle variant="default">
            <div className={`admin-navbar-settings ${gear ? "rotate-center" : ""}`} onMouseOver={handleMouseOverGear} onMouseLeave={handleMouseOverGear}>
              <FontAwesomeIcon icon="cog" size="lg" />
              <div></div>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight aria-labelledby="navbarDropdownMenuLink">
            <Dropdown.Item onClick={() => history.push("/admin/user-settings")}>
              <FontAwesomeIcon icon="wrench" size="sm" style={{ marginRight: "10px" }} />
              Settings
            </Dropdown.Item>
            <div className="divider"></div>
            <Dropdown.Item className="text-danger" onClick={handleLogout}>
              <FontAwesomeIcon icon="power-off" size="sm" style={{ marginRight: "10px" }} />
              Log out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default AdminNavigation;

//onClick={handleLogout}
