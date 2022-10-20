import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h1>RandomUsers</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/users">
          <li>Users</li>
        </Link>
        <Link to="/posts">
          <li>Posts</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav