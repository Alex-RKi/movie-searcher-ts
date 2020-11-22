import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { MDBServiceContext } from '../movie-db-service-provider';
import { movieInterface } from '../../interfaces';
import MovieCard from '../movie-card';
import ErrorBoundry from '../error_boundry';
import './cards-list.css';
import cardPlaceholder from './cardPlaceholder.png';


function CardList(props: { list: any }) {

  const { favoritsList } = useContext(MDBServiceContext)!;
  const { list } = props;

  if (list === undefined) throw new Error('Woops');
  let activeRoute = useLocation().pathname;
  const messageFavsEmpty = list.length === 0 && activeRoute.includes('favorits') ?
    <div className='card empty'>Your favorits is empty</div> : null;

  const createList: Function = (movies: any[]): JSX.Element[] => {
    return movies.map((movie: movieInterface) => {
      const { id, title, poster_path } = movie;
      const src = poster_path ?
        `http://image.tmdb.org/t/p/w342/${poster_path}` :
        cardPlaceholder;


      const favorited: boolean = favoritsList.findIndex((movie: any) => movie.id === id) > -1;
      return (
        <MovieCard key={id}
          id={id}
          src={src}
          title={title}
          favorited={favorited}
          movieData={movie}
        />);
    });
  }
  return (
    <ErrorBoundry>
      <div className='cards-list' >
        {messageFavsEmpty}
        {createList(list)}
      </div>
    </ErrorBoundry>
  );
}
export default CardList;