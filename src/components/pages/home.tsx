import React, { useContext } from 'react';
import { MDBServiceContext } from '../movie-db-service-provider';
import { movieInterface } from '../../interfaces';
import MovieCard from '../movie-card'


const Home = () => {
  const imagesBank: string = 'http://image.tmdb.org/t/p/w342/'
  const homeContext = useContext(MDBServiceContext);

  const createListOfPopular: Function = (props: any[]): JSX.Element[] => {
    return props.map((movie: movieInterface) => {
      const src=`${imagesBank}${movie.poster_path}`;
      return <MovieCard key={movie.id} src={src} alt={movie.title} />
    });
  }
  return (
    <div>First render - popular movies list, after the search - resulsts
      {createListOfPopular(homeContext?.popularsList)}
    </div>
  );
}
export default Home;