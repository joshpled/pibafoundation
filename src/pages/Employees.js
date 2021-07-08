import React, { useState, useEffect } from "react";
import { PersonCard, ModalComponent } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import generateKey from "../helper/generateKey";
import { useQuery, gql } from "@apollo/client";

function Employees() {
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setUpdate(false);
  };
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [updateEmployee, setupdateEmployee] = useState({});

  const handleUpdate = (employeeObj) => {
    handleShow();
    setUpdate(true);
    setupdateEmployee(employeeObj);
  };

  const getEmployeesQuery = gql`
    query {
      getEmployees {
        id
        name
        position
        email
        phone
        permissions
        photo
      }
    }
  `;
  const { loading, error, data } = useQuery(getEmployeesQuery);

  useEffect(() => {
    const abortController = new AbortController();
    if (error) {
      console.log("Error:", error);
    }
    if (loading) {
      console.log("Loading:", loading);
    }
    if (data) {
      setEmployees((prevState) => [...data.getEmployees]);
    }
    return () => {
      abortController.abort();
    };
  }, [loading, error, data]);

  return (
    <div>
      <div style={{ height: "fit-content" }}>
        <div className="employee-add-new" onClick={handleShow}>
          <FontAwesomeIcon icon="plus-circle" size="2x" />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {employees.map(({ id, name, position, email, phone, permissions, photo }, key) => (
          <div
            className="slide-in-right"
            style={{ animationDelay: `${key * 0.1}s` }}
            key={generateKey(id)}
            onClick={() =>
              handleUpdate({
                id,
                name,
                position,
                email,
                phone,
                permissions,
                photo,
              })
            }
          >
            <PersonCard
              userData={{
                name,
                position,
                email,
                phone,
                permissions,
                photo,
              }}
            />
          </div>
        ))}
      </div>
      <ModalComponent show={show} handleShow={handleShow} handleClose={handleClose} form="employee" update={update} person={updateEmployee} />
    </div>
  );
}

export default Employees;
