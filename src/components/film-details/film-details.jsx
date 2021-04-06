import React from "react";
import {getTimeMovie} from "../../utils/utils";
import Spinner from "../spinner/spinner";
import {moviePropTypes} from "../../prop-types";
import PropTypes from "prop-types";

const FilmDetails = (props) => {
  const {film} = props;
  if (Object.keys(film).length === 0) {
    return <Spinner/>;
  }

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item" id={film.id} key={film.id}>
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{film.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value" key={film.id}>
            {film.starring.map((item) => {

              return (
                <li key={item} style={{listStyle: `none`}}> {item} <br/>   </li>
              );
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getTimeMovie(film.runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{film.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
};


FilmDetails.propTypes = {
  film: PropTypes.oneOfType([
    moviePropTypes,
    PropTypes.shape({}).isRequired,
  ]).isRequired,
};

export default FilmDetails;
