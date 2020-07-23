import React from 'react';
import { Button } from 'react-bootstrap';
import {Link } from 'react-router-dom'; 
import style from './nav.module.scss';


const AuthNav = (payload) => {
  const { data: { user, loggedIn, loading } , methods:{logout}} = payload

  return (
    <div className={style.wrapper}>
      {user && loggedIn && !loading ?
      <>
      <div>{user.email}</div>
        <Button variant="link" onClick={logout}>Logout</Button>
        </>
        :
        <>
          <Button variant="link"><Link to="/login">Login</Link></Button>
          <Button variant="link"><Link to="/register">Register</Link></Button>
        </>
      }
    </div>
  );
};

export default AuthNav;