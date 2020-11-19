import React, { useState, useContext, useEffect } from 'react';
import { MDBServiceContext } from '../movie-db-service-provider';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const { searchMovies, saveSearchText } = useContext(MDBServiceContext)!;
  const [text, saveText] = useState('');
  let activeRoute = useLocation().pathname;
  const disable = activeRoute.length > 1;
  let  placeholder = disable ? '...' : 'Search...';

  useEffect(() => {
    searchMovies(text.toLowerCase());
  }, [text])
  
  return (
    <div className='wrapper'>
      <nav className='justify-content-center'>
        <Link to='/' className='btn btn-dark  btn-nav border  border-right-1'>Main</Link>
        <Link to='/favorits' className='btn btn-dark  btn-nav'>Favorits</Link>
        <input disabled={disable}
          className='form-control flex-grow-1 search'
          onChange={(e) => {
            saveText(e.target.value);
          }}
          type='text' placeholder={placeholder}
          value={text} />
      </nav>
    </div>


  );
}

export default Header;