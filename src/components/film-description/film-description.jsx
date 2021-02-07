import React from "react";
import PropTypes from "prop-types";

const FilmDescription = (props)=>{
  const {firstFilm} = props;
  return (
    <div className="movie-card__text">
      <p>{firstFilm.description}</p>

      <p>Gustave prides himself on providing first-className service to the hotel`&apos;`s guests, including
        satisfying the sexual needs of the many elderly women who stay there. When one of Gustave`&apos;`s lovers
        dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect
        in her murder.</p>

      <p className="movie-card__director"><strong>Director: {firstFilm.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {firstFilm.starring} and other</strong></p>
    </div>
  );
};

FilmDescription.propTypes = {
  firstFilm: PropTypes.object.isRequired
};

export default FilmDescription;
