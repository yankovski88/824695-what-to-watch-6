import {NameSpace} from '../reducer';


export const getAllFilmsSelect = (state) => state[NameSpace.ALL_MOVIES].films;
export const getGenreFilmsSelect = (state) => state[NameSpace.ALL_MOVIES].genreFilms;
export const getGenreSelect = (state) => state[NameSpace.ALL_MOVIES].genre;
export const getIsDataLoadedSelect = (state) => state[NameSpace.ALL_MOVIES].isDataLoaded;
export const getCountShowFilmSelect = (state) => state[NameSpace.ALL_MOVIES].countShowFilm;

export const getFilmByIdSelect = (state) => state[NameSpace.ALL_MOVIES].filmById;
export const getIsFilmLoadedSelect = (state) => state[NameSpace.ALL_MOVIES].isFilmLoaded;

export const getFilmPromoSelect = (state) => state[NameSpace.ALL_MOVIES].filmPromo;
export const getIsAllCommentsSelect = (state) => state[NameSpace.ALL_MOVIES].isAllComments;
export const getAllCommentsSelect = (state) => state[NameSpace.ALL_MOVIES].allComments;

export const getIsAddReviewSelect = (state) => state[NameSpace.ALL_MOVIES].isAddReview;
export const getIsAddReviewFailSelect = (state) => state[NameSpace.ALL_MOVIES].isAddReviewFail;
export const getIsFilmFoundSelect = (state) => state[NameSpace.ALL_MOVIES].isFilmFound;
export const getRequestedRouteSelect = (state) => state[NameSpace.ALL_MOVIES].requestedRoute;
