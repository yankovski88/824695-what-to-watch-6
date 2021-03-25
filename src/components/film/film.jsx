import React from "react";
import Logo from "../logo/logo";
import Copyright from "../copyright/copyright";
// import UserBlock from "../user-block/user-block.jsx";
import CatalogLikeFilms from "../catalog-like-films/catalog-like-films";
import BtnPlay from "../btn-play/btn-play";
import BtnAddMyList from "../btn-add-my-list/btn-add-my-list";
// import LinkAddReview from "../link-add-review/link-add-review";
import MovieNav from "../movie-nav/movie-nav.jsx";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
// import {useHistory, useParams} from "react-router-dom";
import filmProp from "./film.prop";
import Header from "../header/header";
import {connect} from "react-redux";
import {fetchFilmById, fetchMoviesList} from "../../store/api-actions";
import Error404 from "../error-404/error-404";
import {getGenreFilms} from "../../utils/utils";


const Film = (props) => {
  const {
    isFilmFound,
    // likeFilms,
    film,
    reviews,
    updateData,
    filmById,
    loadFilmById,
    isDataLoaded,
    onLoadData,
    films,
    genreFilms,
    likeGenre
  } = props; // authorizationStatus
  let {id} = useParams(); // берем данные с маршрута из app.js
  const {posterImage, name, genre, released} = filmById;
  const [nav] = React.useState({
    nav: `overview`,
  });

  //написать функцию которая из массива с фильмами по id найдет жанр
  const getGenreById = (idFilm, itemFilms) => {
    const films = itemFilms.slice();

    console.log(idFilm)
    console.log(films)
let genre = `All genre`
    for (let item of films) {
      console.log(item.id)
      if (+idFilm === item.id) {
        genre = item.genre
      }
    }
    return genre;
  }

  console.log(likeGenre)
  const genreById = getGenreById(id, films);
  const likeFilms = getGenreFilms(genreById, films).slice(0, 4)
  console.log(likeFilms)

  // // код решает показать btn more или нет
  // let itemGenreFilms; // переменная которая смотрит показывать ли кнопку More Show
  // if (!genreFilms || genreFilms.length === 0) { // если не один из жанров не кликнули, то он равен всем фильмам
  //   itemGenreFilms = films;
  // } else if (genreFilms) {
  //   itemGenreFilms = genreFilms;
  // }


  console.log(isFilmFound)
  console.log(films)

  // запускаем хук useEffect он запускается каждый раз когда открывается страница, он следит за флагом isDataLoaded
  React.useEffect(() => {
    if (id) {
      loadFilmById(id)
    }
    loadFilmById(film.id); // тогда вызываем функцию которая делает запрос на сервер, отдает данные в dispatch, а тот меняет store
  }, [id, film.id]); // useEffect сказали следи за этим флагом если он изменится, то делай запрос

  React.useEffect(() => {
    if (!isDataLoaded) {
      onLoadData()
    }
  }, [isDataLoaded])


  if (!isFilmFound) {
    return (<Error404/>);
  }


  // const getMoviesBySelectedGenre = (movies, selectedGenre) => {
  //   return selectedGenre === `All genres`
  //     ? movies
  //     : movies.filter((movie) => movie.genre === selectedGenre);
  // };
  // const relatedMovies = getMoviesBySelectedGenre(films, film.genre).filter(({id}) => id !== +id).slice(0, 4);


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
                <BtnPlay anyFilm={filmById}/>
                <BtnAddMyList/>
                {/* {authorizationStatus === authorizationStatus.AUTH ?*/}
                <Link to={`/films/${filmById ? filmById.id : ``}/add-review`}
                      className="btn movie-card__button">Add review</Link>
                {/* :*/}

                {/* // }*/}
                {/* <LinkAddReview film={film}/>*/}
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

              <MovieNav nav={nav} film={filmById} reviews={reviews}/>

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        {/*likeFilms={likeFilms}*/}
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
  film: filmProp,
  // likeFilms: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  // film: PropTypes.object.isRequired,
  updateData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmById: state.filmById,
  isFilmFound: state.isFilmFound,
  isDataLoaded: state.isDataLoaded,
  films: state.films,
  genreFilms: state.genreFilms,
  likeGenre: state.likeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
  onLoadData() { // когда вызовится эта функция, то в dispatch попадает результат функции по запросу на сервер
    dispatch(fetchMoviesList());
  }

});


// export default Film;
export {Film};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
