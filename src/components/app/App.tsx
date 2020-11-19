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
type searchLangType = "en-US" | "ru-RU";


function App() {
  const movieDBService = new MovieDBService();
  const initial: any = [];
  const [popularsList, savePopulars] = useState(initial);
  const [favoritsList, setFavorited] = useState(initial);
  const [searchResults, saveSearchResults] = useState(initial);
  const [searchText, saveSearchText] = useState('');

  useEffect(() => {
    console.log('update state');
    movieDBService.getPopular()
      .then((response: ResponseInterface) => {
        const popularsList: [] = response.results;
        savePopulars(popularsList);

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

  const searchMovies: Function = (query: string) => {
    if (query !== searchText) {
      saveSearchText(query);
    } else return;
    if (query.length < 3) {
      return;
    }

    let iquire = searchText;
    console.log('inquire is ' + iquire)
    let lang: searchLangType = "en-US";
    if (/^[а-яА-Я]+$/.test(searchText)) {
      lang = "ru-RU";
      iquire = encodeURI(searchText);
    }
    movieDBService.searchMovie(iquire, lang)
      .then((response: ResponseInterface) => {
        saveSearchResults(response.results)
      });
  };
  const MDBSProviderData: MDBServiceInterface = {
    favoritsList,
    popularsList,
    page: 3,
    toggleFavorit,
    searchMovies,
    searchResults: [],
    recommededList: [],
    saveSearchText
  }

  console.log('Text is ' + searchText);
  return (

    <ErrorBoundry>
      <MDBServiceContext.Provider value={MDBSProviderData}>
        <div className='d-flex flex-column flex-shrink-1 bg-gradient-light'>
          <Router>
            <Header />
            <Switch>
              <Route path='/' exact
                render={(): any => <CardList list={searchText ? searchResults : popularsList} />}
              />
              <Route path='/results'
                render={(): any => <CardList list={searchResults} />}
              />
              <Route path='/favorits'
                render={() => <CardList list={favoritsList} />}
              />
              <Route path='/description/:id'
                render={({ match }): any => {
                  const { id } = match.params;
                  return <MovieDescription id={id} />
                }}
              />
            </Switch>
          </Router>
          <Footer />
        </div>
      </MDBServiceContext.Provider>
    </ErrorBoundry>

  );
}
export default App;
