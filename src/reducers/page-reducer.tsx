import {
  SAVE_PAGE,
  savePageActionType
} from "../actions";

const initialState = {
  page: null as null | number
};
type InitialStatePageType = typeof initialState;

//reducer
function pageReducer (
  state: InitialStatePageType = initialState,
  action: savePageActionType
)  {
  switch (action.type) {
    case SAVE_PAGE:
      return {
        page: action.payload,
      };
    default:
      return state;
  }
};
export type { InitialStatePageType}
export  {pageReducer};