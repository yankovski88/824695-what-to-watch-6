import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../constants/constants";
import {adaptToClientUser} from "./reducer";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then((response) => dispatch(ActionCreator.getAllFilms(response.data)))
);
// dispatch это для store чтобы записать в хранилище фильмы с сервера
// api это конфигурация запроса
// _getState пока не знаю, но оно нужно чтобы работал get. Может должно идти по умолчанию.

// далее в диспачь для store попадает пришедшие с запроса data фильмы

export const fetchPromo = ()=>(dispatch, _getState, api)=>(
  api.get(`/films/promo`)
    .then((response) => dispatch(ActionCreator.getFilmPromo(response.data)))
);


// проверка авторизован ли пользователь
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      const userData = adaptToClientUser(data);
      dispatch(ActionCreator.loggedIn(userData));
    })
    // .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
        // () => dispatch(ActionCreator.hasErrorLogin(true)) // думаю может это удалить надо
      )
);

export const login = ({login: email, password}) => (dispatch, getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      const userData = adaptToClientUser(data);
      dispatch(ActionCreator.loggedIn(userData));
      // dispatch(ActionCreator.redirectToRoute(`/`)); // для теста проходит
      dispatch(ActionCreator.redirectToRoute(getState().requestedRoute));
    })
    .catch(
      ()=> dispatch(ActionCreator.hasError(true))
    //   () => {
    //   dispatch(()=>{}); // loggedInFail()
    // }
    )
);


// // отправка данных для авторизации
// export const login = ({login: email, password}) => (dispatch, getState, api) => (
//   api.post(`/login`, {email, password})
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .then(() => dispatch(ActionCreator.redirectToRoute(getState().requestedRoute))) // если пользователь логинится, то закинь его на главную страницу
// );

export const fetchFilmById = (id)=>(dispatch, _getState, api)=>(
  api.get(`/films/${id}`)
    .then((response)=>dispatch(ActionCreator.getFilmById(response.data)))
    .catch(({response}) => { // если не будет catch будет постоянная загрузка (spinner) т.к. не станет флаг true
      if (response.status === 404) {
        dispatch(ActionCreator.redirectToRoute(`/404`));
      }
    })
);

export const fetchAllComments = (id)=>(dispatch, _getState, api)=>(
  api.get(`/comments/${id}`)
    .then((response)=>dispatch(ActionCreator.getAllComments(response.data)))
);

export const fetchPostComment = (id, rating, comment)=>(dispatch, getState, api)=> {

  dispatch(ActionCreator.changeIsAddReview(false)); // флаг что если false, то кнопку будет disable
  api.post(`/comments/${id}`, {rating, comment})
    .then(() => {dispatch(ActionCreator.redirectToRoute(`/films/${id}`))
      dispatch(ActionCreator.changeIsAddReview(true)); // флаг что если false, то кнопку будет disable
    }) // getState().requestedRoute
    .catch(()=> dispatch(ActionCreator.hasError(true)));
};

export const fetchFavorite = (idFilm, isFavorite)=>(dispatch, _getState, api)=>(
  api.post(`/favorite/${idFilm}/${isFavorite}`, {idFilm, isFavorite})
    .then(()=>dispatch(ActionCreator.setMovieFavorite(idFilm, isFavorite)))
);

// проверка авторизован ли пользователь
export const checkAuthNo = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

