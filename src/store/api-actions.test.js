// import MockAdapter from "axios-mock-adapter";
// import {
//   checkAuth,
//   fetchAllComments,
//   fetchFilmById,
//   fetchMoviesList,
//   fetchPromo,
//   login
// } from "./api-actions";
// import {ActionType} from "./action";
// import {ALL_GENRES, AuthorizationStatus, RoutePaths} from "../constants/constants";
// import {createApi} from "../services/api";
// import {mockMovie, mockReviews} from "./action.test";
//
//
// const api = createApi(() => {
// });
//
// describe(`Async operations work correctly`, () => {
//
//
//   it(`Should make a correct Api call to /login`, () => { // при обращении к логину получим то, что ожидаем 200 код и данные
//     const state = {
//       countShowFilm: 8, // число сколько фильмов отрендерить
//       genre: ALL_GENRES, // начальный жанр для main.jsx
//       genreFilms: [], // фильмы отсортированные по жанру
//       films: [mockMovie], // загруженные фильмы с сервера все
//       likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
//       likeFilms: [], // похожие фильмы, появятся только после клика жанра
//       isDataLoaded: false, // загрузились ли фильмы с сервера
//       filmPromo: {}, // фильм на главной странице
//       authorizationStatus: null, // поле чтобы знать авторизирован ли пользователь
//       requestedRoute: RoutePaths.MAIN, // маршрут подставляется если пришел юзер не авторизованный
//       filmById: {}, // фильм полученный с помощью маршрута id
//       isFilmFound: false, // флаг если фильм получили т.е. через поиск напрямую id верный
//       isFilmLoaded: false, // нужный фильм загрузился
//
//       isAllComments: false, // все коменты полученны
//       allComments: [], // массив комментов пуст
//
//       isAddReview: true,
//       hasError: false, // флаг на форму комента
//
//       hasErrorLogin: false, // логин не проходит
//       dataLoggedIn: {},
//
//     };
//
//
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
//     return checkAuthLoader(dispatch, () => {
//       return state;
//     }, api) // в функцию вставили аргументы, что и в checkAuth()
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
//             avatarUrl: `https://avatar.com/face.png`,
//           }
//         });
//       });
//   });
//
//   it(`Should post correct Api call to /login`, () => {
//     const state = {
//       countShowFilm: 8, // число сколько фильмов отрендерить
//       genre: ALL_GENRES, // начальный жанр для main.jsx
//       genreFilms: [], // фильмы отсортированные по жанру
//       films: [mockMovie], // загруженные фильмы с сервера все
//       likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
//       likeFilms: [], // похожие фильмы, появятся только после клика жанра
//       isDataLoaded: false, // загрузились ли фильмы с сервера
//       filmPromo: {}, // фильм на главной странице
//       authorizationStatus: null, // поле чтобы знать авторизирован ли пользователь
//       requestedRoute: RoutePaths.MAIN, // маршрут подставляется если пришел юзер не авторизованный
//       filmById: {}, // фильм полученный с помощью маршрута id
//       isFilmFound: false, // флаг если фильм получили т.е. через поиск напрямую id верный
//       isFilmLoaded: false, // нужный фильм загрузился
//
//       isAllComments: false, // все коменты полученны
//       allComments: [], // массив комментов пуст
//
//       isAddReview: true,
//       hasError: false, // флаг на форму комента
//
//       hasErrorLogin: false, // логин не проходит
//       dataLoggedIn: {},
//
//     };
//
//     const apiMock = new MockAdapter(api);
//     const dispatch = jest.fn();
//     const checkLoginLoader = login({login: `email@test.com`, password: `12313123`}); // передаю логин и пароль
//
//     apiMock
//       .onPost(`/login`) // отправляем пост запрос на логин
//       .reply(200, {
//         "email": `email@test.com`,
//         "avatar_url": `https://avatar.com/face.png`
//       });
//
//     return checkLoginLoader(dispatch, () => {
//       return state;
//     }, api)
//       .then(() => {
//         expect(dispatch).toHaveBeenCalledTimes(3); // 3
//         expect(dispatch).toHaveBeenNthCalledWith(1, {
//           type: ActionType.REQUIRED_AUTHORIZATION,
//           payload: AuthorizationStatus.AUTH,
//         });
//         expect(dispatch).toHaveBeenNthCalledWith(2, {
//           type: ActionType.LOGGED_IN,
//           payload:
//             {
//               "avatarUrl": `https://avatar.com/face.png`,
//               "email": `email@test.com`,
//             },
//
//         });
//         expect(dispatch).toHaveBeenNthCalledWith(3, {
//           type: ActionType.REDIRECT_TO_ROUTE,
//           payload: `/`
//         });
//       });
//   });
//
//
//   it(`Should make a correct Api call to /films`, () => { // при обращении к логину получим то, что ожидаем 200 код и данные
//     const apiMock = new MockAdapter(api); // создаем экземпляр адаптера мок с оозданным api чтобы получить замоканую версию
//     const dispatch = jest.fn(); // это нужно чтобы проверить, что действительно диспач был вызван
//     const fetchMoviesListLoader = fetchMoviesList(); // сохраняем нашу функцию в переменную которая вернет функцию
//
//     apiMock // у нашего мока вызваем get на авторизацию
//       .onGet(`/films`) // с маршрутом films
//       .reply(200, [mockMovie]);
//
//     return fetchMoviesListLoader(dispatch, () => {
//     }, api) // в функцию вставили аргументы, что и в checkAuth()
//       .then(() => {
//         expect(dispatch).toHaveBeenCalledTimes(1); // сраниваем, что dispatch был вызван 2 раза (НЕ понимаю чего 2 раза)
//         expect(dispatch).toHaveBeenNthCalledWith(1, {
//           type: ActionType.GET_ALL_FILMS,
//           payload: [mockMovie],
//         });
//       });
//   });
//
//
//   it(`Should make a correct Api call to /films/promo`, () => { // при обращении к логину получим то, что ожидаем 200 код и данные
//     const apiMock = new MockAdapter(api); // создаем экземпляр адаптера мок с оозданным api чтобы получить замоканую версию
//     const dispatch = jest.fn(); // это нужно чтобы проверить, что действительно диспач был вызван
//     const fetchPromoLoader = fetchPromo(); // сохраняем нашу функцию в переменную которая вернет функцию
//
//     apiMock // у нашего мока вызваем get на авторизацию
//       .onGet(`/films/promo`) // идем на маршрут с промо фильмом
//       .reply(200, mockMovie); // Ожидаю статус 200 и объект с фильмом
//
//     return fetchPromoLoader(dispatch, () => {
//     }, api) // в функцию вставили аргументы, что и в checkAuth()
//       .then(() => {
//         expect(dispatch).toHaveBeenCalledTimes(1); // сраниваем, что dispatch был вызван 2 раза (НЕ понимаю чего 2 раза)
//         // toHaveBeenCalledTimes (1) 1 это колличество диспачей в then
//         expect(dispatch).toHaveBeenNthCalledWith(1, {
//           // toHaveBeenNthCalledWith (1) 1 это порядковый номер диспача
//           type: ActionType.GET_FILM_PROMO, // ожидаем тип промо
//           payload: mockMovie, // и его объект
//         });
//       });
//   });
//
//
//   it(`Should make a correct Api call to /film/:id`, () => { // при обращении к логину получим то, что ожидаем 200 код и данные
//     const apiMock = new MockAdapter(api); // создаем экземпляр адаптера мок с оозданным api чтобы получить замоканую версию
//     const dispatch = jest.fn(); // это нужно чтобы проверить, что действительно диспач был вызван
//     const fetchFilmByIdLoader = fetchFilmById(2); // сохраняем нашу функцию в переменную которая вернет функцию
//
//     apiMock // у нашего мока вызваем get на авторизацию
//       .onGet(`/films/2`) // идем на этот маршрут
//       .reply(200, mockMovie); // Ожидаю статус 200 и объект
//
//     return fetchFilmByIdLoader(dispatch, () => {
//     }, api) // в функцию вставили аргументы, что и в checkAuth()
//       .then(() => {
//         expect(dispatch).toHaveBeenCalledTimes(1); // сраниваем, что dispatch был вызван 2 раза (НЕ понимаю чего 2 раза)
//         // toHaveBeenCalledTimes (1) 1 это колличество диспачей в then
//         expect(dispatch).toHaveBeenNthCalledWith(1, {
//           // toHaveBeenNthCalledWith (1) 1 это порядковый номер диспача
//           type: ActionType.FILM_BY_ID, // ожидаем тип
//           payload: mockMovie, // и его объект ну или че там у него
//         });
//       });
//   });
//
//
//   it(`Should make a correct Api call to /comments/:id`, () => { // при обращении к логину получим то, что ожидаем 200 код и данные
//     const apiMock = new MockAdapter(api); // создаем экземпляр адаптера мок с оозданным api чтобы получить замоканую версию
//     const dispatch = jest.fn(); // это нужно чтобы проверить, что действительно диспач был вызван
//     const fetchAllCommentsLoader = fetchAllComments(2); // сохраняем нашу функцию в переменную которая вернет функцию
//
//     apiMock // у нашего мока вызваем get на авторизацию
//       .onGet(`/comments/2`) // идем на этот маршрут
//       .reply(200, mockReviews); // Ожидаю статус 200 и объект
//
//     return fetchAllCommentsLoader(dispatch, () => {
//     }, api) // в функцию вставили аргументы, что и в checkAuth()
//       .then(() => {
//         expect(dispatch).toHaveBeenCalledTimes(1); // сраниваем, что dispatch был вызван 2 раза (НЕ понимаю чего 2 раза)
//         // toHaveBeenCalledTimes (1) 1 это колличество диспачей в then
//         expect(dispatch).toHaveBeenNthCalledWith(1, {
//           // toHaveBeenNthCalledWith (1) 1 это порядковый номер диспача
//           type: ActionType.GET_ALL_COMMENTS, // ожидаем тип
//           payload: mockReviews, // и его объект ну или че там у него
//         });
//       });
//   });
//
//
//   it(`Should post correct Api call to /login`, () => {
//     const state = {
//       countShowFilm: 8, // число сколько фильмов отрендерить
//       genre: ALL_GENRES, // начальный жанр для main.jsx
//       genreFilms: [], // фильмы отсортированные по жанру
//       films: [mockMovie], // загруженные фильмы с сервера все
//       likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
//       likeFilms: [], // похожие фильмы, появятся только после клика жанра
//       isDataLoaded: false, // загрузились ли фильмы с сервера
//       filmPromo: {}, // фильм на главной странице
//       authorizationStatus: null, // поле чтобы знать авторизирован ли пользователь
//       requestedRoute: RoutePaths.MAIN, // маршрут подставляется если пришел юзер не авторизованный
//       filmById: {}, // фильм полученный с помощью маршрута id
//       isFilmFound: false, // флаг если фильм получили т.е. через поиск напрямую id верный
//       isFilmLoaded: false, // нужный фильм загрузился
//
//       isAllComments: false, // все коменты полученны
//       allComments: [], // массив комментов пуст
//
//       isAddReview: true,
//       hasError: false, // флаг на форму комента
//
//       hasErrorLogin: false, // логин не проходит
//       dataLoggedIn: {},
//
//     };
//
//     const apiMock = new MockAdapter(api);
//     const dispatch = jest.fn();
//     const checkLoginLoader = login({login: `email@test.com`, password: `12313123`}); // передаю логин и пароль
//
//     apiMock
//       .onPost(`/login`) // отправляем пост запрос на логин
//       .reply(200, {
//         "email": `email@test.com`,
//         "avatar_url": `https://avatar.com/face.png`
//       });
//
//     return checkLoginLoader(dispatch, () => {
//       return state;
//     }, api)
//       .then(() => {
//         expect(dispatch).toHaveBeenCalledTimes(3); // 3
//         expect(dispatch).toHaveBeenNthCalledWith(1, {
//           type: ActionType.REQUIRED_AUTHORIZATION,
//           payload: AuthorizationStatus.AUTH,
//         });
//         expect(dispatch).toHaveBeenNthCalledWith(2, {
//           type: ActionType.LOGGED_IN,
//           payload:
//             {
//               "avatarUrl": `https://avatar.com/face.png`,
//               "email": `email@test.com`,
//             },
//
//         });
//         expect(dispatch).toHaveBeenNthCalledWith(3, {
//           type: ActionType.REDIRECT_TO_ROUTE,
//           payload: `/`
//         });
//       });
//   });
//
//
// });
