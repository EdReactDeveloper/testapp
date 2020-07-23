import React from 'react';
import { Form, Button } from 'react-bootstrap';
import style from '../../Utils/utils.module.scss';
import render from './data';
import FormField from '../Field';

const Register = (payload) => {
  const {
    methods: { onSubmit, onChange },
    data: { email, password, passwordRe },
    loaders: { loading }
  } = payload
  const fieldData = { email, password, passwordRe }

  return (
    <div className={`${style.center} ${style.padding}`}>
      <Form onSubmit={onSubmit}>
        {render(fieldData) &&
          render(fieldData).map(item =>
            <FormField item={item} onChange={onChange} key={item.name} />
          )}
        <Button variant="primary" type="submit">
          {loading ? 'Loding' : 'Submit'}
        </Button>
      </Form>
    </div>
  );
};

export default Register;