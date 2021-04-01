import {mockMovie, mockReviews} from "./action.test";
import {adaptToClient, reducer} from "./reducer"; // adaptToClient,
import {ALL_GENRES, AuthorizationStatus, RoutePaths} from "../constants/constants";
import {ActionType} from "./action";
import {getGenreFilms} from "../utils/utils";
console.log([mockMovie])

const globalState = {
  countShowFilm: 8, // число сколько фильмов отрендерить
  genre: ALL_GENRES, // начальный жанр для main.jsx
  genreFilms: [], // фильмы отсортированные по жанру
  films: [], // загруженные фильмы с сервера все
  likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
  likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
};

describe(`Reducer 'selected movie' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    });
  });

  it(`Reducer should get selected movie`, () => {
    const state = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    };

    const filmById = {
      type: ActionType.FILM_BY_ID,
      payload: mockMovie // adaptToClient(mockMovie),
    }

    const stateNew = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
      isDataLoaded: false, // загрузились ли фильмы с сервера
      filmPromo: {}, // фильм на главной странице
      authorizationStatus: null, // поле чтобы знать авторизирован ли пользователь
      requestedRoute: RoutePaths.MAIN, // маршрут подставляется если пришел юзер не авторизованный
      filmById: adaptToClient(mockMovie), // фильм полученный с помощью маршрута id
      isFilmFound: true, // флаг если фильм получили т.е. через поиск напрямую id верный
      isFilmLoaded: true, // нужный фильм загрузился

      isAllComments: false, // все коменты полученны
      allComments: [], // массив комментов пуст

      isAddReview: true,
      hasError: false, // флаг на форму комента

      hasErrorLogin: false, // логин не проходит
    };

    expect(reducer(state, filmById)).toEqual(
      stateNew
    )

  });


  it(`Reducer should GET_ALL_FILMS`, () => {
    const state = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    };

    const item = {
      type: ActionType.GET_ALL_FILMS,
      isDataLoaded: true,
      payload: [mockMovie],
    }

    const stateNew = {
  ...state,
      isDataLoaded: true,
      films: [mockMovie].map((film)=>{ // по массиву объектов фильмов прошлись
        return adaptToClient(film); // и каждый объект пропустили через адатпер и вернули этот массив
      })
    };

    expect(reducer(state, item)).toEqual(
      stateNew
    )
  });


  it(`Reducer should get GENRE`, () => {
    const state = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [mockMovie], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    };


    const item = {
      type: ActionType.GENRE,
      payload: `Drama`,
    }

    const stateNew = {
      ...state,
      genre: `Drama`,
      genreFilms: getGenreFilms(`Drama`, [mockMovie]),
      countShowFilm: 8,
    };

    expect(reducer(state, item)).toEqual(
      stateNew
    )
  });



  it(`Reducer should get LIKE_FILMS`, () => {
    const state = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [mockMovie], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    };


    const item = {
      type: ActionType.GENRE,
      payload: `Drama`,
    }

    const stateNew = {
      ...state,
      genre: `Drama`,
      genreFilms: getGenreFilms(`Drama`, [mockMovie]),
      countShowFilm: 8,
    };

    expect(reducer(state, item)).toEqual(
      stateNew
    )
  });

  it(`Reducer should get LIKE_FILMS`, () => {
    const state = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [mockMovie], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    };


    const item = {
      type: ActionType.GET_FILM_PROMO,
      payload: mockMovie,
    }

    const stateNew = {
      ...state,
      filmPromo: adaptToClient(mockMovie), // и каждый объект пропустили через адатпер и вернули этот массив
    };

    expect(reducer(state, item)).toEqual(
      stateNew
    )
  });


  it(`Reducer should get REQUIRED_AUTHORIZATION`, () => {
    const state = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [mockMovie], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    };


    const item = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    }

    const stateNew = {
      ...state,
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    expect(reducer(state, item)).toEqual(
      stateNew
    )
  });




  it(`Reducer should get ADD_REQUESTED_ROUTE`, () => {
    const state = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [mockMovie], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    };


    const item = {
      type: ActionType.ADD_REQUESTED_ROUTE,
      payload: `/add-requeste-route`,
    }

    const stateNew = {
      ...state,
      requestedRoute: `/add-requeste-route`,
    };

    expect(reducer(state, item)).toEqual(
      stateNew
    )
  });


  it(`Reducer should get GET_ALL_COMMENTS`, () => {
    const state = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [mockMovie], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    };


    const item = {
      type: ActionType.GET_ALL_COMMENTS,
      payload: mockReviews,
    }

    const stateNew = {
      ...state,
      // здесь должен быть объект с комментами
      allComments: mockReviews,
      isFilmFound: true,
      isAllComments: true,
    };

    expect(reducer(state, item)).toEqual(
      stateNew
    )
  });






  it(`Reducer should get ADD_REVIEW`, () => {
    const state = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [mockMovie], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    };


    const item = {
      type: ActionType.ADD_REVIEW,
      payload: false,
    }

    const stateNew = {
      ...state,
      isAddReview: false,
    };

    expect(reducer(state, item)).toEqual(
      stateNew
    )
  });



  it(`Reducer should get HAS_ERROR`, () => {
    const state = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [mockMovie], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    };


    const item = {
      type: ActionType.HAS_ERROR,
      payload: true,
    }

    const stateNew = {
      ...state,
      hasError: true,
    };

    expect(reducer(state, item)).toEqual(
      stateNew
    )
  });



  it(`Reducer should get HAS_ERROR_LOGIN`, () => {
    const state = {
      countShowFilm: 8, // число сколько фильмов отрендерить
      genre: ALL_GENRES, // начальный жанр для main.jsx
      genreFilms: [], // фильмы отсортированные по жанру
      films: [mockMovie], // загруженные фильмы с сервера все
      likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      likeFilms: [], // похожие фильмы, появятся только после клика жанра
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
    };


    const item = {
      type: ActionType.HAS_ERROR_LOGIN,
      payload: true,
    }

    const stateNew = {
      ...state,
      hasErrorLogin: true,
    };

    expect(reducer(state, item)).toEqual(
      stateNew
    )
  });

  // it(`Reducer should get MORE_FILM`, () => {
  //   const state = {
  //     countShowFilm: 8, // число сколько фильмов отрендерить
  //     genre: ALL_GENRES, // начальный жанр для main.jsx
  //     genreFilms: [], // фильмы отсортированные по жанру
  //     films: [mockMovie], // загруженные фильмы с сервера все
  //     likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
  //     likeFilms: [], // похожие фильмы, появятся только после клика жанра
  //     isDataLoaded: false, // загрузились ли фильмы с сервера
  //     filmPromo: {}, // фильм на главной странице
  //     authorizationStatus: null, // поле чтобы знать авторизирован ли пользователь
  //     requestedRoute: RoutePaths.MAIN, // маршрут подставляется если пришел юзер не авторизованный
  //     filmById: {}, // фильм полученный с помощью маршрута id
  //     isFilmFound: false, // флаг если фильм получили т.е. через поиск напрямую id верный
  //     isFilmLoaded: false, // нужный фильм загрузился
  //
  //     isAllComments: false, // все коменты полученны
  //     allComments: [], // массив комментов пуст
  //
  //     isAddReview: true,
  //     hasError: false, // флаг на форму комента
  //
  //     hasErrorLogin: false, // логин не проходит
  //   };
  //
  //
  //   const item = {
  //     type: ActionType.MORE_FILM,
  //     payload: true,
  //   }
  //
  //   const stateNew = {
  //     ...state,
  //     hasErrorLogin: true,
  //   };
  //
  //   expect(reducer(state, item)).toEqual(
  //     stateNew
  //   )
  // });


})


