import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
      <div className="navbar">
        <NavLink
          to="/"
          exact
          style={{color: "blue"}}
          activeStyle={{color: "purple"}}
        >Home</NavLink><br/>
        <NavLink
          to="/actors"
          exact
          style={{color: "blue"}}
          activeStyle={{color: "purple"}}
          >Actors</NavLink><br/>
        <NavLink
          to="/directors"
          exact
          style={{color: "blue"}}
          activeStyle={{color: "purple"}}
        >Directors</NavLink><br/>
        <NavLink
          to="/movies"
          exact
          style={{color: "blue"}}
          activeStyle={{color: "purple"}}
          >Movies</NavLink><br/>
      </div>
  );
};

export default NavBar;
