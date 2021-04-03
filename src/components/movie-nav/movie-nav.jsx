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

  const Tabs = (item) => {
    if (item.tab === 0) {
      return (
        <>
          <MovieRating film={film}/>
          <FilmDescription film={film}/>
        </>
      );
    } else if (item.tab === 1) {
      return (
        <FilmDetails film={film} />
      );
    } else if (item.tab === 2) {
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
          <li onClick={(evt)=> handleTabClick(evt, 0)} className={`movie-nav__item  ${tab === 0 ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}`} className="movie-nav__link" name="overview"
            >Overview</Link>
          </li>
          <li onClick={(evt)=> handleTabClick(evt, 1)} className={`movie-nav__item  ${tab === 1 ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}/details`} className="movie-nav__link " name="details"
            >Details</Link>
          </li>
          <li onClick={(evt)=>handleTabClick(evt, 2)} className={`movie-nav__item  ${tab === 2 ? `movie-nav__item--active` : ``}`}>
            <Link to={`/films/${film.id}/reviews`} className="movie-nav__link " name="reviews"
            >Reviews</Link>
          </li>
        </ul>
      </nav>
      <Tabs tab = {tab}/>
    </>
  );
};

MovieNav.propTypes = {
  film: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default MovieNav;
