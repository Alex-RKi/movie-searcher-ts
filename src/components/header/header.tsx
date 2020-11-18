import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';


const Header = () => {
  let activeRoute = useLocation().pathname;
  const disable = activeRoute.length > 1;
  const placeholder = disable ? '...' : 'Search...'
  return (
    <div className='wrapper'>
      <nav className='justify-content-center'>
        <Link to='/' className='btn btn-dark  btn-nav border  border-right-1'>Popular</Link>
        <Link to='/favorits' className='btn btn-dark  btn-nav'>Favorits</Link>
        <input disabled={disable} type='text' placeholder={placeholder}
          className='form-control flex-grow-1 search' />
      </nav>
    </div>


  );
}

export default Header;