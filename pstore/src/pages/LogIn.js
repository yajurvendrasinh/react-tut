import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CYPRESS_ID } from "../cy_constant";

export default function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

  async function loginAdmin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigateTo("/dashboard");
    } catch {
      setError("Login failed, please check credentials");
    }

    setLoading(false);
  }

  return (
    <div className="login-wrapper">
      <Card className="custom-card">
        <Card.Body>
          <h3 className="text-center mb-4">Log In</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={loginAdmin}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                data-cy={CYPRESS_ID.USERNAME_INPUT}
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                data-cy={CYPRESS_ID.PASSWORD_INPUT}
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button
              data-cy={CYPRESS_ID.LOGIN_BUTTON}
              className="w-100 mt-4"
              type="submit"
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
