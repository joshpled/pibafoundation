import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Login Submitted");
  // };
  return (
    <div className="login-box-wrapper">
      <Card style={{ alignItems: "center" }} className="bounce-in-top">
        <Card.Body>
          <h3 style={{ textAlign: "center", fontWeight: "300", marginBottom: "30px" }}>Login</h3>
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
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <div className="login-button">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <hr></hr>
            <Link to="/auth/register" style={{ float: "right" }}>
              Don't have an account?
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
