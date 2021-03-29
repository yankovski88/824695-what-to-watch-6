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
  GET_ALL_FAVORITE_FILMS: `user/getAllFavoriteFilms`,
  ADD_REVIEW: `user/ADD_REVIEW`
};

// создаем объект функция которые возвращают экшин
export const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.GENRE, // тип экшина
    payload: genre, // payload это полезная нагрузка которую появляется при клике от пользователя
  }),
  moreFilm: () => ({
    type: ActionType.MORE_FILM
  }),
  getAllFilms: (data) => ({
    type: ActionType.GET_ALL_FILMS,
    payload: data
  }),
  likeFilms: (data) => ({ // функция для похожих фильмов
    type: ActionType.LIKE_FILMS,
    payload: data
  }),
  getFilmPromo: (filmPromo)=>({
    type: ActionType.GET_FILM_PROMO,
    payload: filmPromo,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  addRequestedRoute: (route) => ({
    type: ActionType.ADD_REQUESTED_ROUTE,
    payload: route,
  }),
  getFilmById: (film)=>({
    type: ActionType.FILM_BY_ID,
    payload: film,
  }),
  getAllComments: (comments)=>({
    type: ActionType.GET_ALL_COMMENTS,
    payload: comments,
  }),
  getAllFavoriteFilms: (favoriteFilms)=>({
    type: ActionType.GET_ALL_FAVORITE_FILMS,
    payload: favoriteFilms,
  }),
  addReview: (data)=>({
    type: ActionType.GET_ALL_FAVORITE_FILMS,
    payload: data,
  }),
};
