import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const authCode = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealConf, setRevealConf] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    if (authCode.current.value !== "pibaonly") {
      return setError("AuthCode is wrong");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/admin/dashboard");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  return (
    <div className="register-box-wrapper">
      {error && <Alert variant="danger">{error}</Alert>}
      <Card style={{ alignItems: "center" }} className="bounce-in-top">
        <Card.Body>
          <h3 style={{ textAlign: "center", fontWeight: "300", marginBottom: "30px" }}>Register</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type={`${revealPassword ? "text" : "password"}`} placeholder="Password" ref={passwordRef} required />
              <div className="reveal-password" onClick={() => setRevealPassword((prevstate) => !prevstate)}>
                <FontAwesomeIcon icon={["far", `${revealPassword ? "eye-slash" : "eye"}`]} />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type={`${revealConf ? "text" : "password"}`} placeholder="Confirm Password" ref={passwordConfirmRef} required />
              <div className="reveal-password" onClick={() => setRevealConf((prevstate) => !prevstate)}>
                <FontAwesomeIcon icon={["far", `${revealConf ? "eye-slash" : "eye"}`]} />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicAuthCode">
              <Form.Label>AuthCode</Form.Label>
              <Form.Control type="text" placeholder="AuthCode" ref={authCode} />
              <Form.Text className="text-muted">You can get this from your engineer</Form.Text>
            </Form.Group>
            <div className="login-button">
              <Button variant="primary" type="submit" disabled={loading}>
                Register
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
