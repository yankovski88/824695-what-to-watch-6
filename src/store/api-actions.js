import {ActionCreator} from "./action";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then((response) => dispatch(ActionCreator.getAllFilms(response.data)))
);
// dispatch это для store чтобы записать в хранилище фильмы с сервера
// api это конфигурация запроса
// _getState пока не знаю, но оно нужно чтобы работал get. Может должно идти по умолчанию.

// далее в диспачь для store попадает пришедшие с запроса data фильмы

export const login = ()=>(dispatch, _getState, api)=>(
  api.get(`/login`)
    .then((body)=> console.log(body))
);

export const fetchPromo = ()=>(dispatch, _getState, api)=>(
  api.get(`/films/promo`)
    .then((response) => dispatch(ActionCreator.getFilmPromo(response.data)))
);
