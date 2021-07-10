import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import fetchGraph from "helper/fetchGraph";

function NewVolunteer() {
  // eslint-disable-next-line
  const [validated, setValidated] = useState(false);
  const [volunteer, setVolunteer] = useState({
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
    setVolunteer((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(volunteer);

    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
    // setValidated(true);

    fetchGraph(`mutation{
        createVolunteer(newVolunteer:
            ${volunteer}){
            id
            firstName
          }
}`).then((data) => {
      debugger;
    });
  };
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>New Volunteer</h3>
        <hr></hr>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Control required type="text" placeholder="First Name" name="firstName" value={volunteer.firstName} onChange={(e) => handleChange(e)} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Control required type=" text" placeholder="Last Name" name="lastName" value={volunteer.lastName} onChange={(e) => handleChange(e)} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAge">
            <Form.Control required type="number" placeholder="Age" name="age" value={volunteer.age} onChange={(e) => handleChange(e)} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control required type="email" placeholder="Email" name="email" value={volunteer.email} onChange={(e) => handleChange(e)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Control required type="tel" placeholder="Phone" name="phone" value={volunteer.phone} onChange={(e) => handleChange(e)} />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Control required placeholder="1234 Main St" name="address" value={volunteer.address} onChange={(e) => handleChange(e)} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Control required placeholder="Apartment, studio, or floor" name="addressTwo" value={volunteer.addressTwo} onChange={(e) => handleChange(e)} />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control required placeholder="City" name="city" value={volunteer.city} onChange={(e) => handleChange(e)} />
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Control required placeholder="State" maxLength="2" name="state" value={volunteer.state} onChange={(e) => handleChange(e)} />
            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Control required value={volunteer.zipcode} onChange={(e) => handleChange(e)} placeholder="Zipcode" name="zipcode" type="number" />
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

export default NewVolunteer;
