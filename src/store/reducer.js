import {ActionType} from "../store/action";
import {getFilmData} from "../components/mock/film";
import {getGenreFilms} from "../utils/utils";
import {ALL_GENRES, NUMBER_FILM} from "../constants/constants";


// метод Адаптер который адоптирует данные от сервера на читаемые данные для клиента
const adaptToClient = (point)=> { // получаем объект с неугодными нам полями изменили названия полей, удалили старые серверные и вернули отредоктированный объект

  const adaptedPoint = Object.assign(
    {},
    point,
    {
      // в basePrice записали, то что пришло с сервера, плюс можно модифицировать данные как с датой
      basePrice: point.base_price,
      dateFrom: new Date(point.date_from),
      dateTo: new Date(point.date_to),
      isFavorite: point.is_favorite,
    }
  );

  // Ненужные ключи мы удаляем
  delete adaptedPoint.base_price;
  delete adaptedPoint.date_from;
  delete adaptedPoint.date_to;
  delete adaptedPoint.is_favorite;

  return adaptedPoint;
}

// и метод который адаптирует клиентские данные для сервера
const adaptToServer = (point) => {
  const adaptedPoint = Object.assign(
    {},
    point,
    {
      "date_from": new Date(point.dateFrom).toISOString(), // На сервере дата хранится в ISO формате
      "date_to": new Date(point.dateTo).toISOString(),
      "base_price": parseInt(point.basePrice, 10) ? parseInt(point.basePrice, 10) : 0,
      "is_favorite": point.isFavorite,
    }
  );

  // Ненужные ключи мы удаляем
  delete adaptedPoint.dateFrom;
  delete adaptedPoint.dateTo;
  delete adaptedPoint.basePrice;
  delete adaptedPoint.isFavorite;

  return adaptedPoint;
}






const firstMainFilms = getFilmData().slice(0, 8);
const likeFilms = getFilmData().slice(8, 12);


export const mainFilms = [...firstMainFilms, ...likeFilms]; // весь массив данных по фильмам

// начальное состояние хранилища store
// Определяем действия
const initialState = {
  countShowFilm: 8,
  genre: ALL_GENRES,
  films: [], // mainFilms
  isDataLoaded: false
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
      };
    case ActionType.GET_ALL_FILMS:
      console.log(action.payload)
      return {
        ...state,
        isDataLoaded: true,
        films: action.payload
      };

    default:
      return state;
  }
};
