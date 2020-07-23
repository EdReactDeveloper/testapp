import React from 'react';
import Items from './Items';
import AddItem from './AddItem';
import style from '../Utils/utils.module.scss'

const User = (payload) => {

  return (
    <div className={`${style.block} ${style.padding}`}>
      <>
        <AddItem {...payload} />
        <Items {...payload} />
      </>
    </div>
  );
};

export default User;