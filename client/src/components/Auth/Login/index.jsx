import React from 'react';
import { Form, Button } from 'react-bootstrap';
import style from '../../Utils/utils.module.scss';
import render from './data';
import FormField from '../Field';

const Login = (payload) => {

  const { methods: { onChange, handleSubmit },
    data: { email, password }, loaders: { loading } } = payload
  const fieldData = { email, password }

  return (
    <div className={`${style.center} ${style.padding}`}>

      <Form onSubmit={handleSubmit}>
        {render(fieldData) &&
          render(fieldData).map(item =>
            <FormField item={item} onChange={onChange} key={item.name} />
          )}
        <Button variant="primary" disabled={loading} type="submit">
          {loading ? 'Loding' : 'Submit'}
          </Button>
      </Form>
    </div>

  );
};

export default Login;