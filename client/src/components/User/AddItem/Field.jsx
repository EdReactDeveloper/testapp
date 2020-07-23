import React from 'react';
import { Form, Col } from 'react-bootstrap';

const Field = ({ item, onChange }) => {

  const { label, controlId, type, invalid, name, value, placeholder, error } = item

  return (
    <Col xs="auto">
      <Form.Label htmlFor={controlId} srOnly>
        {label}
      </Form.Label>
      <Form.Control
        className="mb-2"
        id={controlId}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        isInvalid={invalid}
        onChange={(e) => { onChange({ e, type: 'add' }) }}
      />
      {error &&
        <Form.Text className="text-danger">
          {error}
        </Form.Text>
      }
    </Col>
  );
};

export default Field;