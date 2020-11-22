import { movieInterface } from "../interfaces";
import {
  GET_POPULARS,
  GetPopularsActionType
} from "../actions";

const initialState = {
  populars: null as null | movieInterface[]
};
type InitialStateType = typeof initialState;

//reducer
function popularsReducer (
  state: InitialStateType = initialState,
  action: GetPopularsActionType
)  {
  switch (action.type) {
    case GET_POPULARS:
      return {
        populars: action.payload,
      };
    default:
      return state;
  }
};

export default popularsReducer;