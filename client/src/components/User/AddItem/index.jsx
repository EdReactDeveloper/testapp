import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import FormField from './Field';
import render from './data';

const AddItem = (payload) => {
  const {
    methods: { onChange, onSubmit },
    data: { firstName, lastName, email } } = payload
  const fieldData = { firstName, lastName, email }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Row className="align-items-center">
        {render(fieldData) &&
          render(fieldData).map(item => <FormField key={item.name} item={item} onChange={onChange} />
          )}
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Submit
        </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default AddItem;