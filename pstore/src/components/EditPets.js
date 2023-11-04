import React, { useReducer } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import SelectOption from "./SelectOption";
import { CYPRESS_ID } from "../cy_constant";

// Define action types
const ACTIONS = {
  START_EDIT: "start_edit",
  CANCEL_EDIT: "cancel_edit",
  SAVE_EDIT: "save_edit",
  UPDATE_NAME: "update_name",
  UPDATE_STATUS: "update_status",
};

const STATUS = {
  AVAILABLE: "available",
  SOLD: "sold",
  PENDING: "pending",
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
    console.log("post:", pet.name, pet.status);
    axios
      .post(
        `http://localhost:8080/api/v3/pet/${pet.id}?name=${name}&status=${status}`,
        {
          name,
          status,
        }
      )
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

  const onStatusChange = (e) => {
    dispatch({ type: ACTIONS.UPDATE_STATUS, payload: e.target.value });
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="w-100 m-2">
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
      </div>
      <div className="w-100 m-2">
        Status:
        {isEditing ? (
          <SelectOption
            data-cy={CYPRESS_ID.CHANGE_STATUS}
            onChangeOptions={onStatusChange}
            options={STATUS}
          />
        ) : (
          <p data-cy={CYPRESS_ID.PET_STATUS_BADGE}>{status}</p>
        )}
      </div>
      {isEditing ? (
        <div>
          <button
            data-cy={CYPRESS_ID.UPDATE_PET_INFO_BUTTON}
            onClick={handleUpdate}
          >
            Save
          </button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <Button
          data-cy={CYPRESS_ID.EDIT_PET_BUTTON}
          variant="warning"
          onClick={handleEdit}
        >
          Edit
        </Button>
      )}
    </div>
  );
}
