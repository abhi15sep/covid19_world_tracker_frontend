import React from 'react';

import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <div style={{ paddingBottom: '15px', marginBottom: '15px' }}>
        <h1 className="header" >COVID-19 World Tracker</h1>

        <NavLink 
        to="/">
          <Button variant="dark">NavLink Button to HOME</Button>
        </NavLink>

        <NavLink 
        to="/collections/new">
          <Button variant="dark">Create a New Collection</Button>
        </NavLink>

        <NavLink 
        to="/collections">
          <Button variant="dark">View a Collection</Button>
        </NavLink>
    </div>
  );
}

export default NavBar;