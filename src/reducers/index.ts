import { movieInterface } from "../interfaces";

const initialState = {
  favorits: null as null | movieInterface[],
  searchResults: null as null | movieInterface[],
};
type InitialStateType = typeof initialState;



//actionCreators


const reducer = (state = initialState, action ) => {
  switch (action.type) {
    case UPDATE_FAVORITS:
      return {
        favorits: action.payload,
      };
    case SAVE_SEARCH_RESULTS:
      return {
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
