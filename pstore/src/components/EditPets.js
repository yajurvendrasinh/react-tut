import React, { useReducer } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

// Define action types
const ACTIONS = {
  START_EDIT: "start_edit",
  CANCEL_EDIT: "cancel_edit",
  SAVE_EDIT: "save_edit",
  UPDATE_NAME: "update_name",
  UPDATE_STATUS: "update_status",
};

// Reducer function to handle state changes
const editReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.START_EDIT:
      return { ...state, isEditing: true };
    case ACTIONS.CANCEL_EDIT:
      return { ...state, isEditing: false };
    case ACTIONS.SAVE_EDIT:
      return { ...state, isEditing: false };
    case ACTIONS.UPDATE_NAME:
      return { ...state, name: action.payload };
    case ACTIONS.UPDATE_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
export default function EditPets({ pet, onUpdate }) {
  const [state, dispatch] = useReducer(editReducer, {
    isEditing: false,
    name: pet.name,
    status: pet.status,
  });

  const { isEditing, name, status } = state;

  const handleEdit = () => {
    dispatch({ type: ACTIONS.START_EDIT });
  };

  const handleUpdate = () => {
    axios
      .post(`https://petstore.swagger.io/v2/pet/${pet.id}`, {
        name,
        status,
      })
      .then(() => {
        dispatch({ type: ACTIONS.SAVE_EDIT });
        onUpdate({ ...pet, name, status });
      })
      .catch((error) => {
        console.error("Error updating pet:", error);
      });
  };

  const handleCancelEdit = () => {
    dispatch({ type: ACTIONS.CANCEL_EDIT });
  };

  return (
    <div>
      <h3>Edit Pet Information</h3>
      <p>
        Name:
        {isEditing ? (
          <input
            value={name}
            onChange={(e) =>
              dispatch({ type: ACTIONS.UPDATE_NAME, payload: e.target.value })
            }
          />
        ) : (
          name
        )}
      </p>
      <p>
        Status:
        {isEditing ? (
          <input
            value={status}
            onChange={(e) =>
              dispatch({ type: ACTIONS.UPDATE_STATUS, payload: e.target.value })
            }
          />
        ) : (
          status
        )}
      </p>
      {isEditing ? (
        <div>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <Button variant="warning" onClick={handleEdit}>
          Edit
        </Button>
      )}
    </div>
  );
}
