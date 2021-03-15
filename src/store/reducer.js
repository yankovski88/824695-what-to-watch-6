import {ActionType} from "../store/action";
import {getFilmData} from "../components/mock/film";
import {getGenreFilms} from "../utils/utils";

const NUMBER_FILM = 8; // число фильмов за раз

const firstMainFilms = getFilmData().slice(0, 8);
const likeFilms = getFilmData().slice(8, 12);


export const mainFilms = [...firstMainFilms, ...likeFilms]; // весь массив данных по фильмам

// начальное состояние хранилища store
// Определяем действия
const initialState = {
  countShowFilm: 8,
  genreActive: `All genres`,
  films: mainFilms,
};


// код который наосновании action изменяет хранилище(состояние) приложения
const reducer = (state = initialState, action) => {
  switch (action.type) { // action.type приходит объект с название action что произашло
    case ActionType.ALL:
      return {
        ...initialState
      };

    case ActionType.COMEDIES: // если пришло комедии, то изменяем хранилище на комедии
      return {
        genreActive: ActionType.COMEDIES,
        films: getGenreFilms(ActionType.COMEDIES, mainFilms),
      };

    case ActionType.CRIME:
      return {
        genreActive: ActionType.CRIME,
        films: getGenreFilms(ActionType.CRIME, mainFilms)
      };
    case ActionType.DOCUMENTARY:
      return {
        genreActive: ActionType.DOCUMENTARY,
        films: getGenreFilms(ActionType.DOCUMENTARY, mainFilms)
      };
    case ActionType.DRAMAS:
      return {
        genreActive: ActionType.DRAMAS,
        films: getGenreFilms(ActionType.DRAMAS, mainFilms)
      };
    case ActionType.HORROR:
      return {
        genreActive: ActionType.HORROR,
        films: getGenreFilms(ActionType.HORROR, mainFilms)
      };
    case ActionType.KIDS:
      return {
        genreActive: ActionType.KIDS,
        films: getGenreFilms(ActionType.KIDS, mainFilms)
      };
    case ActionType.ROMANCE:
      return {
        genreActive: ActionType.ROMANCE,
        films: getGenreFilms(ActionType.ROMANCE, mainFilms)
      };
    case ActionType.SCI:
      return {
        genreActive: ActionType.SCI,
        films: getGenreFilms(ActionType.SCI, mainFilms)
      };
    case ActionType.THRILLERS:
      return {
        genreActive: ActionType.THRILLERS,
        films: getGenreFilms(ActionType.THRILLERS, mainFilms)
      };
    case ActionType.MORE_FILM:
      if (state.films.length - state.countShowFilm > NUMBER_FILM) {
        return {
          genreActive: state.genreActive,
          countShowFilm: state.countShowFilm + NUMBER_FILM,
          films: state.films,
        };
      } else {
        return {
          genreActive: state.genreActive,
          films: state.films,
          countShowFilm: state.countShowFilm + state.films.length - state.countShowFilm
        };
      }
  }

  return state;
};

export {reducer};
