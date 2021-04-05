import React from "react";
import Logo from "../logo/logo";
import Copyright from "../copyright/copyright";
import CatalogLikeFilms from "../catalog-like-films/catalog-like-films";
import BtnPlay from "../btn-play/btn-play";
import BtnAddMyList from "../btn-add-my-list/btn-add-my-list";
import MovieNav from "../movie-nav/movie-nav.jsx";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import Header from "../header/header";
import {connect} from "react-redux";
import {fetchFilmById, fetchMoviesList, fetchAllComments} from "../../store/api-actions";
import {getGenreById, getGenreFilms} from "../../utils/utils";
import {AuthorizationStatus} from "../../constants/constants";
import LinkAddReview from "../link-add-review/link-add-review";
import {moviePropTypes, reviewPropTypes} from "../../prop-types";
import {
  getAllCommentsSelect,
  getAllFilmsSelect,
  getFilmByIdSelect, getGenreFilmsSelect, getIsAllCommentsSelect,
  getIsDataLoadedSelect,
  getIsFilmFoundSelect
} from "../../store/all-movies/selectors";
import {getAuthorizationStatus} from "../../store/user/selectors";


const Film = (props) => {
  const {
    updateData,
    filmById,
    loadFilmById,
    isDataLoaded,
    onLoadData,
    films,
    isAllComments,
    allComments,
    loadAllComments,
    authorizationStatus,
    onPrivateRouteRequest,
  } = props;

  const {id} = useParams(); // берем данные с маршрута из app.js
  const {posterImage, name, genre, released} = filmById;
  const BEGIN_INDEX = 0;
  const END_INDEX = 4;

  // эта функция вызывается при каждом рендере. Делаем оптимизацию чтобы она вызывалась если меняются пропсы.
  const likeFilms = React.useMemo(()=>{
    const genreById = getGenreById(id, films); // нашли жанр фильма по id маршрута
    return getGenreFilms(genreById, films, id).slice(BEGIN_INDEX, END_INDEX);
  }, [films, id]); // нашли все похожие фильмы по жанру


  // запускаем хук useEffect он запускается каждый раз когда открывается страница, он следит за флагом isDataLoaded
  React.useEffect(() => {
    if (id) {
      loadFilmById(id);// тогда вызываем функцию которая делает запрос на сервер, отдает данные в dispatch, а тот меняет store
    }
  }, [id]); // useEffect сказали следи за этим флагом если он изменится, то делай запрос

  React.useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  React.useEffect(() => {
    if (!isAllComments) { // елси флаг false, то никогда коменты не загружались
      loadAllComments(id); // делаем запрос на коменты
    }
  }, [isAllComments]); // ставим слежку за флагом коментов


  // код следит если не авторизован, то после авторизации останется на этой же страницу с фильмом
  React.useEffect(() => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      onPrivateRouteRequest(`/films/${id}`); // передал маршрут чтобы оставался на странице с фильмом
    }
  }, [authorizationStatus]);


  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={filmById.backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <BtnPlay />

                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <>
                    <BtnAddMyList/>
                    <LinkAddReview filmById={filmById}/>
                  </>
                  : ``}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <MovieNav film={filmById} reviews={allComments}/>

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <CatalogLikeFilms likeFilms={likeFilms} updateData={updateData}/>

        <footer className="page-footer">
          <Logo/>
          <Copyright/>
        </footer>
      </div>
    </>
  );
};

Film.propTypes = {
  updateData: PropTypes.func.isRequired,
  loadAllComments: PropTypes.func.isRequired,
  filmById: moviePropTypes,
  loadFilmById: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(moviePropTypes).isRequired,
  isAllComments: PropTypes.bool.isRequired,
  allComments: PropTypes.arrayOf(reviewPropTypes).isRequired,
  isFilmFound: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onPrivateRouteRequest: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  filmById: getFilmByIdSelect(state),
  isFilmFound: getIsFilmFoundSelect(state),
  isDataLoaded: getIsDataLoadedSelect(state),
  films: getAllFilmsSelect(state),
  genreFilms: getGenreFilmsSelect(state),
  isAllComments: getIsAllCommentsSelect(state),
  allComments: getAllCommentsSelect(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
  onLoadData() { // когда вызовится эта функция, то в dispatch попадает результат функции по запросу на сервер
    dispatch(fetchMoviesList());
  },
  loadAllComments(id) {
    dispatch(fetchAllComments(id));
  },
});


export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
