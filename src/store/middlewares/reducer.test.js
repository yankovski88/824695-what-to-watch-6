// import {AuthorizationStatus} from "../constants/constants";
import {mockMovie} from "../action.test";
import {adaptToClient, reducer} from "../reducer";
import {ALL_GENRES, RoutePaths} from "../../constants/constants";
import {ActionType} from "../action"; // adaptToClient,

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
      payload: adaptToClient(mockMovie),
    }

    // const getSelectedMovieAction = {
    //   ...state,
    //   type: ActionType.FILM_BY_ID,
    //   payload: adaptToClient(mockMovie),
    //   isFilmFound: true,
    //   isFilmLoaded: true,
    // };

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
      // .toEqual(
      // filmById
      stateNew
      // {
      // countShowFilm: 8, // число сколько фильмов отрендерить
      // genre: ALL_GENRES, // начальный жанр для main.jsx
      // genreFilms: [], // фильмы отсортированные по жанру
      // films: [], // загруженные фильмы с сервера все
      // likeGenre: ``, // жанр по умолчанию пустой для похожих фильмов
      // likeFilms: [], // похожие фильмы, появятся только после клика жанра
      // isDataLoaded: false, // загрузились ли фильмы с сервера
      // filmPromo: {}, // фильм на главной странице
      // authorizationStatus: null, // поле чтобы знать авторизирован ли пользователь
      // requestedRoute: RoutePaths.MAIN, // маршрут подставляется если пришел юзер не авторизованный
      // filmById: {}, // фильм полученный с помощью маршрута id
      // isFilmFound: true, // флаг если фильм получили т.е. через поиск напрямую id верный
      // isFilmLoaded: true, // нужный фильм загрузился
      //
      // isAllComments: false, // все коменты полученны
      // allComments: [], // массив комментов пуст
      //
      // isAddReview: true,
      // hasError: false, // флаг на форму комента
      //
      // hasErrorLogin: false, // логин не проходит
    // }
    // );
    )
  });
})










//
// export const mockMovie = {
//   "name": `Macbeth`,
//   "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
//   "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
//   "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
//   "background_color": `#F1E9CE`,
//   "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
//   "rating": 3.3,
//   "scores_count": 48798,
//   "director": `Justin Kurzel`,
//   "starring": [
//     `Michael Fassbender`,
//     `Marion Cotillard`,
//     `Jack Madigan`
//   ],
//   "run_time": 113,
//   "genre": `Drama`,
//   "released": 2015,
//   "id": 1,
//   "is_favorite": false,
//   "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
//   "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.web`
// };
//
//
// export const mockReviews = [
//   {
//     "id": 1,
//     "user": {
//       "id": 13,
//       "name": `Zak`
//     },
//     "rating": 1.4,
//     "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
//     "date": `2021-03-07T08:04:28.658Z`
//   },
//   {
//     "id": 2,
//     "user": {
//       "id": 17,
//       "name": `Emely`
//     },
//     "rating": 7.2,
//     "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
//     "date": `2021-02-22T08:04:28.658Z`
//   }
// ];
//
//
// describe(`Action creators work correctly`, () => {
//   it(`Action creator for setting genre returns correct action`, () => {
//     // it функция для тестового случая в `Action creator` это название случая что проверяем
//     const expectedAction = { // expectedAction создали объект
//       type: ActionType.GENRE,
//       payload: `comedy`
//     };
//
//     expect(ActionCreator.setGenre(`comedy`)).toEqual(expectedAction); // в нашу функцию послали payload `comedy`
//     // и ожидаем что вернется объект как в expectedAction
//     // expect это ожидание,
//     // toEqual это проверка объекта на соответствие
//     // toBe вроде проверка на true
//   });
//
//
//   it(`check btn more film`, ()=>{
//     const expectedAction = {
//       type: ActionType.MORE_FILM
//     }
//     expect(ActionCreator.moreFilm()).toEqual(expectedAction)
//   })
//
//   it(`check btn more getAllFilms`, ()=>{
//     const expectedAction = {
//       type: ActionType.GET_ALL_FILMS,
//       payload: [mockMovie]
//     }
//     expect(ActionCreator.getAllFilms([mockMovie])).toEqual(expectedAction)
//   })
//
//
//
//
//   it(`check btn more likeFilms`, ()=>{
//     const expectedAction = {
//       type: ActionType.LIKE_FILMS,
//       payload: [mockMovie]
//     }
//     expect(ActionCreator.likeFilms([mockMovie])).toEqual(expectedAction)
//   });
//
//   it(`check btn more getFilmPromo`, ()=>{
//     const expectedAction = {
//       type: ActionType.GET_FILM_PROMO,
//       payload: mockMovie
//     }
//     expect(ActionCreator.getFilmPromo(mockMovie)).toEqual(expectedAction)
//   });
//   it(`check btn more requireAuthorization`, ()=>{
//     const expectedAction = {
//       type: ActionType.REQUIRED_AUTHORIZATION,
//       payload: AuthorizationStatus.AUTH
//     }
//     expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual(expectedAction)
//   });
//   it(`check btn more redirectToRoute`, ()=>{
//     const expectedAction = {
//       type: ActionType.REDIRECT_TO_ROUTE,
//       payload: `/redirected-route`
//     }
//     expect(ActionCreator.redirectToRoute(`/redirected-route`)).toEqual(expectedAction)
//   });
//   it(`check btn more addRequestedRoute`, ()=>{
//     const expectedAction = {
//       type: ActionType.ADD_REQUESTED_ROUTE,
//       payload: `/add-requeste-route`
//     }
//     expect(ActionCreator.addRequestedRoute(`/add-requeste-route`)).toEqual(expectedAction)
//   });
//
//   it(`check btn more getFilmById`, ()=>{
//     const expectedAction = {
//       type: ActionType.FILM_BY_ID,
//       payload: mockMovie
//     }
//     expect(ActionCreator.getFilmById(mockMovie)).toEqual(expectedAction)
//   });
//   it(`check btn more getAllComments`, ()=>{
//     const expectedAction = {
//       type: ActionType.GET_ALL_COMMENTS,
//       payload: mockReviews
//     }
//     expect(ActionCreator.getAllComments(mockReviews)).toEqual(expectedAction)
//   });
//
//   it(`check btn more addReview`, ()=>{
//     const expectedAction = {
//       type: ActionType.ADD_REVIEW,
//       payload: true
//     }
//     expect(ActionCreator.addReview(true)).toEqual(expectedAction)
//   });
//   it(`check btn more hasError`, ()=>{
//     const expectedAction = {
//       type: ActionType.HAS_ERROR,
//       payload: true
//     }
//     expect(ActionCreator.hasError(true)).toEqual(expectedAction)
//   });
//   it(`check btn more hasErrorLogin`, ()=>{
//     const expectedAction = {
//       type: ActionType.HAS_ERROR_LOGIN,
//       payload: true
//     }
//     expect(ActionCreator.hasErrorLogin(true)).toEqual(expectedAction)
//   })
// });
