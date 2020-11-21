import { movieInterface } from "../interfaces";

//actions
const UPDATE_FAVORITS = "UPDATE_FAVORITS";
const SAVE_SEARCH_RESULTS = "SAVE_SEARCH_RESULTS";
//actions types
type UpdateFavoritsActionType = {
  type: typeof UPDATE_FAVORITS;
  payload: movieInterface[];
};
type SaveSearchResultsActionType = {
  type: typeof SAVE_SEARCH_RESULTS;
  payload: movieInterface[];
};
//action creators
const UpdateFavorit: Function = (
  payload: movieInterface[]
): UpdateFavoritsActionType => {
  return {
    type: UPDATE_FAVORITS,
    payload,
  };
};
const SaveSearchResults: Function = (
  payload: movieInterface[]
): SaveSearchResultsActionType => {
  return {
    type: SAVE_SEARCH_RESULTS,
    payload,
  };
};

export {
  UpdateFavorit,
  SaveSearchResults,
  UPDATE_FAVORITS,
  SAVE_SEARCH_RESULTS,
};
