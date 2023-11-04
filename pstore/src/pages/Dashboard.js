import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Col,
  Row,
  Button,
  Alert,
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import PetList from "../components/PetList/PetList";
import SelectOption from "../components/SelectOption";
import { CYPRESS_ID } from "../cy_constant";
import { STATUS } from "../constants";

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

  function showOptions(e) {
    setSelectOption(e.target.value);
  }

  return (
    <Container fluid className="p-0">
      <Navbar className="p-3 mb-5" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand data-cy={CYPRESS_ID.WELCOME_MESSAGE}>
            Dashboard
          </Navbar.Brand>
          <Nav>
            <Button variant="light" onClick={logoutUser}>
              Log Out
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="mb-4 text-center" xs={10} md={10} lg={10}>
            <h2>Pet Inventory</h2>
          </Col>
          <Col xs md={6}>
            <SelectOption
              dataCy={CYPRESS_ID.SHOW_PET_ACCORDING_TO_STATUS}
              onChangeOptions={showOptions}
              options={STATUS}
              defaultValue={selectOption}
            />
          </Col>
        </Row>
        <Row>
          <PetList status={selectOption} />
        </Row>
        {error && <Alert variant="danger">{error}</Alert>}
      </Container>
    </Container>
  );
}
