import { movieInterface } from "../interfaces";
import { UPDATE_FAVORITS, UpdateFavoritsActionType } from "../actions";

const initialState = {
  favoritsList: null as null | movieInterface[],
};
type InitialStateFavoritsListType = typeof initialState;

//reducer

function favoritsReducer(
  state: InitialStateFavoritsListType = initialState,
  action: UpdateFavoritsActionType
) {
  switch (action.type) {
    case UPDATE_FAVORITS:
      return {
        favoritsList: action.payload,
      };
    default:
      return state;
  }
}
export type { InitialStateFavoritsListType };
export { favoritsReducer };
