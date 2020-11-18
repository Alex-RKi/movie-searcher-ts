import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundry from '../error_boundry';
import MovieDBService from '../../services';
import { MDBServiceContext, MDBServiceInterface } from '../movie-db-service-provider';
import { movieInterface } from '../../interfaces'
import Footer from '../footer';
import Header from '../header';
import CardList from '../cards-list';
import { MovieDescription } from '../pages'

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

  useEffect(() => {
    console.log('update state');
    movieDBService.getPopular()
      .then((response: ResponseInterface) => {
        const popularsList: [] = response.results;
        savePopulars(popularsList)
      });
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
  const toggleFavorit: Function = (movieData: movieInterface) => {
    const { id } = movieData
    favoritsList.findIndex((movie: movieInterface) => movie.id === id)
      > -1 ?
      setFavorited(removeFromList(id, favoritsList)) :
      setFavorited(addToList(movieData, favoritsList));
  }
  const searchInquire: Function = (query: string) => {
    console.log(query);
  };
  const MDBSProviderData: MDBServiceInterface = {
    favoritsList,
    popularsList,
    page: 3,
    toggleFavorit,
    searchInquire: searchInquire,
    searchResults: [],
    recommededList: []
  }
  return (
    <div className='bg-gradient-light d-flex flex-row flex-grow flex-wrap'>
      <span>{ }</span>
      <ErrorBoundry>
        <MDBServiceContext.Provider value={MDBSProviderData}>
          <Router>
            <Header />
            <Switch>
              <Route path='/' exact
                render={(): any => <CardList list={popularsList} />}
              />
              <Route path='/favorits'
                render={() => <CardList list={favoritsList} />}
              />
              <Route path='/description/:id'
                render={({ match }): any => {
                  const { id } = match.params;
                  return <MovieDescription  id={id} />
                }}
              />

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

/*
{
  "popularity": 2139.868,
  "vote_count": 189,
  "video": false,
  "poster_path": "/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg",
  "id": 671039,
  "adult": false,
  "backdrop_path": "/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg",
  "original_language": "fr",
  "original_title": "Bronx",
  "genre_ids": [
    53,
    28,
    18,
    80
  ],
  "Я": "Rogue City",
  "vote_average": 6.1,
  "overview": "Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.",
  "release_date": "2020-10-30"
}
*/