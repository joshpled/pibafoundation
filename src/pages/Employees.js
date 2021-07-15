import React, { useState, useEffect } from "react";
import { PersonCard, ModalComponent } from "components";
import { Spinner, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import generateKey from "../helper/generateKey";
import { useQuery } from "@apollo/client";
import { getEmployeesQuery } from "gqlQueries/employeeQueries";
import useForceUpdate from "customHooks/useForceUpdate";
import { useAuth } from "../context/AuthContext";

function Employees({ userInfo }) {
  const forceUpdate = useForceUpdate();

  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState("");
  const [update, setUpdate] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [updateEmployee, setupdateEmployee] = useState({});

  const { loading, error, data } = useQuery(getEmployeesQuery);
  const employeeInfo = useEffect(() => {
    const abortController = new AbortController();

    error && setShowError(error.message);
    data && setEmployees((prevState) => [...data.getEmployees]);

    return () => {
      abortController.abort();
    };
  }, [loading, error, data]);

  const handleUpdate = (employeeObj) => {
    handleShow();
    setUpdate(true);
    setupdateEmployee(employeeObj);
  };

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setUpdate(false);
  };

  return (
    <div>
      {loading ? (
        <div style={{ display: "grid", placeItems: "center", marginTop: "10px" }}>
          <h3>Loading</h3>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <div style={{ height: "fit-content" }}>
            {userInfo && userInfo.permissions === "Admin" && (
              <div className="employee-add-new" onClick={handleShow}>
                <FontAwesomeIcon icon="plus-circle" size="2x" />
              </div>
            )}
          </div>
          {employees.length === 0 && <h1 className="display-3">No Employees</h1>}
          <div style={{ display: "flex" }}>
            {employees.map(({ id, name, position, email, phone, permissions, photo }, key) => (
              <div className="slide-in-right" style={{ animationDelay: `${key * 0.1}s` }} key={generateKey(id)}>
                <PersonCard
                  userData={{
                    id,
                    name,
                    position,
                    email,
                    phone,
                    permissions,
                    photo,
                  }}
                  handleUpdate={handleUpdate}
                />
              </div>
            ))}
          </div>
          <ModalComponent
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            form="employee"
            update={update}
            person={updateEmployee}
            forceUpdate={() => forceUpdate()}
            permissions={userInfo.permissions}
          />
        </>
      )}
      {showError && (
        <Alert show={showError} variant="danger" onClose={() => setShowError("")} dismissible>
          {showError}
        </Alert>
      )}
    </div>
  );
}

export default Employees;
