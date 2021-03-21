import {ActionType} from "../store/action";
import {getGenreFilms} from "../utils/utils";
import {ALL_GENRES, NUMBER_FILM} from "../constants/constants";


// export const mainFilms = getFilmData().slice(0, 18);; // хранилище всех фильмов import {getFilmData} from "../components/mock/film";


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


// начальное состояние хранилища store
// Определяем действия
const initialState = {
  countShowFilm: 8,
  genre: ALL_GENRES,
  genreFilms: [],
  films: [], // mainFilms
  likeGenre: ``,
  likeFilms: [],
  isDataLoaded: false,
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
          genreFilms: state.genreFilms,
          isDataLoaded: true,
        };
      } else {
        return {
          genre: state.genre,
          films: state.films,
          countShowFilm: state.countShowFilm + state.films.length - state.countShowFilm,
          genreFilms: state.genreFilms,
          isDataLoaded: true,
        };
      }
    case ActionType.GET_ALL_FILMS: // первое загрузили все фильмы
      return {
        ...state,
        isDataLoaded: true,
        films: action.payload.map((film)=>{ // по массиву объектов фильмов прошлись
          return adaptToClient(film); // и каждый объект пропустили через адатпер и вернули этот массив
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
