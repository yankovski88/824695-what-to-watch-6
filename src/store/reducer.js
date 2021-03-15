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

// const getFilmsClickMoreBtn = (films, countMoreFilm= 0)=>{
//   let countShowFilm = 8;
//   countShowFilm += countMoreFilm;
// }


// начальное состояние хранилища store
// Определяем действия
// let countShowFilm = 8; // сколько фильмов надо показать
const initialState = {
  countShowFilm: 8,
  // countFilm: mainFilms.length - 8,
  genreActive: `All genres`,
  filmsFirst: getFirstPartFilms(mainFilms),
  films: mainFilms,
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
      if(state.films.length - state.countShowFilm > 8){
        return {
          genreActive: state.genreActive,
          countShowFilm: state.countShowFilm + 8,
          films: state.films,
        }
      } else {
        return {
          genreActive: state.genreActive,
          films: state.films,
          countShowFilm: state.countShowFilm + state.films.length - state.countShowFilm
        }
      }

      // countShowFilm:
      // console.log(state.films.length)
      // if(state.films - 8 >= 8){
      //   countShowFilm += 8;
      // } else {
      //   countShowFilm += state.countFilm
      // }
      //
      // for(item of state.films){
      //
      // }

      // console.log(countShowFilm)
      // return {
      //   films: state.films.length
      // };
  }

  return state;
};

export {reducer};
