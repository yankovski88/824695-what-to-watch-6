import {ActionType} from "../store/action";
import {getGenreFilms} from "../utils/utils";
import {ALL_GENRES, NUMBER_FILM, RoutePaths} from "../constants/constants";


// export const mainFilms = getFilmData().slice(0, 18);; // хранилище всех фильмов import {getFilmData} from "../components/mock/film";


// метод Адаптер который адоптирует данные от сервера на читаемые данные для клиента
export const adaptToClient = (film) => { // получаем объект с неугодными нам полями изменили названия полей, удалили старые серверные и вернули отредоктированный объект

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

// метод Адаптер который адоптирует данные от сервера на читаемые данные для клиента
export const adaptToClientUser = (user) => { // получаем объект с неугодными нам полями изменили названия полей, удалили старые серверные и вернули отредоктированный объект

  const adaptedUser = Object.assign(
    {},
    user,
    {
      // в basePrice записали, то что пришло с сервера, плюс можно модифицировать данные как с датой
      avatarUrl: user.avatar_url,
    }
  );

  // Ненужные ключи мы удаляем
  delete adaptedUser.avatar_url;


  return adaptedUser;
};


// начальное состояние хранилища store
// Определяем действия
const initialState = {
  countShowFilm: 8, // число сколько фильмов отрендерить
  genre: ALL_GENRES, // начальный жанр для main.jsx
  genreFilms: [], // фильмы отсортированные по жанру
  films: [], // загруженные фильмы с сервера все
  likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
  likeFilms: [], // похожие фильмы, появятся только после клика жанра. Теперь они формируются сами.
  isDataLoaded: false, // загрузились ли фильмы с сервера
  filmPromo: {}, // фильм на главной странице
  authorizationStatus: null, // поле чтобы знать авторизирован ли пользователь
  requestedRoute: RoutePaths.MAIN, // маршрут подставляется если пришел юзер не авторизованный
  filmById: {}, // фильм полученный с помощью маршрута id
  isFilmFound: false, // флаг если фильм получили т.е. через поиск напрямую id верный
  isFilmLoaded: false, // нужный фильм загрузился

  isAllComments: false, // все коменты полученны
  allComments: [], // массив комментов пуст

  isAddReview: true,
  hasError: false, // флаг на форму комента

  hasErrorLogin: false, // логин не проходит
  dataLoggedIn: {},
};

export const reducer = (state = initialState, action) => { // второе инициализируем стейт чтобы загрузить начальный жанр т.е. все фильмы
  switch (action.type) {
    case ActionType.GENRE: // когда в main будет клик по жанру он сменится с undefined на выбранный
      return {
        ...state, // это нужно чтобы вывесте все данные и не писать все построчно
        genre: action.payload,
        genreFilms: getGenreFilms(action.payload, state.films),
        countShowFilm: 8,
      };
    case ActionType.MORE_FILM:
      return {
        ...state,
        countShowFilm: state.countShowFilm + NUMBER_FILM,
      };
    // if (state.films.length - state.countShowFilm > NUMBER_FILM) {
    //   return {
    //     ...state,
    //     countShowFilm: state.countShowFilm + NUMBER_FILM,
    //   };
    // } else {
    //   return {
    //     ...state,
    //     countShowFilm: state.countShowFilm + state.films.length - state.countShowFilm,
    //   };
    // }
    case ActionType.GET_ALL_FILMS: // первое загрузили все фильмы
      return {
        ...state,
        isDataLoaded: true,
        films: action.payload.map((film) => { // по массиву объектов фильмов прошлись
          return adaptToClient(film); // и каждый объект пропустили через адатпер и вернули этот массив
        })
      };

    // УО удаляй осторожнее
    // case ActionType.LIKE_FILMS:
    //   return {
    //     ...state,
    //     likeGenre: action.payload,
    //     likeFilms: []
    //   };
    case ActionType.GET_FILM_PROMO:
      return {
        ...state,
        filmPromo: adaptToClient(action.payload), // и каждый объект пропустили через адатпер и вернули этот массив
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.ADD_REQUESTED_ROUTE:
      return {
        ...state,
        requestedRoute: action.payload,
      };
    case ActionType.FILM_BY_ID:
      return {
        ...state,
        filmById: adaptToClient(action.payload),
        isFilmFound: true,
        isFilmLoaded: true,
      };
    case ActionType.GET_ALL_COMMENTS:
      return {
        ...state,
        // здесь должен быть объект с комментами
        allComments: action.payload,
        isFilmFound: true,
        isAllComments: true,
      };

// не используется
    // case ActionType.ADD_REVIEW:
    //   return {
    //     ...state,
    //     isAddReview: action.payload,
    //   };

    case ActionType.CHANGE_IS_ADD_REVIEW:
      return {
        ...state,
        isAddReview: action.payload,
        isAllComments: false,
      };

    case ActionType.HAS_ERROR:
      return {
        ...state,
        hasError: action.payload,
      };
    case ActionType.HAS_ERROR_LOGIN:
      return {
        ...state,
        hasErrorLogin: action.payload,
      };

    case ActionType.LOGGED_IN:
      return {
        ...state,
        dataLoggedIn: action.payload,
      };


    case ActionType.SET_MOVIE_FAVORITE:
      console.log(action)
      return {
        ...state,
        films: state.films.map((movie) => {
          if (movie.id === action.payload.movieId) {
            return {
              ...movie,
              isFavorite: action.payload.isFavorite
            };
          } else {
            return movie;
          }
        }),
        filmById: {
          ...state.filmById,
          isFavorite: action.payload.isFavorite,
        }
      };


    default:
      return state;
  }
};
