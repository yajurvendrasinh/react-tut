import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Card, Button, Alert } from "react-bootstrap";
import PetList from "./PetList";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigateTo = useNavigate();

  async function logoutUser() {
    setError("");
    try {
      await logout();
      navigateTo("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      Dashboard
      <PetList status={"available"} />
      <PetList status={"sold"} />
      <PetList status={"pending"} />
      <Button variant="link" onClick={logoutUser}>
        Log Out
        {error && <Alert variant="danger">{error}</Alert>}
      </Button>
    </div>
  );
}
