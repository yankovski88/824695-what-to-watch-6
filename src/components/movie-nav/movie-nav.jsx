import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import MovieRating from "../movie-rating/movie-rating";
import FilmDescription from "../film-description/film-description";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";

const MovieNav = (props) => {
  const {nav, film, reviews} = props;
  const [activeNav, setActiveNav] = React.useState(nav);

  const handleNavChange = (evt) => {
    const {name} = evt.target;
    setActiveNav({nav: name});
  };

  const IsActiveNav = (navElement) => {
    if (navElement.activeNav === `overview`) {
      return (
        <>
          <MovieRating film={film}/>
          <FilmDescription film={film}/>
        </>
      );
    } else if (navElement.activeNav === `details`) {
      return (
        <FilmDetails film={film} />
      );
    } else if (navElement.activeNav === `reviews`) {
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
          <li className={`movie-nav__item  ${activeNav.nav === `overview` ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}`} className="movie-nav__link" name="overview" onClick={handleNavChange}>Overview</Link>
          </li>
          <li className={`movie-nav__item  ${activeNav.nav === `details` ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}/details`} className="movie-nav__link " name="details"
              onClick={handleNavChange}>Details</Link>
          </li>
          <li className={`movie-nav__item  ${activeNav.nav === `reviews` ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}/reviews`} className="movie-nav__link " name="reviews"
              onClick={handleNavChange}>Reviews</Link>
          </li>
        </ul>
      </nav>
      <IsActiveNav activeNav = {activeNav.nav}/>
    </>
  );
};

MovieNav.propTypes = {
  nav: PropTypes.object.isRequired,
  film: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default MovieNav;
