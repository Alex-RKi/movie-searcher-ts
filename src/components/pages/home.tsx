import React, { useContext } from 'react';
import { MDBServiceContext } from '../movie-db-service-provider';
import { movieInterface } from '../../interfaces';
import MovieCard from '../movie-card';
import './home.css'

const Home = () => {
  const imagesBank: string = 'http://image.tmdb.org/t/p/w342/'
  const MDBContext = useContext(MDBServiceContext);
  const popularList = MDBContext!.popularsList;
  const favoritsList = MDBContext!.favoritsList;

  const createList: Function = (movies: any[]): JSX.Element[] => {
    return movies.map((movie: movieInterface) => {
      const src = `${imagesBank}${movie.poster_path}`;
      const { id, title } = movie;
      const favorited: boolean = favoritsList.includes(id);
      return (
        <MovieCard key={id} id={id}
          src={src} alt={title}
          favorited={favorited} />);
    });
  }
  return (
    <div className='homePage'>
      {createList(popularList)}
    </div>
  );
}
export default Home;