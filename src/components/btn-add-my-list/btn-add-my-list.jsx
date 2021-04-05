import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {fetchFavorite, fetchFilmById, fetchMoviesList} from "../../store/api-actions";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../constants/constants";
import PropTypes from "prop-types";
import {moviePropTypes} from "../../prop-types";

const BtnAddMyList = (props) => {
  const {loadFavorite, filmById, filmPromo, authorizationStatus} = props;
  const history = useHistory();
  const {id} = useParams();


  let filmForBtn;
  if (id) {
    filmForBtn = filmById;
  } else {
    filmForBtn = filmPromo;
  }

  const hendleOnClickFilmFavorite = (evt) => {
    evt.preventDefault();
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      history.push(`/login`);
    }

    let numberStatus = 0;
    if (!filmForBtn.isFavorite) {
      numberStatus = 1;
    } else if (filmForBtn.isFavorite) {
      numberStatus = 0;
    }
    loadFavorite(filmForBtn.id, numberStatus, !id);
  };


  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={hendleOnClickFilmFavorite}>
      {filmForBtn.isFavorite ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z"
            fill="#EEE5B5"></path>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
    </button>
  );
};

export {BtnAddMyList};

BtnAddMyList.propTypes = {
  loadFavorite: PropTypes.func.isRequired,
  filmPromo: moviePropTypes,
  filmById: moviePropTypes,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({ALL_MOVIES, USER}) => ({
  films: ALL_MOVIES.films,
  filmPromo: ALL_MOVIES.filmPromo,
  authorizationStatus: USER.authorizationStatus,
  filmById: ALL_MOVIES.filmById,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() { // когда вызовится эта функция, то в dispatch попадает результат функции по запросу на сервер
    dispatch(fetchMoviesList());
  },
  loadFavorite(idFilm, isFavorite, isPromo) {
    dispatch(fetchFavorite(idFilm, isFavorite, isPromo));
  },
  loadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BtnAddMyList);
