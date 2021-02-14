import React from "react";
import Logo from "../logo/logo";
import Copyright from "../copyright/copyright";
import UserBlock from "../user-block/user-block.jsx";
import CatalogLikeFilms from "../catalog-like-films/catalog-like-films";
import BtnPlay from "../btn-play/btn-play";
import BtnAddMyList from "../btn-add-my-list/btn-add-my-list";
import LinkAddReview from "../link-add-review/link-add-review";
import MovieNav from "../movie-nav/movie-nav.jsx";
import MovieRating from "../movie-rating/movie-rating.jsx";
import FilmDescription from "../film-description/film-description";
import PropTypes from "prop-types";
import FilmReviews from "../film-reviews/film-reviews";
import FilmDetails from "../film-details/film-details";


const Film = (props) => {
  const {likeFilms, reviews, film} = props;
  // const [firstFilm] = likeFilms; // ...films

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo/>
            <UserBlock/>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <BtnPlay/>
                <BtnAddMyList/>
                <LinkAddReview/>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">

              <MovieNav/>
              {/* <MovieRating film={film}/>*/}
              {/* <FilmDescription film={film}/>*/}

              {/* <FilmReviews reviews={reviews}/>*/}
              <FilmDetails film={film} />


            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <CatalogLikeFilms likeFilms={likeFilms}/>

        <footer className="page-footer">
          <Logo/>
          <Copyright/>
        </footer>
      </div>
    </>
  );
};
Film.propTypes = {
  likeFilms: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};
export default Film;
