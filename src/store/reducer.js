import {ActionType} from "../store/action";
import {getFilmData} from "../components/mock/film";
import {getGenreFilms} from "../utils/utils";
import {ALL_GENRES} from "../constants/constants";

const NUMBER_FILM = 8; // число фильмов за раз


const firstMainFilms = getFilmData().slice(0, 8);
const likeFilms = getFilmData().slice(8, 12);


export const mainFilms = [...firstMainFilms, ...likeFilms]; // весь массив данных по фильмам

// начальное состояние хранилища store
// Определяем действия
const initialState = {
  countShowFilm: 8,
  genre: ALL_GENRES,
  films: mainFilms,
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE:
      return {
        ...state,
        genre: action.payload,
        films: getGenreFilms(action.payload, mainFilms),
        countShowFilm: 8,
      };
    case ActionType.MORE_FILM:
      if (state.films.length - state.countShowFilm > NUMBER_FILM) {
        return {
          genre: state.genre,
          countShowFilm: state.countShowFilm + NUMBER_FILM,
          films: state.films,
        };
      } else {
        return {
          genre: state.genre,
          films: state.films,
          countShowFilm: state.countShowFilm + state.films.length - state.countShowFilm
        };
      }

    default:
      return state;
  }
};
