import { Form } from "react-bootstrap";

export default function SelectOption({
  onChangeOptions,
  options,
  dataCy,
  defaultValue,
}) {
  return (
    <div className="select-container">
      <Form.Select data-cy={dataCy} onChange={onChangeOptions}>
        <option
          selected={defaultValue === options.AVAILABLE}
          value={options.AVAILABLE}
        >
          {options.AVAILABLE}
        </option>
        <option selected={defaultValue === options.SOLD} value={options.SOLD}>
          {options.SOLD}
        </option>
        <option
          selected={defaultValue === options.PENDING}
          value={options.PENDING}
        >
          {options.PENDING}
        </option>
      </Form.Select>
    </div>
  );
}
