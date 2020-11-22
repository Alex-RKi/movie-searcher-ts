import { movieInterface } from "../interfaces";
import { GET_POPULARS, GetPopularsActionType } from "../actions";

const initialState = {
  popularsList: null as null | movieInterface[],
};
type InitialStatePopularsListType = typeof initialState;

//reducer
function popularsReducer(
  state: InitialStatePopularsListType = initialState,
  action: GetPopularsActionType
) {
  switch (action.type) {
    case GET_POPULARS:
      return {
        popularsList: action.payload,
      };
    default:
      return state;
  }
}
export { popularsReducer };
