import {ActionType} from "../store/action";
import {getFilmData} from "../components/mock/film";
import {getGenreFilms} from "../utils/utils";
import {ALL_GENRES, NUMBER_FILM} from "../constants/constants";


// метод Адаптер который адоптирует данные от сервера на читаемые данные для клиента
const adaptToClient = (film)=> { // получаем объект с неугодными нам полями изменили названия полей, удалили старые серверные и вернули отредоктированный объект

  const adaptedPoint = Object.assign(
    {},
    film,
    {
      // в basePrice записали, то что пришло с сервера, плюс можно модифицировать данные как с датой
      backgroundColor: film.background_color,
      backgroundImage: film.background_image,
      isFavorite: film.is_favorite,
      posterImage: film.poster_image,
      previewImage: film.preview_image,
      previewVideoLink: film.preview_video_link,
      runTime: film.run_time,
      scoresCount: film.scores_count,
      videoLink: film.video_link,

      // dateFrom: new Date(point.date_from),
      // dateTo: new Date(point.date_to),
      // isFavorite: point.is_favorite,
    }
  );

  // Ненужные ключи мы удаляем
  delete adaptedPoint.background_color;
  delete adaptedPoint.background_image;
  delete adaptedPoint.is_favorite;
  delete adaptedPoint.poster_image;
  delete adaptedPoint.preview_image;
  delete adaptedPoint.preview_video_link;
  delete adaptedPoint.run_time;
  delete adaptedPoint.scores_count;
  delete adaptedPoint.video_link;

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
  isDataLoaded: false,
  likeGenre: ``,
  likeFilms: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE:
//       console.log(state.films)
//       console.log(action.payload)
// console.log(getGenreFilms(action.payload, state.films))
//       console.log(state.films)

      return {
        ...state,
        genre: action.payload,
        // films: getGenreFilms(action.payload, state.films),
        genreFilms: getGenreFilms(action.payload, state.films),
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

      return {
        ...state,
        isDataLoaded: true,
        films: action.payload.map((film)=>{return adaptToClient(film) })
        //   .map(
        //   adaptToClient()
        //   // points.map(PointsModel.adaptToClient))
        // )
      };

    case ActionType.LIKE_FILMS:
      return {
        ...state,
        likeGenre: action.payload,
        likeFilms: []
      }
    default:
      return state;
  }
};
