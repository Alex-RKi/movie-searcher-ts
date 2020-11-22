import { SAVE_LOCATION, SaveLocationActionType } from "../actions";

const initialState = {
  location: null as null | string,
};
type InitialStateType = typeof initialState;

//reducer
function locationReducer(
  state: InitialStateType = initialState,
  action: SaveLocationActionType
) {
  switch (action.type) {
    case SAVE_LOCATION:
      return {
        location: action.payload,
      };
    default:
      return state;
  }
}

export default locationReducer;
