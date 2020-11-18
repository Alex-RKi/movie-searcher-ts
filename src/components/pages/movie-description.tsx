import React, { useContext, useEffect, useState } from 'react';
import MovieDBService from '../../services';
import { movieInterface } from '../../interfaces';
import { MDBServiceContext } from '../movie-db-service-provider';
import Spinner from '../spinner';
import CardList from '../cards-list';
import ErrorBoundry from '../error_boundry';
import './movie-description.css'
import posterPlaceholder from './posterPlaceholder.png'


function MovieDescription(props: { id: number }) {
  const movieDBService = new MovieDBService();
  const { toggleFavorit, favoritsList } = useContext(MDBServiceContext)!;
  const { id } = props;
  const [movie, setMovie] = useState();
  const [liked, setLiked] = useState(false)
  const [recommended, setRecommended] = useState();

  const checkInFavorits = (id: number) => {
    return favoritsList.some((elem: movieInterface) => elem.id === id)
  }
  useEffect((): any => {
    console.log('update description');
    let cancelled = false;
    movieDBService.getMovieDescription(id)
      .then((response) => {
        !cancelled && setMovie(response);
        !cancelled && setLiked(checkInFavorits(response.id))
      });
    movieDBService.getRecommendations(id)
      .then((response) => {
        !cancelled && setRecommended(response.results);
      });
    return () => cancelled = true;
  }, [id]);
  if (!movie) return <Spinner />



  let btnText = liked ?
    'Remove from Favorits' :
    'Add to favorits';

  const data: movieInterface = movie!;
  const {
    poster_path, 
    backdrop_path,
    title,
    genres,
    vote_average,
    overview,
    release_date
  } = data;

  let genresToString = genres.reduce((string: string, genre: any) => {
    return string += ` ${genre.name}`;
  }, '');
  console.log(poster_path, backdrop_path);
  console.log(backdrop_path ? backdrop_path : poster_path);


  const src = poster_path ? `http://image.tmdb.org/t/p/w342/${backdrop_path ? backdrop_path : poster_path}` : posterPlaceholder;

  const poster = movie? <img src={src} alt={title} className='pic-sizer' /> : <Spinner />;
    

  return (

    <ErrorBoundry>
      <div>
        <div className='flex-container border border-black'>
          <div className='d-flex pic-container' >
            {poster}
          </div>
          <div className='card card-body'>
            <h1>{title}</h1>
            <span className="text-muted spacer">Rating: {vote_average}</span>
            <article className="spacer">{overview}</article>
            <span className="spacer">Genres:{genresToString}</span>
            <span className="spacer">Release date: {release_date}</span>
            <button
              className='btn btn-outline-secondary'
              onClick={() => {
                setLiked(!liked);
                toggleFavorit(data)
              }}>
              {btnText}
            </button>
          </div>
        </div >

        {recommended ?
          <div>
            <h2 className='notif'>You may also like:</h2>
            <CardList list={recommended} />
          </div> :
          <Spinner />}
      </div>
    </ErrorBoundry>
  );
}
export default MovieDescription;
