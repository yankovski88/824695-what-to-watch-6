import {adaptToClient, getGenreFilms} from "../../utils/utils";
import {ALL_GENRES, NUMBER_FILM, RoutePaths} from "../../constants/constants";
import {ActionType} from "../action";


const initialState = {
  countShowFilm: 8, // число сколько фильмов отрендерить
  isDataLoaded: false, // загрузились ли фильмы с сервера
  genre: ALL_GENRES, // начальный жанр для main.jsx
  genreFilms: [], // фильмы отсортированные по жанру
  films: [], // загруженные фильмы с сервера все
  filmById: {}, // фильм полученный с помощью маршрута id
  isFilmLoaded: false, // нужный фильм загрузился
  isFilmFound: false, // флаг если фильм получили т.е. через поиск напрямую id верный
  requestedRoute: RoutePaths.MAIN, // маршрут подставляется если пришел юзер не авторизованный
  filmPromo: {}, // фильм на главной странице
  isAllComments: false, // все коменты полученны
  allComments: [], // массив комментов пуст

  isAddReview: true, // нужно чтобы бы знать или комент добавлен
  isAddReviewFail: false, // флаг на форму комента
};

export const allMovies = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_FILMS: // первое загрузили все фильмы
      return {
        ...state,
        isDataLoaded: true,
        films: action.payload.map((film) => { // по массиву объектов фильмов прошлись
          return adaptToClient(film); // и каждый объект пропустили через адатпер и вернули этот массив
        })
      };
    case ActionType.GENRE: // когда в main будет клик по жанру он сменится с undefined на выбранный
      return {
        ...state, // это нужно чтобы вывесте все данные и не писать все построчно
        genre: action.payload,
        genreFilms: getGenreFilms(action.payload, state.films),
        countShowFilm: 8,
      };
    case ActionType.MORE_FILM:
      return {
        ...state,
        countShowFilm: state.countShowFilm + NUMBER_FILM,
      };

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


    case ActionType.GET_ALL_COMMENTS:
      return {
        ...state,
        // здесь должен быть объект с комментами
        allComments: action.payload,
        isFilmFound: true,
        isAllComments: true,
      };

    case ActionType.CHANGE_IS_ADD_REVIEW:
      return {
        ...state,
        isAddReview: action.payload,
        isAllComments: false,
      };
    case ActionType.IS_ADD_REVIEW_FAIL:
      return {
        ...state,
        isAddReviewFail: action.payload,
      };


    default:
      return state;
  }
};
