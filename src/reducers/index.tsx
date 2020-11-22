import Redux from 'redux';
import favoritsReducer from './favorits-reducer';
import searchResultsReducer from './search-results-results-reducer';
import popularsReducer from './populars-reducer';
import searchTextReducer from './search-text-reducer';
import pageReducer from './page-reducer';
import locationReducer from './location-reducer';

const rootReducer = Redux.combineReducers({
  favorits: favoritsReducer,
  searchResults: searchResultsReducer,
  populars: popularsReducer,
  searchText: searchTextReducer,
  page: pageReducer,
  location: locationReducer
})

export { rootReducer };
