import React from "react";
import PropTypes from "prop-types";

const FilmDescription = (props)=>{
  const {film} = props;

  return (
    <div className="movie-card__text">
      <p>{film.description}</p>

      <p>Gustave prides himself on providing first-className service to the hotel&apos;s guests, including
        satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers
        dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect
        in her murder.</p>

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
