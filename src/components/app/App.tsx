import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundry from '../error_boundry';
import MovieDBService from '../../services'
import { MDBServiceContext, MDBServiceInterface } from '../movie-db-service-provider';

import Footer from '../footer';
import Header from '../header';
import Spinner from '../spinner';
import { Populars, Favorits, MovieDescription } from '../pages'

interface ResponseInterface {
  readonly page: number,
  readonly results: [],
  readonly total_pages: number,
  readonly total_results: number
}

function App() {
  const movieDBService = new MovieDBService();
  const initial: any = [];
  const [popularsList, savePopulars] = useState(initial);
  const [favoritsList, setFavorited] = useState(initial);
  console.log(`favorits `);
  console.log(favoritsList);
  console.log(`**********`);

  useEffect(() => {
    console.log('update state');
    movieDBService.getPopular()
      .then((response: ResponseInterface) => {
        const popularsList: [] = response.results;
        savePopulars(popularsList);
      })
  }, []);

  const addToList = (data: object, arr: Array<object> | []): Array<object> => {
    return [...arr, data];
  }
  const removeFromList = (id: any, arr: Array<any> | []): Array<object> => {
    const index: number = arr.findIndex(elem => elem.id === id);
    return [
      ...arr.slice(0, index),
      ...arr.slice(index + 1)
    ];
  }
  const toggleFavorit: Function = (id: any, movieData: object) => {
    favoritsList.findIndex((movie: any) => movie.id === id) > -1 ?
      setFavorited(removeFromList(id, favoritsList)) :
      setFavorited(addToList(movieData, favoritsList));
  }

  const searchInquire: Function = (query: string) => {
    console.log(query);
  };
  const MDBSProviderData: MDBServiceInterface = {
    id: 3,
    favoritsList: favoritsList,
    popularsList: popularsList,
    page: 3,
    toggleFavorit,
    searchInquire: searchInquire,
    searchResults: []
  }
  return (
    <div className='bg-gradient-light d-flex flex-row flex-grow flex-wrap'>
      <span>{ }</span>
      <ErrorBoundry>
        <MDBServiceContext.Provider value={MDBSProviderData}>
          <Router>
            <Header />
            <Switch>
              <Route path='/' exact component={Populars} />
              <Route path='/favorits' component={Favorits} />
              <Route path='/description' component={MovieDescription} />

            </Switch>
          </Router>
          <Footer />
        </MDBServiceContext.Provider>
      </ErrorBoundry>
    </div>
  );
}
export default App;

/*
adult: false
backdrop_path: "/wu1uilmhM4TdluKi2ytfz8gidHf.jpg"
genre_ids: Array(5) [ 14, 16, 12, … ]
id: 400160
original_language: "en"
original_title: "The SpongeBob Movie: Sponge on the Run"
overview: "When his ...."
popularity: 1860.606
poster_path: "/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg"
release_date: "2020-08-14"
title: "The SpongeBob Movie: Sponge on the Run"
video: false
vote_average: 8.2
vote_count: 1238
*/