import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundry from '../error_boundry';
import MovieDBService from '../../services'
import { MovieDBServiceProvider } from '../movie-db-service-provider';
import Footer from '../footer';
import Header from '../header';
import Spinner from '../spinner';
import { Home, Favorits, MovieDescription } from '../pages'


function App() {

  const movieDBService = new MovieDBService();

  return (
    <div>
      <span>{ }</span>
      <ErrorBoundry>
        <MovieDBServiceProvider value={movieDBService}>
          {/* <Header /> */}
          <Router>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/description' component={MovieDescription}/>
              <Route path='/Favorits' component={Favorits}/>

              <Home />
              <MovieDescription />
              <Favorits />
            </Switch>
            
          </Router>
          <Footer />
        </MovieDBServiceProvider>
      </ErrorBoundry>
    </div>
  );
}

export default App;

// error
//    provider
//        router
//            app body