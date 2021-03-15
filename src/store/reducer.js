import {ActionType} from "../store/action";
import {getFilmData} from "../components/mock/film";
import {getGenreFilms} from "../utils/utils";

const firstMainFilms = getFilmData().slice(0, 8);
const likeFilms = getFilmData().slice(8, 12);
export const mainFilms = [...firstMainFilms, ...likeFilms]; // весь массив данных по фильмам

const getFirstPartFilms = (films)=>{
  if(films.length / 8 > 1){
    let a = 0;
    let b = 8;
    return films.slice(a, b)
  }
  return films
}


// начальное состояние хранилища store
// Определяем действия
const initialState = {
  countFilm: mainFilms.length - 8,
  genreActive: `All genres`,
  films: getFirstPartFilms(mainFilms)
};

// getFirstPartFilms()
console.log(getGenreFilms(ActionType.COMEDIES, mainFilms))
console.log(mainFilms)

// код который наосновании action изменяет хранилище(состояние) приложения
const reducer = (state = initialState, action) => {
  switch (action.type) { // action.type приходит объект с название action что произашло
    case ActionType.ALL:
      return {
        ...initialState
      };

    case ActionType.COMEDIES: // если пришло комедии, то изменяем хранилище на комедии
      const films = getFirstPartFilms(getGenreFilms(ActionType.COMEDIES, mainFilms))
      return {
        countFilm: films.length - 8,
        genreActive: ActionType.COMEDIES,
        films: films
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
      console.log(state.films.length)
      // return {
      //   films: state.films.length
      // };
  }

  return state;
};

export {reducer};
