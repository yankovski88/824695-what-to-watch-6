import React from "react";
import PropTypes from "prop-types";

const MovieRating = (props)=>{
  const {firstFilm} = props;
  return (
    <div className="movie-rating">
      <div className="movie-rating__score">{firstFilm.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{firstFilm.scoresCount} ratings</span>
      </p>
    </div>
  );
};

MovieRating.propTypes = {
  firstFilm: PropTypes.object.isRequired
};

export default MovieRating;
