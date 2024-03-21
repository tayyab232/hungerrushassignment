import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export const FormWrapper = ({ children, label, errors, errorsMessage }) => {
  return (
    <Form.Group className="form-group form-width320 mt-3">
      <Form.Label className="labels">{label}</Form.Label>
      {children}
      {errors && <p className="error-text">{errorsMessage}</p>}
    </Form.Group>
  );
};

export const InputGrouptext = ({ children }) => {
  return (
    <InputGroup.Text id="basic-addon1" className="rounded-0">
      {children}
    </InputGroup.Text>
  );
};
