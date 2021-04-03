import {mockMovie, mockReviews} from "./action.test";
import {adaptToClient, reducer} from "./reducer"; // adaptToClient,
import {ALL_GENRES, AuthorizationStatus, NUMBER_FILM, RoutePaths} from "../constants/constants";
import {ActionType} from "./action";
import {getGenreFilms} from "../utils/utils";
// import MockAdapter from "axios-mock-adapter";
// import {checkAuth, login} from "./api-actions";
// import {createApi} from "../services/api";


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
      isAddReviewFail: false, // флаг на форму комента

      hasErrorLogin: false, // логин не проходит
      dataLoggedIn: {},

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
      dataLoggedIn: {},

    };

    const filmById = {
      type: ActionType.FILM_BY_ID,
      payload: mockMovie // adaptToClient(mockMovie),
    };

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
      dataLoggedIn: {},

    };

    expect(reducer(state, filmById)).toEqual(
        stateNew
    );

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
      dataLoggedIn: {},

    };

    const item = {
      type: ActionType.GET_ALL_FILMS,
      isDataLoaded: true,
      payload: [mockMovie],
    };

    const stateNew = {
      ...state,
      isDataLoaded: true,
      films: [mockMovie].map((film)=>{ // по массиву объектов фильмов прошлись
        return adaptToClient(film); // и каждый объект пропустили через адатпер и вернули этот массив
      })
    };

    expect(reducer(state, item)).toEqual(
        stateNew
    );
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
      dataLoggedIn: {},

    };


    const item = {
      type: ActionType.GENRE,
      payload: `Drama`,
    };

    const stateNew = {
      ...state,
      genre: `Drama`,
      genreFilms: getGenreFilms(`Drama`, [mockMovie]),
      countShowFilm: 8,
    };

    expect(reducer(state, item)).toEqual(
        stateNew
    );
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
      dataLoggedIn: {},

    };


    const item = {
      type: ActionType.GENRE,
      payload: `Drama`,
    };

    const stateNew = {
      ...state,
      genre: `Drama`,
      genreFilms: getGenreFilms(`Drama`, [mockMovie]),
      countShowFilm: 8,
    };

    expect(reducer(state, item)).toEqual(
        stateNew
    );
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
      dataLoggedIn: {},

    };


    const item = {
      type: ActionType.GET_FILM_PROMO,
      payload: mockMovie,
    };

    const stateNew = {
      ...state,
      filmPromo: adaptToClient(mockMovie), // и каждый объект пропустили через адатпер и вернули этот массив
    };

    expect(reducer(state, item)).toEqual(
        stateNew
    );
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
      dataLoggedIn: {},

    };


    const item = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    const stateNew = {
      ...state,
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    expect(reducer(state, item)).toEqual(
        stateNew
    );
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
      dataLoggedIn: {},

    };


    const item = {
      type: ActionType.ADD_REQUESTED_ROUTE,
      payload: `/add-requeste-route`,
    };

    const stateNew = {
      ...state,
      requestedRoute: `/add-requeste-route`,
    };

    expect(reducer(state, item)).toEqual(
        stateNew
    );
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
      dataLoggedIn: {},

    };


    const item = {
      type: ActionType.GET_ALL_COMMENTS,
      payload: mockReviews,
    };

    const stateNew = {
      ...state,
      // здесь должен быть объект с комментами
      allComments: mockReviews,
      isFilmFound: true,
      isAllComments: true,
    };

    expect(reducer(state, item)).toEqual(
        stateNew
    );
  });


  it(`Reducer should get changeIsAddReview`, () => {
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
      dataLoggedIn: {},

    };


    const item = {
      type: ActionType.CHANGE_IS_ADD_REVIEW,
      payload: false,
    };

    const stateNew = {
      ...state,
      isAddReview: false,
    };

    expect(reducer(state, item)).toEqual(
        stateNew
    );
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

      hasErrorLogin: false, // логин не проходит
      dataLoggedIn: {},
      isAddReviewFail: false, // флаг на форму комента

    };


    const item = {
      type: ActionType.IS_ADD_REVIEW_FAIL,
      payload: true,
    };

    const stateNew = {
      ...state,
      isAddReviewFail: true,
    };

    expect(reducer(state, item)).toEqual(
        stateNew
    );
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
      dataLoggedIn: {},

    };


    const item = {
      type: ActionType.HAS_ERROR_LOGIN,
      payload: true,
    };

    const stateNew = {
      ...state,
      hasErrorLogin: true,
    };

    expect(reducer(state, item)).toEqual(
        stateNew
    );
  });

  it(`Reducer should get MORE_FILM`, () => {
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
      dataLoggedIn: {},

    };


    const item = {
      type: ActionType.MORE_FILM
    };

    const stateNew = {
      ...state,
      countShowFilm: state.countShowFilm + NUMBER_FILM,
    };

    expect(reducer(state, item)).toEqual(
        stateNew
    );
  });


  it(`Reducer should get LOGGED_IN`, () => {
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
      dataLoggedIn: {},

    };


    const item = {
      type: ActionType.LOGGED_IN,
      payload: {
        avatarUrl: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg",
        email: "1@mail.ru",
        id: 1,
        name: "1"
      },
    };

    const stateNew = {
      ...state,
      dataLoggedIn: {
        avatarUrl: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg",
        email: "1@mail.ru",
        id: 1,
        name: "1"
      },
    };

    expect(reducer(state, item)).toEqual(
      stateNew
    );
  });

});








// const api = createApi(() => { });
// describe(`Async operations work correctly`, () => {
//   it(`Should make a correct Api call to /login`, () => { // при обращении к логину получим то, что ожидаем 200 код и данные
//     const apiMock = new MockAdapter(api); // создаем экземпляр адаптера мок с оозданным api чтобы получить замоканую версию
//     const dispatch = jest.fn(); // это нужно чтобы проверить, что действительно диспач был вызван
//     const checkAuthLoader = checkAuth(); // сохраняем нашу функцию в переменную которая вернет функцию
//
//     apiMock // у нашего мока вызваем get на авторизацию
//       .onGet(`/login`) // с маршрутом логин
//       .reply(200, { // ожидаем ответ 200 и обеъкет с полями email и avatar
//         "email": `email@test.com`,
//         "avatar_url": `https://avatar.com/face.png`
//       });
//
//     return checkAuthLoader(dispatch, () => { }, api) // в функцию вставили аргументы, что и в checkAuth()
//       .then(() => {
//         expect(dispatch).toHaveBeenCalledTimes(2); // сраниваем, что dispatch был вызван 2 раза (НЕ понимаю чего 2 раза)
//         expect(dispatch).toHaveBeenNthCalledWith(1, {
//           type: ActionType.REQUIRED_AUTHORIZATION,
//           payload: AuthorizationStatus.AUTH,
//         });
//         expect(dispatch).toHaveBeenNthCalledWith(2, {
//           type: ActionType.LOGGED_IN,
//           payload: {
//             email: `email@test.com`,
//             avatarUrl: "https://avatar.com/face.png",
//       }
//         });
//       });
//   });
//
//   // it(`Should post correct Api call to /login`, () => {
//   //   const apiMock = new MockAdapter(api);
//   //   const dispatch = jest.fn();
//   //   const checkLoginLoader = login({login: `email@test.com`, password: `12313123`});
//   //
//   //   apiMock
//   //     .onPost(`/login`) // отправляем пост запрос на логин
//   //     .reply(200, {
//   //       "email": `email@test.com`,
//   //       "avatar_url": `https://avatar.com/face.png`
//   //     });
//   //
//   //   return checkLoginLoader(dispatch, () => { }, api)
//   //     .then(() => {
//   //       expect(dispatch).toHaveBeenCalledTimes(3); // 3
//   //       expect(dispatch).toHaveBeenNthCalledWith(1, {
//   //         type: ActionType.REQUIRED_AUTHORIZATION,
//   //         payload: AuthorizationStatus.AUTH,
//   //       });
//   //       expect(dispatch).toHaveBeenNthCalledWith(2, {
//   //         type: ActionType.LOGGED_IN,
//   //         payload:
//   //         //   {
//   //         //   // email: `email@test.com`,
//   //         //   // avatar: `https://avatar.com/face.png`
//   //         // }
//   //       {
//   //              "avatarUrl": "https://avatar.com/face.png",
//   //              "email": "email@test.com",
//   //         },
//   //
//   //     });
//   //       expect(dispatch).toHaveBeenNthCalledWith(3, {
//   //         type: ActionType.REDIRECT_TO_ROUTE,
//   //         payload: `/`
//   //       });
//   //     });
//   // });
// });


