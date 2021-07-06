import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import fetchGraph from "helper/fetchGraph";

function NewEmployee() {
  const [validated, setValidated] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    addressTwo: "",
    zipcode: "",
    city: "",
    state: "",
    sign: false,
  });
  const handleChange = (e) => {
    setEmployee((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>New Employee</h3>
        <hr></hr>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Control required type="text" placeholder="First Name" name="firstName" value={employee.firstName} onChange={(e) => handleChange(e)} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Control required type=" text" placeholder="Last Name" name="lastName" value={employee.lastName} onChange={(e) => handleChange(e)} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAge">
            <Form.Control required type="number" placeholder="Age" name="age" value={employee.age} onChange={(e) => handleChange(e)} />
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

        <Form.Group controlId="formGridAddress1">
          <Form.Control required placeholder="1234 Main St" name="address" value={employee.address} onChange={(e) => handleChange(e)} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Control required placeholder="Apartment, studio, or floor" name="addressTwo" value={employee.addressTwo} onChange={(e) => handleChange(e)} />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control required placeholder="City" name="city" value={employee.city} onChange={(e) => handleChange(e)} />
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Control required placeholder="State" maxLength="2" name="state" value={employee.state} onChange={(e) => handleChange(e)} />
            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Control required value={employee.zipcode} onChange={(e) => handleChange(e)} placeholder="Zipcode" name="zipcode" type="number" />
            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" style={{ float: "right" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewEmployee;
