import {
  SAVE_PAGE,
  savePageActionType
} from "../actions";

const initialState = {
  page: null as null | number
};
type InitialStateType = typeof initialState;

//reducer
function pageReducer (
  state: InitialStateType = initialState,
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

export default pageReducer;