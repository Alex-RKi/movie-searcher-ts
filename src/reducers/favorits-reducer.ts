import { movieInterface } from "../interfaces";
import {
  UPDATE_FAVORITS,
  UpdateFavoritsActionType
} from "../actions";

const initialState = {
  favorits: null as null | movieInterface[]
};
type InitialStateType = typeof initialState;

//reducer

function favoritsReducer (
  state: InitialStateType = initialState,
  action: UpdateFavoritsActionType
)  {
  switch (action.type) {
    case UPDATE_FAVORITS:
      return {
        favorits: action.payload,
      };
    default:
      return state;
  }
};

export default favoritsReducer;