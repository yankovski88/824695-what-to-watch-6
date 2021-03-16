import {ActionType} from "../store/action";
import {getFilmData} from "../components/mock/film";
import {getGenreFilms} from "../utils/utils";
import {ALL_GENRES} from "../constants/constants";

const NUMBER_FILM = 8; // число фильмов за раз


const firstMainFilms = getFilmData().slice(0, 8);
const likeFilms = getFilmData().slice(8, 12);


export const mainFilms = [...firstMainFilms, ...likeFilms]; // весь массив данных по фильмам
console.log(mainFilms)

// начальное состояние хранилища store
// Определяем действия
const initialState = {
  countShowFilm: 8,
  genre: ALL_GENRES,
  films: mainFilms,
};

export const reducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case ActionType.GENRE:
      return {
        ...state,
        genre: action.payload,
        films: getGenreFilms(action.payload, mainFilms),
      };
    case ActionType.MORE_FILM:
      if (state.films.length - state.countShowFilm > NUMBER_FILM) {
        return {
          // genreActive: state.genreActive,
          genre: state.genre,
          countShowFilm: state.countShowFilm + NUMBER_FILM,
          films: state.films,
        };
      } else {
        return {
          // genreActive: state.genreActive,
          genre: state.genre,
          films: state.films,
          countShowFilm: state.countShowFilm + state.films.length - state.countShowFilm
        };
      }

    default:
      return state;
  }
};


// // код который наосновании action изменяет хранилище(состояние) приложения
// const reducer = (state = initialState, action) => {
//   switch (action.type) { // action.type приходит объект с название action что произашло
//     case ActionType.ALL:
//       return {
//         ...initialState
//       };
//
//     case ActionType.COMEDIES: // если пришло комедии, то изменяем хранилище на комедии
//       return {
//         countShowFilm: 8,
//         genreActive: ActionType.COMEDIES,
//         films: getGenreFilms(ActionType.COMEDIES, mainFilms),
//       };
//
//     case ActionType.CRIME:
//       return {
//         countShowFilm: 8,
//         genreActive: ActionType.CRIME,
//         films: getGenreFilms(ActionType.CRIME, mainFilms)
//       };
//     case ActionType.DOCUMENTARY:
//       return {
//         countShowFilm: 8,
//         genreActive: ActionType.DOCUMENTARY,
//         films: getGenreFilms(ActionType.DOCUMENTARY, mainFilms)
//       };
//     case ActionType.DRAMAS:
//       return {
//         countShowFilm: 8,
//         genreActive: ActionType.DRAMAS,
//         films: getGenreFilms(ActionType.DRAMAS, mainFilms)
//       };
//     case ActionType.HORROR:
//       return {
//         countShowFilm: 8,
//         genreActive: ActionType.HORROR,
//         films: getGenreFilms(ActionType.HORROR, mainFilms)
//       };
//     case ActionType.KIDS:
//       return {
//         countShowFilm: 8,
//         genreActive: ActionType.KIDS,
//         films: getGenreFilms(ActionType.KIDS, mainFilms)
//       };
//     case ActionType.ROMANCE:
//       return {
//         countShowFilm: 8,
//         genreActive: ActionType.ROMANCE,
//         films: getGenreFilms(ActionType.ROMANCE, mainFilms)
//       };
//     case ActionType.SCI:
//       return {
//         countShowFilm: 8,
//         genreActive: ActionType.SCI,
//         films: getGenreFilms(ActionType.SCI, mainFilms)
//       };
//     case ActionType.THRILLERS:
//       return {
//         countShowFilm: 8,
//         genreActive: ActionType.THRILLERS,
//         films: getGenreFilms(ActionType.THRILLERS, mainFilms)
//       };
//     case ActionType.MORE_FILM:
//       if (state.films.length - state.countShowFilm > NUMBER_FILM) {
//         return {
//           genreActive: state.genreActive,
//           countShowFilm: state.countShowFilm + NUMBER_FILM,
//           films: state.films,
//         };
//       } else {
//         return {
//           genreActive: state.genreActive,
//           films: state.films,
//           countShowFilm: state.countShowFilm + state.films.length - state.countShowFilm
//         };
//       }
//   }
//
//   return state;
// };
//
// export {reducer};
