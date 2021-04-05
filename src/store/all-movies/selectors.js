import {NameSpace} from '../reducer';


export const getAllMovies = (state) => state[NameSpace.ALL_MOVIES].films;
export const getGenreFilms = (state) => state[NameSpace.ALL_MOVIES].genreFilms;
export const getGenre = (state) => state[NameSpace.ALL_MOVIES].genre;
export const getIsDataLoaded = (state) => state[NameSpace.ALL_MOVIES].isDataLoaded;
export const getCountShowFilm = (state) => state[NameSpace.ALL_MOVIES].countShowFilm;

export const getFilmById = (state) => state[NameSpace.ALL_MOVIES].filmById;
export const getIsFilmLoaded = (state) => state[NameSpace.ALL_MOVIES].isFilmLoaded;

export const getFilmPromo = (state) => state[NameSpace.ALL_MOVIES].filmPromo;
export const getIsAllComments = (state) => state[NameSpace.ALL_MOVIES].isAllComments;
export const getAllComments = (state) => state[NameSpace.ALL_MOVIES].allComments;

export const getIsAddReview = (state) => state[NameSpace.ALL_MOVIES].isAddReview;
export const getIsAddReviewFail = (state) => state[NameSpace.ALL_MOVIES].isAddReviewFail;
export const getIsFilmFound = (state) => state[NameSpace.ALL_MOVIES].isFilmFound;
export const getRequestedRoute = (state) => state[NameSpace.ALL_MOVIES].requestedRoute;
