import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Mission Library</Link>
        </li>
        <li>
          <Link to="/upcoming">Upcoming Missions</Link>
        </li>
        <li>
          <Link to="/profile">User Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
