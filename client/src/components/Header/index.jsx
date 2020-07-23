import React from 'react';
import { Navbar,  } from 'react-bootstrap';
import AuthNav from '../Auth/Nav';
import Search from './Search'; 

const Header = (payload) => {
  const { data: { user, loggedIn }, loaders:{loading} } = payload

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Test app</Navbar.Brand>
      {!loading &&
        <>
          {user && loggedIn && !loading &&
            <Search {...payload} />
          }
          <AuthNav {...payload} />
        </>
      }

    </Navbar>
  );
};

export default Header;