import React, { useState, useEffect } from "react";
import { Form, Button, Col, Spinner, Alert, Image } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { updateEmployeeQuery, deleteEmployeeQuery, newEmployeeQuery } from "gqlQueries/employeeQueries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EmployeeForm({ update, employeeObj, handleClose, forceUpdate, permissions }) {
  const [validated, setValidated] = useState(false);
  const [deleteError, showError] = useState(false);
  const [employee, setEmployee] = useState({});
  const [photo, setPhoto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mutationError, showMutationError] = useState("");

  const [addEmployee] = useMutation(newEmployeeQuery);
  const [updateEmployee] = useMutation(updateEmployeeQuery);
  const [deleteEmployee] = useMutation(deleteEmployeeQuery);

  useEffect(() => {
    const abortController = new AbortController();
    if (update && employeeObj) {
      setPhoto(true);
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
    deleteEmployee({ variables: { id: employeeObj.id } })
      .then((response) => {
        handleClose();
        window.location.reload();
      })
      .catch((error) => showMutationError(error.message));
  };

  const handleSubmit = (e) => {
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
              photo: employee.photo,
            },
          })
            .then((response) => {
              handleClose();
              forceUpdate();
            })
            .catch((error) => {
              showMutationError(error.message);
            })
        : addEmployee({
            variables: {
              name: employee.name,
              position: employee.position,
              email: employee.email,
              phone: employee.phone,
              permissions: employee.permissions,
              photo: employee.photo,
            },
          })
            .then((response) => {
              handleClose();
              window.location.reload();
            })
            .catch((error) => {
              showMutationError(error.message);
            });
    }
  };

  const handleUpload = (event) => {
    setLoading(true);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file, "image");

    fetch("https://api.imgur.com/3/image", {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Client-ID 6cccc6b3fbee761",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then(({ data }) => {
        setPhoto(true);
        setLoading(false);
        setEmployee((prev) => setEmployee({ ...prev, photo: data.link }));
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
            <Form.Group as={Col} controlId="formGridUploadImage" className="employee-form-file">
              <Image
                src={employee.photo ? employee.photo : ""}
                rounded
                style={{ borderBottom: "solid 2px lightgray", borderRadius: "10%", width: "120px", height: "120px", objectFit: "cover" }}
              />
              <label
                htmlFor="file-upload"
                className="custom-file-upload"
                style={{ backgroundColor: loading ? "rgba(152, 152, 152, 0.599" : "", cursor: loading ? "none" : "pointer" }}
              >
                <FontAwesomeIcon icon="cloud-upload-alt" />
                {loading ? (
                  <>
                    <Spinner animation="grow" size="sm" className="ml-1 mr-1" /> Uploading...
                  </>
                ) : photo ? (
                  "Change Photo (10mb limit)"
                ) : (
                  "Choose Photo (10mb limit)"
                )}
              </label>
              <input id="file-upload" type="file" onChange={handleUpload} disabled={loading} accept="image/png, image/jpeg" />
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

          {permissions && permissions === "Admin" && (
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPermissions">
                <Form.Label>Permissions:</Form.Label>
                <div key={`inline-radio`} className="mb-3">
                  <Form.Check inline label="Admin" value="Admin" name="permissions" type="radio" id={`inline-radio-1`} onChange={(e) => handleChange(e)} />
                  <Form.Check
                    inline
                    label="Employee"
                    value="Employee"
                    name="permissions"
                    type="radio"
                    id={`inline-radio-2`}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Check inline label="None" value="None" name="permissions" type="radio" id={`inline-radio-3`} onChange={(e) => handleChange(e)} />
                </div>
              </Form.Group>
            </Form.Row>
          )}
          {update && permissions && permissions === "Admin" && (
            <Button variant="danger" size="sm" onClick={() => showError(true)} style={{ height: "fit-content", padding: "5px" }}>
              Delete Employee
            </Button>
          )}
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
      <Alert show={mutationError} variant="danger" onClose={() => showMutationError("")} dismissible>
        {mutationError && mutationError}
      </Alert>

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

export default EmployeeForm;
