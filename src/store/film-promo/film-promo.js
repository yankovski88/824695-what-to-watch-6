import {ActionType} from "../action";
import {adaptToClient} from "../../utils/utils";

const initialState = {
  filmPromo: {}, // фильм на главной странице
};

export const filmPromo = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILM_PROMO:
      return {
        ...state,
        filmPromo: adaptToClient(action.payload), // и каждый объект пропустили через адатпер и вернули этот массив
      };
    case ActionType.SET_PROMO_MOVIE_FAVORITE:
      return {
        ...state,
        filmPromo: {
          ...state.filmPromo,
          isFavorite: action.payload,
        }
      };
    default:
      return state;
  }
};
