import React from 'react';
import { Table } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap'
import style from '../Utils/utils.module.scss';
import Item from './Item';

const Items = (payload) => {
  const { data: { array }, loaders: { loading, fetchingItem } } = payload
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email address</th>
          </tr>
        </thead>

        <tbody>
          {fetchingItem &&
            <tr className={style.fetching}>
              <td>...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
            </tr>
          }
          {/* render list */}
          {array && !loading && array.map((item, i) => <Item item={item} payload={payload} i={i} key={item._id} /> )}

        </tbody>
      </Table>
      {loading ? <div className={style.center}>
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div> : null
      }
    </>
  );
};

export default Items;