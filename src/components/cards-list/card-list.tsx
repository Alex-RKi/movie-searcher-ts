import React, { useContext } from 'react';
import { MDBServiceContext } from '../movie-db-service-provider';
import { movieInterface } from '../../interfaces';
import MovieCard from '../movie-card';
import './card-list.css'

function CardList(props: { mode: any }) {
  const imagesBank: string = 'http://image.tmdb.org/t/p/w342/'
  const MDBContext = useContext(MDBServiceContext);
  const { mode } = props;
  const list = mode === 'popularsList' ?
    MDBContext!.popularsList :
    MDBContext!.favoritsList;
  const favoritsList = MDBContext!.favoritsList;
  //Прямое обращение из пропса через MDBContext![mode]
  // мешает ТС, как обойти?
  // ! пока так, уточнить как типизировать и переписать!

  const messageListEmpty = list.length === 0 ? <div className='card empty'>Your favorits is empty</div> : null;
  const createList: Function = (movies: any[]): JSX.Element[] => {
    
    return movies.map((movie: movieInterface) => {
      const src = `${imagesBank}${movie.poster_path}`;
      const { id, title } = movie;
      const favorited: boolean = favoritsList.findIndex((movie: any) => movie.id === id) > -1;
      return (
        <MovieCard key={id}
          id={id}
          src={src}
          alt={title}
          favorited={favorited}
          movieData={movie}
        />);
    });
  }
  return (
    <div className='card-list'>
      {messageListEmpty}
      {createList(list)}
    </div>
  );
}
export default CardList;