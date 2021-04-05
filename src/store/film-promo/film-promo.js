import {ActionType} from "../action";
import {adaptToClient} from "../../utils/utils";

const initialState = {
  filmById: {}, // фильм полученный с помощью маршрута id
  isFilmLoaded: false, // нужный фильм загрузился
  isFilmFound: false, // флаг если фильм получили т.е. через поиск напрямую id верный
};

export const FilmPromo = (state = initialState, action) => {
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
