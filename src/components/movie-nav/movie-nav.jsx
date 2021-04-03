import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import MovieRating from "../movie-rating/movie-rating";
import FilmDescription from "../film-description/film-description";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";

const MovieNav = (props) => {
  const {film, reviews, path} = props;

  const Tabs = (activeNav) => {
    if (activeNav.path === `/films/:id`) {
      return (
        <>
          <MovieRating film={film}/>
          <FilmDescription film={film}/>
        </>
      );
    } else if (activeNav.path === `/films/:id/details`) {
      return (
        <FilmDetails film={film} />
      );
    } else if (activeNav.path === `/films/:id/reviews`) {
      return (
        <FilmReviews reviews={reviews}/>
      );
    }
    return ``;
  };


  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item  ${path === `/films/:id` ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}`} className="movie-nav__link" name="overview"
            >Overview</Link>
          </li>
          <li className={`movie-nav__item  ${path === `/films/:id/details` ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}/details`} className="movie-nav__link " name="details"
            >Details</Link>
          </li>
          <li className={`movie-nav__item  ${path === `/films/:id/reviews` ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}/reviews`} className="movie-nav__link " name="reviews"
            >Reviews</Link>
          </li>
        </ul>
      </nav>
      <Tabs path = {path}/>
    </>
  );
};

MovieNav.propTypes = {
  film: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
};

export default MovieNav;
