import React from "react";
import PropTypes from "prop-types";

const FilmDescription = (props)=>{
  const {film} = props;

  return (
    <div className="movie-card__text">
      <p>{film.description}</p>

      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>


      <p className="movie-card__starring"><strong>Starring:
        {
          film.starring.map((item)=>{
            return `${item}, `
          })
        } and other</strong></p>
    </div>
  );
};

FilmDescription.propTypes = {
  film: PropTypes.object.isRequired
};

export default FilmDescription;
