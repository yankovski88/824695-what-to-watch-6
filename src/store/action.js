// определяем действия
export const ActionType = {
  GENRE: `main/genre`,
  MORE_FILM: `MORE_FILM`,
  GET_ALL_FILMS: `main/getAllFilms`,
  LIKE_FILMS: `card/like-films`, // создал тип экшина по которому сделаем функцию по его возврату
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  GET_FILM_PROMO: `main/promo`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  ADD_REQUESTED_ROUTE: `user/addRequestedRoute`,
  FILM_BY_ID: `user/film`,
  GET_ALL_COMMENTS: `film/comments`,

  ADD_REVIEW: `user/ADD_REVIEW`,
  CHANGE_IS_ADD_REVIEW: `user/CHANGE_IS_ADD_REVIEW`,

  HAS_ERROR_LOGIN: `login/hasErrorLogin`,
  LOGGED_IN: `login/LOGGED_IN`,

  SET_MOVIE_FAVORITE: `favorite/SET_MOVIE_FAVORITE`,
  IS_ADD_REVIEW_FAIL: `user/IS_ADD_REVIEW_FAIL`,
  SET_PROMO_MOVIE_FAVORITE: `main/SET_PROMO_MOVIE_FAVORITE`
};

// // создаем объект функция которые возвращают экшин
// export const ActionCreator = {
//   setGenre: (genre) => ({
//     type: ActionType.GENRE, // тип экшина
//     payload: genre, // payload это полезная нагрузка которую появляется при клике от пользователя
//   }),
//   moreFilm: () => ({
//     type: ActionType.MORE_FILM
//   }),
//   getAllFilms: (data) => ({
//     type: ActionType.GET_ALL_FILMS,
//     payload: data
//   }),
//   likeFilms: (data) => ({ // функция для похожих фильмов
//     type: ActionType.LIKE_FILMS,
//     payload: data
//   }),
//   getFilmPromo: (filmPromo)=>({
//     type: ActionType.GET_FILM_PROMO,
//     payload: filmPromo,
//   }),
//   requireAuthorization: (status) => ({
//     type: ActionType.REQUIRED_AUTHORIZATION,
//     payload: status,
//   }),
//   redirectToRoute: (url) => ({
//     type: ActionType.REDIRECT_TO_ROUTE,
//     payload: url,
//   }),
//   addRequestedRoute: (route) => ({
//     type: ActionType.ADD_REQUESTED_ROUTE,
//     payload: route,
//   }),
//   getFilmById: (film)=>({
//     type: ActionType.FILM_BY_ID,
//     payload: film,
//   }),
//   getAllComments: (comments)=>({
//     type: ActionType.GET_ALL_COMMENTS,
//     payload: comments,
//   }),
//
//   addReview: (data)=>({ // булеан на отправку формы и блокировки кнопки
//     type: ActionType.ADD_REVIEW,
//     payload: data,
//   }),
//   changeIsAddReview: (data)=>({
//     type: ActionType.CHANGE_IS_ADD_REVIEW,
//     payload: data,
//   }),
//   hasErrorLogin: (data)=>({
//     type: ActionType.HAS_ERROR_LOGIN,
//     payload: data,
//   }),
//   loggedIn: (userData) => ({
//     type: ActionType.LOGGED_IN,
//     payload: userData,
//   }),
//   setMovieFavorite: (movieId, isFavorite) => ({
//     type: ActionType.SET_MOVIE_FAVORITE,
//     payload: {
//       movieId,
//       isFavorite,
//     },
//   }),
//   addReviewFail: (isAddPost) => ({
//     type: ActionType.IS_ADD_REVIEW_FAIL,
//     payload: isAddPost,
//   }),
//   setPromoMovieFavorite: (isFavorite) => ({
//     type: ActionType.SET_PROMO_MOVIE_FAVORITE,
//     payload: isFavorite,
//   })
// };

// // создаем объект функция которые возвращают экшин
export const setGenre = (genre) => ({
  type: ActionType.GENRE, // тип экшина
  payload: genre, // payload это полезная нагрузка которую появляется при клике от пользователя
});
export const moreFilm = () => ({
  type: ActionType.MORE_FILM
});
export const getAllFilms = (data) => ({
  type: ActionType.GET_ALL_FILMS,
  payload: data
});
export const likeFilms = (data) => ({ // функция для похожих фильмов
  type: ActionType.LIKE_FILMS,
  payload: data
});
export const getFilmPromo = (filmPromo) => ({
  type: ActionType.GET_FILM_PROMO,
  payload: filmPromo,
});
export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
export const addRequestedRoute = (route) => ({
  type: ActionType.ADD_REQUESTED_ROUTE,
  payload: route,
});
export const getFilmById = (film) => ({
  type: ActionType.FILM_BY_ID,
  payload: film,
});
export const getAllComments = (comments) => ({
  type: ActionType.GET_ALL_COMMENTS,
  payload: comments,
});

export const addReview = (data) => ({ // булеан на отправку формы и блокировки кнопки
  type: ActionType.ADD_REVIEW,
  payload: data,
});
export const changeIsAddReview = (data) => ({
  type: ActionType.CHANGE_IS_ADD_REVIEW,
  payload: data,
});
export const hasErrorLogin = (data) => ({
  type: ActionType.HAS_ERROR_LOGIN,
  payload: data,
});
export const loggedIn = (userData) => ({
  type: ActionType.LOGGED_IN,
  payload: userData,
});
export const setMovieFavorite = (movieId, isFavorite) => ({
  type: ActionType.SET_MOVIE_FAVORITE,
  payload: {
    movieId,
    isFavorite,
  }
});
export const addReviewFail = (isAddPost) => ({
  type: ActionType.IS_ADD_REVIEW_FAIL,
  payload: isAddPost,
});
export const setPromoMovieFavorite = (isFavorite) => ({
  type: ActionType.SET_PROMO_MOVIE_FAVORITE,
  payload: isFavorite,
});

