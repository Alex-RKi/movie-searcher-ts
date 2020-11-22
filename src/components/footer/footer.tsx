import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

  }

  return (
    <footer id='footer' className='jumbotron w-100'>
      <button className='w-100 btn btn-outline-secondary' onClick={scrollToTop}>Scroll to top</button>
      <hr></hr>
    <span>Data and images provided by themoviedb.org</span>
    <span></span>
    </footer>
  );
};
export default Footer;