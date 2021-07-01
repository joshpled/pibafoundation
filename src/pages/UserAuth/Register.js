import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Register Submitted");
  // };
  return (
    <div className="register-box-wrapper">
      <Card style={{ alignItems: "center" }} className="bounce-in-top">
        <Card.Body>
          <h3 style={{ textAlign: "center", fontWeight: "300", marginBottom: "30px" }}>Register</h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group controlId="formBasicAuthCode">
              <Form.Label>AuthCode</Form.Label>
              <Form.Control type="text" placeholder="AuthCode" />
              <Form.Text className="text-muted">You can get this from your engineer</Form.Text>
            </Form.Group>
            <div className="login-button">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <hr></hr>
            <Link to="/auth/login" style={{ float: "right" }}>
              Already have an account?
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;
