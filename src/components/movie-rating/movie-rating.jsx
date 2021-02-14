import React from "react";
import PropTypes from "prop-types";

const MovieRating = (props)=>{
  const {film} = props;
  return (
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{film.scoresCount} ratings</span>
      </p>
    </div>
  );
};

MovieRating.propTypes = {
  film: PropTypes.object.isRequired
};

export default MovieRating;
