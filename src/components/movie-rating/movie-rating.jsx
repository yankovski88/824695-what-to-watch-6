import React from "react";
import PropTypes from "prop-types";


const MovieRating = (props)=>{
  const {film} = props;

  const TextRating = {
    BAD: `Bad`,
    NORMAL: `Normal`,
    GOOD: `Good`,
    VERY_GOOD: `Very good`,
    AWESOME: `Awesome`
  };

  let textRating = ``;
  if (film.rating < 3) {
    textRating = TextRating.BAD;
  } else if (film.rating >= 3 && film.rating < 5) {
    textRating = TextRating.NORMAL;

  } else if (film.rating >= 5 && film.rating < 8) {
    textRating = TextRating.GOOD;

  } else if (film.rating >= 8 && film.rating < 10) {
    textRating = TextRating.VERY_GOOD;

  } else if (film.rating === 10) {
    textRating = TextRating.AWESOME;
  }

  return (
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating.toFixed(1)}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{textRating}</span>
        <span className="movie-rating__count">{film.scoresCount} ratings</span>
      </p>
    </div>
  );
};

MovieRating.propTypes = {
  film: PropTypes.object.isRequired
};

export default MovieRating;
