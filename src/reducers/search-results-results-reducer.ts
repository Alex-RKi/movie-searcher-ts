import { movieInterface } from "../interfaces";
import { SAVE_SEARCH_RESULTS, SaveSearchResultsActionType } from "../actions";

const initialState = {
  searchResults: null as null | movieInterface[],
};
type InitialStateType = typeof initialState;

//reducer
function searchResultsReducer(
  state: InitialStateType = initialState,
  action: SaveSearchResultsActionType
) {
  switch (action.type) {
    case SAVE_SEARCH_RESULTS:
      return {
        searchResults: action.payload,
      };
    default:
      return state;
  }
}

export default searchResultsReducer;
