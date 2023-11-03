import { useState } from "react";
import { Form } from "react-bootstrap";

export default function SelectPet({ onChangeOptions, options }) {
  return (
    <div className="select-container">
      <Form.Select onChange={onChangeOptions}>
        <option value={options.AVAILABLE}>{options.AVAILABLE}</option>
        <option value={options.SOLD}>{options.SOLD}</option>
        <option value={options.PENDING}>{options.PENDING}</option>
      </Form.Select>
    </div>
  );
}
