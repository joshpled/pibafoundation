import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const rememberRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [revealPassword, setRevealPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value, rememberRef.current.checked);
      history.push("/admin/dashboard");
    } catch (error) {
      setError("Failed to log in");
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <div className="login-box-wrapper">
      <Card style={{ alignItems: "center" }} className="bounce-in-top">
        {error && <Alert variant="danger">{error}</Alert>}
        <Card.Body>
          <h3 style={{ textAlign: "center", fontWeight: "300", marginBottom: "30px" }}>Login</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type={`${revealPassword ? "text" : "password"}`} placeholder="Password" ref={passwordRef} required />
              <div className="reveal-password" onClick={() => setRevealPassword((prevstate) => !prevstate)}>
                <FontAwesomeIcon icon={["far", `${revealPassword ? "eye-slash" : "eye"}`]} />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" ref={rememberRef} />
            </Form.Group>
            <div className="login-button">
              <Button variant="primary" type="submit" disabled={loading}>
                Log In
              </Button>
            </div>
            <hr></hr>
            <Link to="/auth/register" style={{ float: "right" }}>
              Don't have an account?
            </Link>
            <br></br>
            <Link to="/auth/forgot-password" style={{ float: "right" }}>
              Forgot Password?
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
