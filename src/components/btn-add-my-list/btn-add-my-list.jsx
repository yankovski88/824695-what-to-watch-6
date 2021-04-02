import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {fetchFavorite, fetchFilmById, fetchMoviesList} from "../../store/api-actions";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../constants/constants";
import PropTypes from "prop-types";

const BtnAddMyList = (props) => {
  const {loadFavorite, filmById, loadFilmById, filmPromo, authorizationStatus} = props;
  const history = useHistory();
  const {id} = useParams();
console.log(filmById)

  // запускаем хук useEffect он запускается каждый раз когда открывается страница, он следит за флагом isDataLoaded
  React.useEffect(() => {
    if (id) {
      loadFilmById(id);
    }
  }, [id]); // useEffect сказали следи за этим флагом если он изменится, то делай запрос


  let filmForBtn;
  if (filmById) {
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
    console.log(filmForBtn.id, numberStatus)
    loadFavorite(filmForBtn.id, numberStatus);
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
  filmPromo: PropTypes.object.isRequired,
  filmById: PropTypes.object.isRequired,
  loadFilmById: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  filmPromo: state.filmPromo,
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() { // когда вызовится эта функция, то в dispatch попадает результат функции по запросу на сервер
    dispatch(fetchMoviesList());
  },
  loadFavorite(idFilm, isFavorite) {
    dispatch(fetchFavorite(idFilm, isFavorite));
  },
  loadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BtnAddMyList);
