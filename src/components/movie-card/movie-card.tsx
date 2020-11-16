import React, { useState, useContext, useEffect } from 'react';
import { MDBServiceContext } from '../movie-db-service-provider';
import './card.css';

interface cardInterface {
  src: string;
  alt: string;
  id: number;
  favorited: boolean;
  movieData: object;
}

const MovieCard = (props: cardInterface) => {
  const { src, alt, id, favorited, movieData } = props;
  const MDBContext = useContext(MDBServiceContext);
  const toggleFavorit = MDBContext!.toggleFavorit;

  const onLiked = () => {
    console.log('toggleLike')
    toggleFavorit(id, movieData);
  };

  let btnStyles = 'like-btn';
  favorited ? btnStyles += ' inFavs' : btnStyles += ' notInFavs';

  return (
    <div className='card movie-card '>
      <button className={btnStyles} onClick={onLiked}>
      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-paperclip" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
</svg>
      </button>
      <img src={src} alt={alt} />
    </div>
  );
}
export default MovieCard;