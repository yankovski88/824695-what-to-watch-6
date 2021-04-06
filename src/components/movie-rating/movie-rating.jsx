import React from "react";
import PropTypes from "prop-types";
import {moviePropTypes} from "../../prop-types";


const MovieRating = (props)=>{
  const {film} = props;

  const TextRating = {
    BAD: `Bad`,
    NORMAL: `Normal`,
    GOOD: `Good`,
    VERY_GOOD: `Very good`,
    AWESOME: `Awesome`
  };

  const NumberRating = {
    THREE: 3,
    FIVE: 5,
    EIGHT: 8,
    TEN: 10,
  };

  let textRating = ``;
  if (film.rating < NumberRating.THREE) {
    textRating = TextRating.BAD;
  } else if (film.rating >= NumberRating.THREE && film.rating < NumberRating.FIVE) {
    textRating = TextRating.NORMAL;

  } else if (film.rating >= NumberRating.FIVE && film.rating < NumberRating.EIGHT) {
    textRating = TextRating.GOOD;

  } else if (film.rating >= NumberRating.EIGHT && film.rating < NumberRating.TEN) {
    textRating = TextRating.VERY_GOOD;

  } else if (film.rating === NumberRating.TEN) {
    textRating = TextRating.AWESOME;
  }

  return (
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{textRating}</span>
        <span className="movie-rating__count">{film.scoresCount} ratings</span>
      </p>
    </div>
  );
};

MovieRating.propTypes = {
  film: PropTypes.oneOfType([
    moviePropTypes,
    PropTypes.shape({}).isRequired,
  ]).isRequired
};

export default MovieRating;
