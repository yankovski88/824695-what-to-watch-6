import {adaptToClient, getGenreFilms} from "../../utils/utils";
import {ALL_GENRES, NUMBER_FILM} from "../../constants/constants";
import {ActionType} from "../action";


const initialState = {
  countShowFilm: 8, // число сколько фильмов отрендерить
  isDataLoaded: false, // загрузились ли фильмы с сервера
  genre: ALL_GENRES, // начальный жанр для main.jsx
  genreFilms: [], // фильмы отсортированные по жанру
  films: [], // загруженные фильмы с сервера все
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
    default:
      return state;
  }
};
