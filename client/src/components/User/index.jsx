import React from 'react';
import Items from './Items';
import AddItem from './AddItem';
import style from '../Utils/utils.module.scss'

const User = (payload) => {
  const { data: { array } } = payload

  return (
    <div className={`${style.block} ${style.padding}`}>
      <AddItem {...payload} />
      {array.length > 0 ?
        <Items {...payload} />
        :
        <h2>list is empty</h2>
      }
    </div>
  );
};

export default User;