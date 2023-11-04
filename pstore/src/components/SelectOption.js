import { Form } from "react-bootstrap";

export default function SelectOption({
  onChangeOptions,
  options,
  dataCy,
  defaultValue,
}) {
  return (
    <div className="select-container">
      <Form.Select
        value={defaultValue}
        size="lg"
        data-cy={dataCy}
        onChange={onChangeOptions}
      >
        <option value={options.AVAILABLE}>{options.AVAILABLE}</option>
        <option value={options.SOLD}>{options.SOLD}</option>
        <option value={options.PENDING}>{options.PENDING}</option>
      </Form.Select>
    </div>
  );
}
