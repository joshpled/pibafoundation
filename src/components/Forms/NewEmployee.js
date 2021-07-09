import React, { useState, useEffect } from "react";
import { Form, Button, Col, Spinner, Alert, Image } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { updateEmployeeQuery, deleteEmployeeQuery, newEmployeeQuery } from "gqlQueries/employeeQueries";

function NewEmployee({ update, employeeObj }) {
  const [validated, setValidated] = useState(false);
  const [deleteError, showError] = useState(false);
  const [employee, setEmployee] = useState({});

  const [addEmployee] = useMutation(newEmployeeQuery);
  const [updateEmployee] = useMutation(updateEmployeeQuery);
  const [deleteEmployee] = useMutation(deleteEmployeeQuery);

  useEffect(() => {
    const abortController = new AbortController();
    if (update && employeeObj) {
      setEmployee((prev) => {
        setEmployee({
          name: employeeObj.name,
          position: employeeObj.position,
          email: employeeObj.email,
          phone: employeeObj.phone,
          permissions: employeeObj.permissions,
          photo: employeeObj.photo,
        });
      });
    }
    return function cleanup() {
      abortController.abort();
    };
  }, [employeeObj, update]);

  const handleChange = (e) => {
    setEmployee((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const handleDeleteEmployee = () => {
    deleteEmployee({ variables: { id: employeeObj.id } });
  };

  const handleSubmit = (e) => {
    handleUpload(e);
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    if (validated) {
      update
        ? updateEmployee({
            variables: {
              id: employeeObj.id,
              name: employee.name,
              position: employee.position,
              email: employee.email,
              phone: employee.phone,
              permissions: employee.permissions,
            },
          })
        : addEmployee({
            variables: {
              name: employee.name,
              position: employee.position,
              email: employee.email,
              phone: employee.phone,
              permissions: employee.permissions,
            },
          });
    }
  };

  const handleUpload = (event) => {
    const file = event.target["formGridUploadImage"].files[0];
    const formData = new FormData();
    formData.append("image", file, "image");

    fetch("https://api.imgur.com/3/upload", {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Client-ID 6cccc6b3fbee761",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        debugger;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const determineLoading = () => {
    if (employee) {
      return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {update ? <h3>Update {employee.name}</h3> : <h3>New Employee</h3>}
          <hr></hr>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridUploadImage">
              <Image src={employee.photo ? employee.photo : ""} rounded style={{ borderBottom: "solid 2px lightgray", borderRadius: "10%", width: "20%" }} />
              <Form.Control type="file" name="picture" style={{ width: "30%" }} />
              (10mb Limit)
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control required type="text" placeholder="Name" name="name" value={employee.name} onChange={(e) => handleChange(e)} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPosition">
              <Form.Control required type="text" placeholder="Position" name="position" value={employee.position} onChange={(e) => handleChange(e)} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control required type="email" placeholder="Email" name="email" value={employee.email} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Control required type="tel" placeholder="Phone" name="phone" value={employee.phone} onChange={(e) => handleChange(e)} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPermissions">
              <Form.Control required type="text" placeholder="Permissions" name="permissions" value={employee.permissions} onChange={(e) => handleChange(e)} />
            </Form.Group>
            {update && (
              <Button variant="danger" size="sm" onClick={() => showError(true)} style={{ height: "fit-content", padding: "5px" }}>
                Delete Employee
              </Button>
            )}
          </Form.Row>

          <Button variant="primary" type="submit" style={{ float: "right" }}>
            Submit
          </Button>
        </Form>
      );
    } else {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
  };

  return (
    <div>
      <Alert show={deleteError} variant="danger" onClose={() => showError(false)} dismissible>
        Are you sure?
        <Button variant="danger" size="sm" style={{ float: "right" }} onClick={handleDeleteEmployee}>
          Delete Employee
        </Button>
      </Alert>
      {determineLoading()}
    </div>
  );
}

export default NewEmployee;
