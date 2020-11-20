import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
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
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState('/');

  const trackLocation = (newLocation: string) => {
    setLocation(newLocation);
    saveSearchResults([]);
  }

  useEffect(() => {
    movieDBService.getPopular()
      .then((response: ResponseInterface) => {
        const popularsList: [] = response.results;
        savePopulars(popularsList);
      });
  }, []);
  useEffect((): any => {
    document.addEventListener('scroll', trackScrolling);
    let cancelled = false;
    console.log('locatio is ' + location)
    if (!cancelled && location === '/') searchMovies(searchText, page);
    return () => {
      document.removeEventListener('scroll', trackScrolling);
      cancelled = true;
    }
  }, [searchText, page, location]);

  const isBottom = (el: any) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const getSearchText = (text: string) => {
    saveSearchResults([]);
    saveSearchText(text);
  }
  const trackScrolling = () => {
    const wrappedElement = document.getElementById('footer');
    if (isBottom(wrappedElement)) {
      document.removeEventListener('scroll', trackScrolling);
      const nextPage = page + 1;
      setPage(nextPage);
    }
  };
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
  const searchMovies: Function = (query: string, page: number = 1) => {
    if (query.length < 1) {
      return;
    }
    let inquire = query.toLowerCase();
    let lang: searchLangType = "en-US";
    if (/^[а-яА-Я]+$/.test(inquire)) {
      lang = "ru-RU";
      inquire = encodeURI(inquire);
    }
    movieDBService.searchMovie(inquire, lang, page)
      .then((response: ResponseInterface) => {
        if (response.results.length < 1) return;
        const newResult = filterResults(searchResults, response.results)
        saveSearchResults(newResult);
      });
  };
  const filterResults = (prevRes: any, newRes: any) => {
    const ids = new Set(prevRes.map((d: any) => d.id));
    return [...prevRes, ...newRes.filter((d: any) => !ids.has(d.id))]
  }
  const MDBSProviderData: MDBServiceInterface = {
    favoritsList,
    popularsList,
    page: 3,
    toggleFavorit,
    searchMovies,
    searchResults: [],
    recommededList: [],
  }
  return (
    <ErrorBoundry>
      <MDBServiceContext.Provider value={MDBSProviderData}>
        <div className='d-flex flex-column flex-shrink-1 bg-gradient-light'>
          <Router>
            <Header
              trackLocation={trackLocation}
              getSearchText={getSearchText}
            />
            <Switch>
              <Route path='/' exact
                render={(): any => <CardList list={searchText ? searchResults : popularsList} />}
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
