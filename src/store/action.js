// определяем действия
export const ActionType = {
  GENRE: `main/GENRE`,
  MORE_FILM: `main/MORE_FILM`,
  GET_ALL_FILMS: `main/GET_ALL_FILMS`,
  REQUIRED_AUTHORIZATION: `user/REQUIRED_AUTHORIZATION`,
  GET_FILM_PROMO: `main/GET_FILM_PROMO`,
  REDIRECT_TO_ROUTE: `main/REDIRECT_TO_ROUTE`,
  ADD_REQUESTED_ROUTE: `main/ADD_REQUESTED_ROUTE`,
  FILM_BY_ID: `main/FILM_BY_ID`,
  GET_ALL_COMMENTS: `main/GET_ALL_COMMENTS`,
  CHANGE_IS_ADD_REVIEW: `user/CHANGE_IS_ADD_REVIEW`,

  HAS_ERROR_LOGIN: `user/HAS_ERROR_LOGIN`,
  LOGGED_IN: `user/LOGGED_IN`,

  SET_MOVIE_FAVORITE: `main/SET_MOVIE_FAVORITE`,
  IS_ADD_REVIEW_FAIL: `main/IS_ADD_REVIEW_FAIL`,
  SET_PROMO_MOVIE_FAVORITE: `main/SET_PROMO_MOVIE_FAVORITE`
};


// создаем объект функция которые возвращают экшин
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
export const changeIsAddReview = (bool) => ({
  type: ActionType.CHANGE_IS_ADD_REVIEW,
  payload: bool,
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

