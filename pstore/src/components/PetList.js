import React, { useState, useEffect } from "react";
import axios from "axios";
import EditPets from "./EditPets";
import { Card, Badge } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export default function PetList({ status }) {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [petError, setPetError] = useState("");

  useEffect(() => {
    fetchPets();
  }, [status]);

  const fetchPets = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/v3/pet/findByStatus?status=${status}`,
        {
          headers: { "Content-Type": "applicaton/json" },
        }
      );
      console.log("Getting Reponse:", response.data);
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
      setPetError("API error");
    } finally {
      setLoading(false);
    }
  };

  // Function to update the pet information in the pet state
  const handleUpdatePet = (updatedPet) => {
    setPets((prevPets) =>
      prevPets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet))
    );
    fetchPets();
  };

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className="d-flex w-100">
          {pets.map((pet) => (
            <Card className="m-2" style={{ width: "15rem" }} key={pet.id}>
              <Card.Body>
                <EditPets pet={pet} onUpdate={handleUpdatePet} />
              </Card.Body>
            </Card>
          ))}
          {pets.length === 0 && <p>No pets found.</p>}
          {petError && <p>{petError}</p>}
        </div>
      )}
    </div>
  );
}
