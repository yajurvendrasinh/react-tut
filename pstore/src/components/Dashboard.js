import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Card, Button, Alert, Form } from "react-bootstrap";
import PetList from "./PetList";
import SelectOption from "./SelectOption";
import { CYPRESS_ID } from "../cy_constant";

const STATUS = {
  AVAILABLE: "available",
  SOLD: "sold",
  PENDING: "pending",
};

export default function Dashboard() {
  const [error, setError] = useState("");
  const [selectOption, setSelectOption] = useState(STATUS.AVAILABLE);
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

  // const petStatus = [STATUS.AVAILABLE, STATUS.SOLD, STATUS.PENDING];
  function showOptions(e) {
    setSelectOption(e.target.value);
  }

  return (
    <div>
      <h3 data-cy={CYPRESS_ID.WELCOME_MESSAGE}>Dashboard</h3>
      <SelectOption onChangeOptions={showOptions} options={STATUS} />
      <PetList status={selectOption} />
      <Button variant="link" onClick={logoutUser}>
        Log Out
        {error && <Alert variant="danger">{error}</Alert>}
      </Button>
    </div>
  );
}
