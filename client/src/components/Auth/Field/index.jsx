import React from 'react';
import { Form } from 'react-bootstrap';

const Field = ({ item, onChange }) => {

  const { label, controlId, type, invalid, name, value, placeholder, error } = item
  
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} isInvalid={invalid} name={name} value={value} placeholder={placeholder} onChange={e => onChange(e)} />
      {error &&
        <Form.Text className="text-danger">
          {error}
        </Form.Text>
      }
    </Form.Group>
  );
};

export default Field;