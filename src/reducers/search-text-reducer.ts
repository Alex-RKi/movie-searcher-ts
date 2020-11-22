import {
  SAVE_SEARCH_TEXT,
  searchTextActionType
} from "../actions";

const initialState = {
  searchText: null as null | string
};
type InitialStateType = typeof initialState;

//reducer
function searchTextReducer (
  state: InitialStateType = initialState,
  action: searchTextActionType
)  {
  switch (action.type) {
    case 'SAVE_SEARCH_TEXT':
      return {
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export default searchTextReducer;