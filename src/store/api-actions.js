import {
  addReviewFail,
  changeIsAddReview,
  getAllComments, getAllFilms, getFilmById,
  getFilmPromo,
  hasErrorLogin,
  loggedIn,
  redirectToRoute,
  requireAuthorization, setMovieFavorite, setPromoMovieFavorite
} from "./action";
import {AuthorizationStatus} from "../constants/constants";
import {adaptToClientUser} from "../utils/utils";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then((response) => dispatch(getAllFilms(response.data)))
);
// dispatch это для store чтобы записать в хранилище фильмы с сервера
// api это конфигурация запроса
// _getState пока не знаю, но оно нужно чтобы работал get. Может должно идти по умолчанию.

// далее в диспачь для store попадает пришедшие с запроса data фильмы

export const fetchPromo = ()=>(dispatch, _getState, api)=>(
  api.get(`/films/promo`)
    .then((response) => dispatch(getFilmPromo(response.data)))
);


// проверка авторизован ли пользователь
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      const userData = adaptToClientUser(data);
      dispatch(loggedIn(userData));
    })
    .catch(()=>{})
);

export const login = ({login: email, password}) => (dispatch, getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      const userData = adaptToClientUser(data);
      dispatch(loggedIn(userData));
      dispatch(redirectToRoute(getState().requestedRoute));
    })
    .catch(
        () => dispatch(hasErrorLogin(true)) // думаю может это удалить надо
    )
);

export const fetchFilmById = (id)=>(dispatch, _getState, api)=>(
  api.get(`/films/${id}`)
    .then((response)=>dispatch(getFilmById(response.data)))
    .catch(({response}) => { // если не будет catch будет постоянная загрузка (spinner) т.к. не станет флаг true
      if (response.status === 404) {
        dispatch(redirectToRoute(`/404`)); // если id фильма не найден, то всех отправит страницу 404
      }
    })
);

export const fetchAllComments = (id)=>(dispatch, _getState, api)=>(
  api.get(`/comments/${id}`)
    .then((response)=>dispatch(getAllComments(response.data)))
);

export const fetchPostComment = (id, rating, comment)=>(dispatch, getState, api)=> {

  dispatch(changeIsAddReview(false)); // флаг что если false, то кнопку будет disable
  api.post(`/comments/${id}`, {rating, comment})
    .then(() => {
      dispatch(redirectToRoute(`/films/${id}`));
      dispatch(changeIsAddReview(true)); // флаг что если false, то кнопку будет disable
      dispatch(fetchAllComments(id));
    })
    .catch(()=> dispatch(addReviewFail(true)));
};

export const fetchFavorite = (idFilm, isFavorite, isPromo)=>(dispatch, _getState, api)=>(
  api.post(`/favorite/${idFilm}/${isFavorite}`, {idFilm, isFavorite})
    .then(()=>{
      if (isPromo) {
        dispatch(setPromoMovieFavorite(isFavorite));
      } else {
        dispatch(setMovieFavorite(idFilm, isFavorite, isPromo));
      }
    })
);

// проверка авторизован ли пользователь
export const checkAuthNo = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

