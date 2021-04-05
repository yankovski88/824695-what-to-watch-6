import {ActionType} from "../action";
import {RoutePaths} from "../../constants/constants";
import {adaptToClient} from "../../utils/utils";

const initialState = {
  filmById: {}, // фильм полученный с помощью маршрута id
  isFilmLoaded: false, // нужный фильм загрузился
  isFilmFound: false, // флаг если фильм получили т.е. через поиск напрямую id верный
  requestedRoute: RoutePaths.MAIN, // маршрут подставляется если пришел юзер не авторизованный
};

export const filmGet = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILM_BY_ID:
      return {
        ...state,
        filmById: adaptToClient(action.payload),
        isFilmFound: true,
        isFilmLoaded: true,
        requestedRoute: RoutePaths.MAIN, // маршрут подставляется если пришел юзер не авторизованный
      };
    case ActionType.SET_MOVIE_FAVORITE:
      return {
        ...state,
        films: state.films.map((movie) => {
          if (movie.id === action.payload.movieId) {
            return {
              ...movie,
              isFavorite: action.payload.isFavorite
            };
          } else {
            return movie;
          }
        }),
        filmById: {
          ...state.filmById,
          isFavorite: action.payload.isFavorite,
        }
      };
    case ActionType.ADD_REQUESTED_ROUTE:
      return {
        ...state,
        requestedRoute: action.payload,
      };

    default:
      return state;
  }
};
