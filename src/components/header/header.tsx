import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
        <input type='text' placeholder='Search...' />
      </nav>
    </div>
  );
}

export default Header;