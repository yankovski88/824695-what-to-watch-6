import {ActionType} from "../store/action";
import {getFilmData} from "../components/mock/film";
import {getGenreFilms} from "../utils/utils";

const firstMainFilms = getFilmData().slice(0, 8);
const likeFilms = getFilmData().slice(9, 13);
export const mainFilms = [...firstMainFilms, ...likeFilms];

const initialState = {
// Определяем действия
  genreActive: `All genres`,
  films: mainFilms
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ALL:
      return {
        ...initialState
      };

    case ActionType.COMEDIES:
      return {
        genreActive: ActionType.COMEDIES,
        films: getGenreFilms(ActionType.COMEDIES, mainFilms)
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
  }

  return state;
};

export {reducer};
