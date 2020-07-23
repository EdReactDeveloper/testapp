import React from 'react';
import EditMode from './EditMode';
import ViewMode from './ViewMode';

const ListItem = ({ item, i, payload }) => {
  
  return (
    <>
      {item.edit ?
        <EditMode payload={payload} item={item} i={i} /> :
        <ViewMode payload={payload} item={item} i={i} />
      }
    </>
  );
};

export default ListItem;