import {ActionType} from "../store/action";
import {getFilmData} from "../components/mock/film";
import {getGenreFilms} from "../utils/utils";
import {ALL_GENRES, NUMBER_FILM} from "../constants/constants";


// метод Адаптер который адоптирует данные от сервера на читаемые данные для клиента
const adaptToClient = (film)=> { // получаем объект с неугодными нам полями изменили названия полей, удалили старые серверные и вернули отредоктированный объект

  const adaptedFilm = Object.assign(
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
      }
  );

  // Ненужные ключи мы удаляем
  delete adaptedFilm.background_color;
  delete adaptedFilm.background_image;
  delete adaptedFilm.is_favorite;
  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.run_time;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.video_link;

  return adaptedFilm;
};

// // и метод который адаптирует клиентские данные для сервера
// const adaptToServer = (point) => {
//   const adaptedFilm = Object.assign(
//       {},
//       point,
//       {
//         "date_from": new Date(point.dateFrom).toISOString(), // На сервере дата хранится в ISO формате
//         "date_to": new Date(point.dateTo).toISOString(),
//         "base_price": parseInt(point.basePrice, 10) ? parseInt(point.basePrice, 10) : 0,
//         "is_favorite": point.isFavorite,
//       }
//   );
//
//   // Ненужные ключи мы удаляем
//   delete adaptedPoint.dateFrom;
//   delete adaptedPoint.dateTo;
//   delete adaptedPoint.basePrice;
//   delete adaptedPoint.isFavorite;
//
//   return adaptedFilm;
// };


const firstMainFilms = getFilmData().slice(0, 8);
const likeFilms = getFilmData().slice(8, 12);


export const mainFilms = [...firstMainFilms, ...likeFilms]; // весь массив данных по фильмам

// начальное состояние хранилища store
// Определяем действия
const initialState = {
  countShowFilm: 8,
  genre: ALL_GENRES,
  genreFilms: [],
  films: [], // mainFilms
  isDataLoaded: false,
  likeGenre: ``,
  likeFilms: [],
};

export const reducer = (state = initialState, action) => { // второе инициализируем стейт чтобы загрузить начальный жанр т.е. все фильмы
  switch (action.type) {
    case ActionType.GENRE: // когда в main будет клик по жанру он сменится с undefined на выбранный
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
          genreFilms: [],
        };
      } else {
        return {
          genre: state.genre,
          films: state.films,
          countShowFilm: state.countShowFilm + state.films.length - state.countShowFilm,
          genreFilms: [],
        };
      }
    case ActionType.GET_ALL_FILMS: // первое загрузили все фильмы
      return {
        ...state,
        isDataLoaded: true,
        films: action.payload.map((film)=>{
          return adaptToClient(film);
        })
      };

    case ActionType.LIKE_FILMS:
      return {
        ...state,
        likeGenre: action.payload,
        likeFilms: []
      };
    default:
      return state;
  }
};
