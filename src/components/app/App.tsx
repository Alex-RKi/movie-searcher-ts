import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundry from '../error_boundry';
import MovieDBService from '../../services'
import { MDBServiceContext, MDBServiceInterface } from '../movie-db-service-provider';

import Footer from '../footer';
import Header from '../header';
import Spinner from '../spinner';
import { Home, Favorits, MovieDescription } from '../pages'

interface ResponseInterface {
  readonly page: number,
  readonly results: [],
  readonly total_pages: number,
  readonly total_results: number
}

function App() {
  const movieDBService = new MovieDBService();
  const initialFavorited: Array<number> = [];
  const [data, setData] = useState([]);
  const [favoritsList, setFavorited] = useState(initialFavorited);
  // const [unfavorited, cutFavorit] = useState([]);
  console.log(`favorits ` + favoritsList);

  useEffect(() => {
    console.log('update state');
    movieDBService.getPopular()
      .then((response: ResponseInterface) => {
        const data: [] = response.results;
        setData(data);
      })
  }, []);
  const addToList = (id: number, arr: Array<number> | []): Array<number> => {
    return [...arr, id];
  }
  const removeFromList = (id: any, arr: Array<number> | []): Array<number> => {

    const index: any = arr.indexOf(id);
    return [
      ...arr.slice(0, index),
      ...arr.slice(index + 1)
    ];
  }
  const toggleFavorit: Function = (id: any) => {
    favoritsList.includes(id) ? 
    setFavorited(removeFromList(id, favoritsList)) : 
    setFavorited(addToList(id, favoritsList));

  }
  const deleteFromFavorits: Function = (id: number) => {
    console.log('id');

  }


  const searchInquire: Function = (query: string) => {
    console.log(query);
  };
  const MDBSProviderData: MDBServiceInterface = {
    id: 3,
    favoritsList: favoritsList,
    popularsList: data,
    page: 3,
    toggleFavorit,
    deleteFromFavorits,
    searchInquire: searchInquire,
    searchResults: []
  }

  return (
    <div>
      <span>{ }</span>
      <ErrorBoundry>
        <MDBServiceContext.Provider value={MDBSProviderData}>

          <Router>
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/description' component={MovieDescription} />
              <Route path='/favorits' component={Favorits} />


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