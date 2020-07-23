import React from 'react';
import { Button } from 'react-bootstrap';
import style from '../../Utils/utils.module.scss'; 

const ListItem = ({ item, i, payload }) => {
  const { _id, firstName, lastName, email } = item
  const { methods: { removeItem, editModeHandler }, loaders:{inProgress} } = payload
  const progress = inProgress.some(id => _id == id) 

  return (
    <tr className={progress ? style.removing : ''}>
      <td>{i + 1}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td><Button variant="danger" disabled={progress} onClick={() => removeItem(_id)}>Delete</Button></td>
      <td><Button variant="outline-primary" onClick={() => editModeHandler(item)}>Edit</Button></td>
    </tr>
  );
};

export default ListItem;