import React from 'react';
import { Button } from 'react-bootstrap';
import style from '../../Utils/utils.module.scss';

const EditMode = ({ item, i, payload }) => {
  const { _id } = item
  const {
    data: { editFields: { firstName, lastName, email } },
    methods: { saveChanges, editModeHandler, onChange },
    loaders: { inProgress }
  } = payload
  const progress = inProgress.some(id => _id == id)

  return (
    <tr className={progress ? style.fetching : ''}>
      <td>{i + 1}</td>
      <td><input name="firstName" value={firstName} type="text" onChange={(e) => onChange({ e, type: 'edit' })} /></td>
      <td><input name="lastName" value={lastName} type="text" onChange={(e) => onChange({ e, type: 'edit' })} /></td>
      <td><input name="email" value={email} type="text" onChange={(e) => onChange({ e, type: 'edit' })} /></td>
      <td>  <Button variant="secondary" onClick={() => editModeHandler(item)}>Cancel</Button></td>
      <td><Button variant="outline-primary" disabled={progress} onClick={() => saveChanges(_id)}>Save</Button></td>
    </tr>
  );
};

export default EditMode;