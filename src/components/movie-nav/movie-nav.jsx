import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import MovieRating from "../movie-rating/movie-rating";
import FilmDescription from "../film-description/film-description";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";

const MovieNav = (props) => {
  const {film, reviews} = props;
  const [tab, setTab] = React.useState(0);
  const TAB_ONE = 0;
  const TAB_TWO = 1;
  const TAB_THREE = 2;


  const Tabs = (item) => {
    if (item.tab === TAB_ONE) {
      return (
        <>
          <MovieRating film={film}/>
          <FilmDescription film={film}/>
        </>
      );
    } else if (item.tab === TAB_TWO) {
      return (
        <FilmDetails film={film}/>
      );
    } else if (item.tab === TAB_THREE) {
      return (
        <FilmReviews reviews={reviews}/>
      );
    }
    return ``;
  };

  const handleTabClick = (evt, index) => {
    evt.preventDefault();
    setTab(index);
  };


  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li onClick={(evt) => handleTabClick(evt, TAB_ONE)}
            className={`movie-nav__item  ${tab === TAB_ONE ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}`} className="movie-nav__link" name="overview"
            >Overview</Link>
          </li>
          <li onClick={(evt) => handleTabClick(evt, TAB_TWO)}
            className={`movie-nav__item  ${tab === TAB_TWO ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}/details`} className="movie-nav__link " name="details"
            >Details</Link>
          </li>
          <li onClick={(evt) => handleTabClick(evt, TAB_THREE)}
            className={`movie-nav__item  ${tab === TAB_THREE ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}/reviews`} className="movie-nav__link " name="reviews"
            >Reviews</Link>
          </li>
        </ul>
      </nav>
      <Tabs tab={tab}/>
    </>
  );
};

MovieNav.propTypes = {
  film: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default MovieNav;
