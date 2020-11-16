import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {

  return ( 

      <nav className='justify-content-center'>
        <Link to='/' className='btn btn-dark  btn-nav'>Popular</Link>
        <Link to='/favorits' className='btn btn-dark  btn-nav'>Favorits</Link>
        <input type='text' placeholder='Search...' className='form-control flex-grow-1 search'/>
      </nav>

 
  );
}

export default Header;