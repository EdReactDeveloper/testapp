import React from 'react';
import { Form, FormControl, Button, } from 'react-bootstrap';

const Search = (payload) => {

  const { data: { query }, methods: { onChange, submitSearch } } = payload
  
  return (
    <Form inline className="ml-auto" onSubmit={submitSearch}>
      <FormControl
        type="text"
        value={query}
        placeholder="Search"
        className="mr-sm-2"
        onChange={(e) => onChange({ e, type: 'search' })}
      />
      <Button variant="outline-info" type="submit">Search</Button>
    </Form>
  );
};

export default Search;