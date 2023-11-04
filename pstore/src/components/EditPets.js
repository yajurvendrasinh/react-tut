import React, { useReducer } from "react";
import axios from "axios";
import { Button, Badge, Form, Card } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import SelectOption from "./SelectOption";
import { CYPRESS_ID } from "../cy_constant";
import { STATUS, ACTIONS, BADGE_STATUS } from "../constants";

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
    console.log("post:", name, status);
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
  };

  return (
    <div>
      <div className="w-100 m-2">
        {isEditing && (
          <InputGroup>
            <Form.Control
              data-cy={CYPRESS_ID.EDIT_NAME_INPUT}
              value={name}
              onChange={(e) =>
                dispatch({ type: ACTIONS.UPDATE_NAME, payload: e.target.value })
              }
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        )}
      </div>
      <div className="w-100">
        {isEditing ? (
          <SelectOption
            className={"test-select"}
            dataCy={CYPRESS_ID.CHANGE_STATUS_DROPDOWN}
            onChangeOptions={onStatusChange}
            options={STATUS}
            defaultValue={pet.status}
          />
        ) : (
          <div data-cy={CYPRESS_ID.PET_STATUS_BADGE}>
            <Card.Title className="w-100 mb-2">{pet.name}</Card.Title>
            {pet.status === STATUS.AVAILABLE && (
              <Badge className="mb-2" bg={BADGE_STATUS.AVAILABLE}>
                {pet.status}
              </Badge>
            )}
            {pet.status === STATUS.SOLD && (
              <Badge className="mb-2" bg={BADGE_STATUS.SOLD}>
                {pet.status}
              </Badge>
            )}
            {pet.status === STATUS.PENDING && (
              <Badge className="mb-2" bg={BADGE_STATUS.PENDING}>
                {pet.status}
              </Badge>
            )}
          </div>
        )}
      </div>
      {isEditing ? (
        <div>
          <Button
            variant="primary"
            className="w-100 m-1"
            data-cy={CYPRESS_ID.UPDATE_PET_INFO_BUTTON}
            onClick={handleUpdate}
          >
            Save
          </Button>
          <Button
            data-cy={CYPRESS_ID.CANCEL_PET_INFO_BUTTON}
            variant="danger"
            className="w-100 m-1"
            onClick={handleCancelEdit}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <Button
          data-cy={CYPRESS_ID.EDIT_PET_BUTTON}
          variant="warning"
          className="w-100"
          onClick={handleEdit}
        >
          Edit
        </Button>
      )}
    </div>
  );
}
